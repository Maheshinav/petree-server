/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('claypot', function(table) {
        table.increments('claypot_id').primary();
        table.string('claypot_name').notNullable();
        table.decimal('claypot_price', 10, 2).notNullable();
        table.decimal('claypot_width', 8, 2).notNullable();
        table.decimal('claypot_height', 8, 2).notNullable();
        table.decimal('claypot_length', 8, 2).notNullable(); // Add claypot_length field
        table.text('claypot_description');
        table.integer('claypot_waterlevel');
        table.string('claypot_image');
        table.string('claypot_color'); // Add claypot_color field
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clay_pot');
};
