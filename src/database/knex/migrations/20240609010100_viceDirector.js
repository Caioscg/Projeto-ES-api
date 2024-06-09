exports.up = knex => knex.schema.createTable("vicedirector", table => {
    table.increments("id")
    table.text("name")
    table.text("login")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("vicedirector")