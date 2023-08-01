/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// seeds/seed_users.js

exports.seed = function(knex) {
  // Deletes ALL existing entries from the user table
  return knex('user').del()
    .then(function () {
      // Inserts seed entries for three users
      return knex('user').insert([
        {
          user_name: 'john_doe',
          user_image: 'john.jpg',
          user_type: 'regular',
          first_name: 'John',
          last_name: 'Doe',
          contact_number: '1234567890',
          email: 'john@example.com',
          address: '123 Main Street',
          password: '$2b$10$3SYxsc2o2e4YGoNjnPpwce4ttiHioc1JLL.lhj2JfWbu.cKp862/K' // Replace this with the actual hashed password
        },
        {
          user_name: 'jane_smith',
          user_image: 'jane.jpg',
          user_type: 'regular',
          first_name: 'Jane',
          last_name: 'Smith',
          contact_number: '9876543210',
          email: 'jane@example.com',
          address: '456 Elm Street',
          password: '$2b$10$3SYxsc2o2e4YGoNjnPpwce4ttiHioc1JLL.lhj2JfWbu.cKp862/K' // Replace this with the actual hashed password
        },
        {
          user_name: 'bob_johnson',
          user_image: 'bob.jpg',
          user_type: 'admin',
          first_name: 'Bob',
          last_name: 'Johnson',
          contact_number: '5678901234',
          email: 'bob@example.com',
          address: '789 Oak Street',
          password: '$2b$10$3SYxsc2o2e4YGoNjnPpwce4ttiHioc1JLL.lhj2JfWbu.cKp862/K' // Replace this with the actual hashed password
        }
      ]);
    });
};

