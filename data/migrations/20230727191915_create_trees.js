/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Tree', function(table) {
      table.increments('tree_id').primary();
      table.string('tree_name', 100).notNullable();
      table.string('scientific_name', 100).notNullable();
      table.text('tree_description').notNullable();
      table.string('tree_image', 255).notNullable();
      table.decimal('tree_price', 10, 2).notNullable();
      table.string('fertilizer_name', 100).notNullable();
      table.string('water_requirement', 50).notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('Tree');
  };
  