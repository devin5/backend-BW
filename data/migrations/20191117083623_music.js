exports.up = function(knex) {
  return knex.schema.createTable("songs", tbl => {
    tbl.increments();
    tbl.string("song", 100).notNullable();
    tbl.string("artist").notNullable();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("songs");
};
