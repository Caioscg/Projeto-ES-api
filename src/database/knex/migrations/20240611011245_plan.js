exports.up = knex => knex.schema.createTable("plan", table => {
    table.increments("id")
    table.text("description").nullable()
    table.text("plan_changes").nullable()
    table.bool("plan_status", false)
    table.integer("class_id").references("id").inTable("class")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("plan")