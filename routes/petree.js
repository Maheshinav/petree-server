const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const knex = require("knex")(require("../knexfile").development);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/petree", (req, res) => {
  knex
    .select("*")
    .from("user")
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(500).json({ error: "Database error" }));
});
router.get("/petree/:id", (req, res) => {
    const id = req.params.id; // Get the 'id' parameter from the request
  
    knex
      .select("*")
      .from("user")
      .where({ user_id: id }) // Filter the data based on the 'user_id' parameter
      .then((user) => {
        if (user.length === 0) {
          // If no user found with the specified ID
          return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user[0]); // Return the first (and only) user object
      })
      .catch((error) => res.status(500).json({ error: "Database error" }));
  });
  

router.post("/petree", [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required"),
  ], async (req, res) => {
    // Validate the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    // Destructure email and password from request body
    const { email, password, first_name, user_name, user_image, user_type } = req.body;
  
    try {
      // Check if the user with the given email already exists in the database
      const existingUser = await knex("user").where("email", email).first();
      if (existingUser) {
        return res.status(400).json({ error: "User with this email already exists" });
      }
  
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert the new user data into the database
      await knex("user").insert({
        user_name: user_name,
        user_type: user_type,
        first_name: first_name,
        email: email,
        password: hashedPassword,
        user_image: user_image,
      });
  
      // Respond with a success message
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Database error" });
    }
  });

  router.patch("/petree/:user_id", (req, res) => {
    const userId = req.params.user_id;
    const updatedUserData = req.body;
  
    // Ensure that the request body contains valid user data
    if (!updatedUserData || Object.keys(updatedUserData).length === 0) {
      return res.status(400).json({ error: "Invalid user data" });
    }
  
    knex("user")
      .where({ user_id: userId }) // Filter by the user ID
      .update(updatedUserData) // Update the user data with the request body
      .then((rowCount) => {
        if (rowCount === 0) {
          // If no user found with the given ID, return a 404 response
          return res.status(404).json({ error: "User not found" });
        } else {
          // Return a success response with the updated user data
          return res.status(200).json({ message: "User data updated successfully" });
        }
      })
      .catch((error) => res.status(500).json({ error: "Database error" }));
  });
  
router.post("/login", [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required"),
  ], async (req, res) => {
    // Validate the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    // Destructure email and password from request body
    const { email, password } = req.body;
  
    try {
      // Find the user by email in the database
      const user = await knex("user").where("email", email).first();

      console.log("User Details:", user);
  
      // If the user with the given email doesn't exist, respond with an error
      if (!user) {
        return res.status(401).json({ error: "Invalid email" });
      }
  
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      // If the passwords don't match, respond with an error
      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid password" });
      }
  
      // Create a JWT token
      const token = jwt.sign({ userId: user.user_id }, "your-secret-key", { expiresIn: "1h" });
  
      // Send the token back to the client
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Database error" });
    }
  });

  router.get('/trees', async (req, res) => {
    try {
      // Fetch all tree data from the 'Tree' table
      const trees = await knex.select('*').from('Tree');
      res.json(trees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  router.get('/claypots', async (req, res) => {
    try {
      // Fetch all claypot data from the 'claypot' table
      const claypots = await knex.select('*').from('claypot');
      res.json(claypots);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

module.exports = router;