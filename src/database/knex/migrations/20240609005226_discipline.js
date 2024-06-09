exports.up = knex => knex.schema.createTable("discipline", table => {
    table.increments("id")
    table.text("name")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("discipline")