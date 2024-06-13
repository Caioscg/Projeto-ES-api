//TODO arq criado com 'npx knex migrate:make student'
exports.up = knex => knex.schema.createTable("student", table => {
    table.increments("id")
    table.text("name")     
    table.text("login")
    table.text("password")
    table.integer("status")
    table.integer("course_id").references("id").inTable("course").onDelete("CASCADE")
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("student")

//TODO após criar o atalho no package.json é só rodar npm run migrate pra criar a tabela