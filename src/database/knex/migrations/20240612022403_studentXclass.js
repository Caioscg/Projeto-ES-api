exports.up = knex => knex.schema.createTable("studentxclass", table => {
    table.increments("id")
    table.integer("student_id").references("id").inTable("student").onDelete("CASCADE")
    table.integer("class_id").references("id").inTable("class").onDelete("CASCADE")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("studentxclass")