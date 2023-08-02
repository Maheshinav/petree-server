/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('notification', function(table) {
      table.increments('notification_id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.integer('item_id').unsigned().notNullable(); 
      table.integer('claypot_id').unsigned();
      table.integer('tree_id').unsigned();
      table.timestamp('time').defaultTo(knex.fn.now());
      table.string('notification_description', 255).notNullable().defaultTo('Default Notification'); // Set default value here
  
      // Add foreign key constraints for user_id, claypot_id, and tree_id
      table.foreign('user_id').references('user_id').inTable('user');
      table.foreign('claypot_id').references('claypot_id').inTable('claypot');
      table.foreign('tree_id').references('tree_id').inTable('tree');
      table.foreign('item_id').references('selected_item_id').inTable('selected_item').onDelete('CASCADE');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('notification');
  };
  