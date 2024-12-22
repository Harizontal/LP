exports.up = function (knex) {
    return knex.schema.hasTable('languages').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('languages', function (table) {
          table.increments('id_languages').primary(); // PRIMARY KEY, auto-increment
          table.string('name', 100).notNullable(); // VARCHAR(100) NOT NULL
          table.text('description'); // TEXT
          table.string('photo_url', 255).nullable(); // VARCHAR(255), DEFAULT NULL
        });
      }
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('languages');
  };
  