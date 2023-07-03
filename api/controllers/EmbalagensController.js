const database = require('../models')

class embalagemController {
    static async pegaTodasAsEmbalagens(req, res){
        try{
            const todasAsEmbalagens = await database.Embalagens.findAll()
            return res.status(200).json(todasAsEmbalagens)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaEmbalagem(req,res) {
        const {id} = req.params
        try {
            const umaEmbalagem = await database.Embalagens.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaEmbalagem)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaEmbalagem(req, res) {
        const novaEmbalagem = req.body
        try {
            const novaEmbalagemCriada = await database.Embalagens.create(novaEmbalagem)
            return res.status(200).json(novaEmbalagemCriada)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaEmbalagem(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Embalagens.update(novasInfos, { where: {id: Number(id)} })
            const embalagemAtualizada = await database.Embalagens.findOne({where: {id: Number(id)}})
            return res.status(200).json(embalagemAtualizada)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaEmbalagem(req, res){
        const {id} = req.params
        try{
            await database.Embalagens.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = embalagemController