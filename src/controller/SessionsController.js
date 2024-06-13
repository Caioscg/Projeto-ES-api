const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const { compare } = require("bcryptjs")
const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")

class SessionsController {
    async create(req, res) {
        const { login, password } = req.body

        let passwordMatched

        const student = await knex("student").where({ login }).first()
        const vicedirector = await knex("vicedirector").where({ login }).first()
        const teacher = await knex("teacher").where({ login }).first()

        if(!student && !vicedirector && !teacher) {
            throw new AppError("Login e/ou senha incorreta", 401)
        }

        if (student) {
            passwordMatched = await compare(password, student.password)
        } 
        else if (vicedirector) {
            passwordMatched = await compare(password, vicedirector.password)
        } else {
            passwordMatched = await compare(password, teacher.password)
        }

        if (!passwordMatched) {
            throw new AppError("Login e/ou senha incorreta", 401)
        }

        const { secret, expiresIn } = authConfig.jwt
        
        if (student) {
            const token = sign({}, secret, {  // objeto vazio são configurações adicionais
                subject: String(student.id),   // id do usuário usado pra criar o token
                expiresIn
            })
            return res.json({ user: student, token })
        }
        if (vicedirector) {
            const token = sign({}, secret, {
                subject: String(vicedirector.id),
                expiresIn
            })
            return res.json({ user: vicedirector, token })
        }
        const token = sign({}, secret, {
            subject: String(teacher.id),
            expiresIn
        })
        return res.json({ user: teacher, token })

    }
}

module.exports = SessionsController