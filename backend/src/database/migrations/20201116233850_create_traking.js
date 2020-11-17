
exports.up = function(knex) {
    return knex.schema.createTable('traking', function (table) {
        table.increments().primary();
        table.string('latitude').notNullable();
        table.string('longitude').notNullable();
        table.dateTime('date_payload').notNullable();

        table.string('container_id').notNullable();

        table.foreign('container_id').references('id').inTable('containers')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('traking');
};