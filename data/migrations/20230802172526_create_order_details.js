/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order_details', function(table) {
      table.increments('order_details_id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.integer('tree_id').unsigned().notNullable();
      table.integer('claypot_id').unsigned().notNullable();
      table.decimal('order_details_gst', 10, 2).notNullable();
      table.decimal('order_details_hst', 10, 2).notNullable();
      table.decimal('order_details_total', 10, 2).notNullable();
  
      // Add foreign key constraints for tree_id, claypot_id, and user_id
      table.foreign('user_id').references('user_id').inTable('user');
      table.foreign('tree_id').references('tree_id').inTable('tree');
      table.foreign('claypot_id').references('claypot_id').inTable('claypot');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('order_details');
  };
  