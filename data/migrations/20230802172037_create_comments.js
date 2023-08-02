/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comment', function(table) {
      table.increments('comment_id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.integer('claypot_id').unsigned();
      table.integer('tree_id').unsigned();
      table.text('comment_body');
      table.timestamp('comment_date').defaultTo(knex.fn.now());
  
      // Add foreign key constraints for claypot_id and tree_id
      table.foreign('user_id').references('user_id').inTable('user');
      table.foreign('claypot_id').references('claypot_id').inTable('claypot');
      table.foreign('tree_id').references('tree_id').inTable('tree');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.table('comments', function(table) {
      table.dropForeign('user_id');
      table.dropForeign('claypot_id');
      table.dropForeign('tree_id');
    })
    .dropTable('comment');
  };
  