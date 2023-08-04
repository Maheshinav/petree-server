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
    const id = req.params.id; 
  
    knex
      .select("*")
      .from("user")
      .where({ user_id: id }) 
      .then((user) => {
        if (user.length === 0) {
         
          return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user[0]); 
      })
      .catch((error) => res.status(500).json({ error: "Database error" }));
  });
  

router.post("/petree", [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required"),
  ], async (req, res) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
   
    const { email, password, first_name, user_name, user_image, user_type } = req.body;
  
    try {
      
      const existingUser = await knex("user").where("email", email).first();
      if (existingUser) {
        return res.status(400).json({ error: "User with this email already exists" });
      }
  
      
      const hashedPassword = await bcrypt.hash(password, 10);
  
      
      await knex("user").insert({
        user_name: user_name,
        user_type: user_type,
        first_name: first_name,
        email: email,
        password: hashedPassword,
        user_image: user_image,
      });
  
      
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Database error" });
    }
  });

  router.patch("/petree/:user_id", (req, res) => {
    const userId = req.params.user_id;
    const updatedUserData = req.body;
  
    
    if (!updatedUserData || Object.keys(updatedUserData).length === 0) {
      return res.status(400).json({ error: "Invalid user data" });
    }
  
    knex("user")
      .where({ user_id: userId }) 
      .update(updatedUserData) 
      .then((rowCount) => {
        if (rowCount === 0) {
          
          return res.status(404).json({ error: "User not found" });
        } else {
          
          return res.status(200).json({ message: "User data updated successfully" });
        }
      })
      .catch((error) => res.status(500).json({ error: "Database error" }));
  });
  
router.post("/login", [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required"),
  ], async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    
    const { email, password } = req.body;
  
    try {
      
      const user = await knex("user").where("email", email).first();

      console.log("User Details:", user);
  
     
      if (!user) {
        return res.status(401).json({ error: "Invalid email" });
      }
  
      
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      
      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid password" });
      }
  
      
      const token = jwt.sign({ userId: user.user_id, username: user.user_name }, "your-secret-key", { expiresIn: "1h" });
  
     
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Database error" });
    }
  });

  router.get('/trees', async (req, res) => {
    try {
    
      const trees = await knex.select('*').from('Tree');
      res.json(trees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
 
router.get('/trees/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
     
      const tree = await knex('tree').where('tree_id', id).first();
  
      if (!tree) {

        return res.status(404).json({ error: 'Tree not found' });
      }
  

      res.json(tree);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  router.get('/claypots', async (req, res) => {
    try {
      
      const claypots = await knex.select('*').from('claypot');
      res.json(claypots);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
 
router.get('/claypots/:id', async (req, res) => {
    const claypotId = req.params.id;
  
    try {
      
      const claypot = await knex.select('*').from('claypot').where('claypot_id', claypotId).first();
  
      if (!claypot) {
        
        return res.status(404).json({ error: 'Claypot not found' });
      }
  
     
      res.json(claypot);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  

module.exports = router;