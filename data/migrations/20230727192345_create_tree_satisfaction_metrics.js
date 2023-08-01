/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tree_satisfaction_metrics', function(table) {
      table.increments('tree_satisfaction_metrics_id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.integer('harvested_fruit'); // number of fruits
      table.decimal('co2_sequestration', 10, 2); // weight amount
      table.float('growth_progress'); // percentage
      // Add foreign key constraint for user_id
      table.foreign('user_id').references('user_id').inTable('user');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('tree_satisfaction_metrics');
  };
  