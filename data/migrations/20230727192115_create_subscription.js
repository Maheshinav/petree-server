/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('subscription', function(table) {
      table.increments('subscription_id').primary();
      table.string('subscription_name', 100).notNullable();
      table.text('subscription_details');
      table.decimal('subscription_price', 10, 2).notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('subscription');
  };
  