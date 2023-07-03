const database = require('../models')

class GastosProdutivosController {
    static async pegaTodosOsGastosProdutivos(req, res){
        try{
            const todosOsGastosProdutivos = await database.Gastos_produtivos.findAll()
            return res.status(200).json(todosOsGastosProdutivos)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmGastosProdutivos(req,res) {
        const {id} = req.params
        try {
            const umGastosProdutivos = await database.Gastos_produtivos.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umGastosProdutivos)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaGastosProdutivos(req, res) {
        const novoGastosProdutivos = req.body
        try {
            const novoGastosProdutivosCriado = await database.Gastos_produtivos.create(novoGastosProdutivos)
            return res.status(200).json(novoGastosProdutivosCriado)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaGastosProdutivos(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.GastosProdutivos.update(novasInfos, { where: {id: Number(id)} })
            const GastosProdutivoAtualizado = await database.Gastos_produtivos.findOne({where: {id: Number(id)}})
            return res.status(200).json(GastosProdutivoAtualizado)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaGastosProdutivos(req, res){
        const {id} = req.params
        try{
            await database.Gastos_produtivos.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = GastosProdutivosController