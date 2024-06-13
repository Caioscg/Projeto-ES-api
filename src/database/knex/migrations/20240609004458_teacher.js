exports.up = knex => knex.schema.createTable("teacher", table => {
    table.increments("id")
    table.text("name")
    table.text("login")
    table.text("password")
    table.integer("status")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("teacher")