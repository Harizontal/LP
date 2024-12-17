exports.up = function (knex) {
    return knex.schema.hasTable('achievement_criteria').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('achievement_criteria', function (table) {
          table.increments('id').primary();
          table.string('name', 255).notNullable();
          table.text('description');
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
      }
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('achievement_criteria');
  };
  