
exports.up = function(knex) {
    return knex.schema.createTable('containers', function (table) {
        table.string('id').primary();
        table.string('typeCode').notNullable();
        table.string('origin').notNullable();
        table.string('approve_reference').notNullable();
        table.date('date_manufactored').notNullable();
        table.string('identification').notNullable();
        table.float('gross_max', 3).notNullable();
        table.float('stacking_max', 3).notNullable();
        table.float('racking_test', 3).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('containers');
};
