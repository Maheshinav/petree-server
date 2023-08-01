/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('selected_subscription', function(table) {
      table.increments('selected_subscription_id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.integer('subscription_id').unsigned().notNullable();
      table.timestamp('selected_subscription_start_date').notNullable(); // Set subscription_start_date to current timestamp with microseconds
      table.date('selected_subscription_end_date').notNullable(); // Set subscription_end_date to 30 days after the current date
  
      // Add foreign key constraint for user_id with ON DELETE CASCADE
      table.foreign('user_id').references('user_id').inTable('user').onDelete('CASCADE');
      table.foreign('subscription_id').references('subscription_id').inTable('subscription');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('selected_subscription');
  };
  