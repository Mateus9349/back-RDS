const database = require('../models')

class LoginController {
    static async pegaTodosOsLogins(req, res){
        try{
            const todosOsLogins = await database.logins.findAll()
            return res.status(200).json(todosOsLogins)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmLogin(req,res) {
        const {id} = req.params
        try {
            const umLogin = await database.logins.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umLogin)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaLogin(req, res) {
        const novoLogin = req.body
        try {
            const novoLoginCriado = await database.logins.create(novoLogin)
            return res.status(200).json(novoLoginCriado)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaLogin(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Logins.update(novasInfos, { where: {id: Number(id)} })
            const loginAtualizado = await database.logins.findOne({where: {id: Number(id)}})
            return res.status(200).json(loginAtualizado)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaLogin(req, res){
        const {id} = req.params
        try{
            await database.logins.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = LoginController