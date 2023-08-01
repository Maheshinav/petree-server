/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('selected_item', function(table) {
      table.increments('selected_item_id').primary();
      table.integer('claypot_id').unsigned().notNullable();
      table.integer('tree_id').unsigned().notNullable();
      table.integer('user_id').unsigned().notNullable();
  
      // Add foreign key constraints for claypot_id, tree_id, and user_id
      table.foreign('claypot_id').references('claypot_id').inTable('clay_pot');
      table.foreign('tree_id').references('tree_id').inTable('tree');
      table.foreign('user_id').references('user_id').inTable('user');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('selected_items');
  };
  