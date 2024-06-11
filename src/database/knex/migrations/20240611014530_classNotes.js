exports.up = knex => knex.schema.createTable("notes", table => {
    table.increments("id")
    table.text("description")
    table.bool("view").nullable()
    table.integer("class_id").references("id").inTable("class").onDelete("CASCADE")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("notes")