/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('clay_pot', function(table) {
      table.increments('claypot_id').primary();
      table.decimal('claypot_price', 10, 2).notNullable();
      table.decimal('claypot_width', 8, 2).notNullable();
      table.decimal('claypot_height', 8, 2).notNullable();
      table.text('claypot_description');
      table.integer('claypot_waterlevel');
    })
    .createTable('clay_pot_images', function(table) {
      table.increments('image_id').primary();
      table.integer('claypot_id').unsigned().notNullable();
      table.string('image_url', 255).notNullable();
      table.foreign('claypot_id').references('claypot_id').inTable('clay_pot');
    })
    .createTable('clay_pot_colors', function(table) {
      table.increments('color_id').primary();
      table.integer('claypot_id').unsigned().notNullable();
      table.string('color', 50).notNullable();
      table.foreign('claypot_id').references('claypot_id').inTable('clay_pot');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema
      .dropTable('clay_pot_colors')
      .dropTable('clay_pot_images')
      .dropTable('clay_pot');
  };
  