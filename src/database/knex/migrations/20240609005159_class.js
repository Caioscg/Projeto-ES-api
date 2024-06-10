exports.up = knex => knex.schema.createTable("class", table => {
    table.increments("id")
    table.text("time")
    table.text("classroom")
    table.text("plan").nullable()
    table.bool("plan_status").nullable()
    table.integer("teacher_id").references("id").inTable("teacher")
    table.integer("discipline_id").references("id").inTable("discipline")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("class")