exports.up = knex => knex.schema.createTable("class", table => {
    table.increments("id")
    table.text("time")
    table.text("classroom")
    table.text("teacher")
    table.text("discipline")
    table.integer("semester_id").references("id").inTable("semester")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("class")