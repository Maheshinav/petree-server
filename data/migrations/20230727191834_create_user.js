/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
      table.increments('user_id').primary();
      table.string('user_name', 50).notNullable().unique();
      table.string('user_image', 255);
      table.string('user_type', 20).notNullable();
      table.string('first_name', 50).notNullable();
      table.string('last_name', 50);
      table.string('contact_number', 20)
      table.string('email', 100).notNullable().unique();
      table.string('address', 255);
      table.string('password', 255).notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('user');
  };
  