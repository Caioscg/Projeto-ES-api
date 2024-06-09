exports.up = knex => knex.schema.createTable("class", table => {
    table.increments("id")
    table.text("time")
    table.text("class_number")
    table.text("plan")
    table.bool("plan_status")
    table.integer("teacher_id").references("id").inTable("teacher").onDelete("CASCADE")
    table.integer("discipline_id").references("id").inTable("discipline").onDelete("CASCADE")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("class")