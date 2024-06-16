exports.up = knex => knex.schema.createTable("semester", table => {
    table.increments("id")
    table.date("name")
    table.date("begin_date")
    table.date("end_date")
    table.text("notes").nullable()
    table.bool("status")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("semester")