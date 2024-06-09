exports.up = knex => knex.schema.createTable("course", table => {
    table.increments("id")
    table.text("name")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("course")