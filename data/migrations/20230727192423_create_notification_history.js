/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('notification_history', function(table) {
      table.increments('notification_history_id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.string('notification_description', 255).notNullable();
      table.date('date').notNullable();
      table.integer('item_id').unsigned().notNullable();
  
      // Add foreign key constraint for user_id
      table.foreign('user_id').references('user_id').inTable('user');
      // Add foreign key constraint for item_id to reference selected_item_id from selected_items table
      table.foreign('item_id').references('selected_item_id').inTable('selected_item');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('notification_history');
  };
  