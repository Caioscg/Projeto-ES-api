exports.up = knex => knex.schema.createTable("teacher", table => {
    table.increments("id")
    table.text("name")     
    table.text("nde")
    table.integer("course_id").references("id").inTable("course").onDelete("CASCADE").nullable()
    table.integer("class_id").references("id").inTable("class").onDelete("CASCADE").nullable()
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("teacher")