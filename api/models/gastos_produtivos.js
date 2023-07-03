'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gastos_produtivos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gastos_produtivos.init({
    processo_id: DataTypes.INTEGER,
    energia: DataTypes.FLOAT,
    mao_de_obra: DataTypes.FLOAT,
    valor_materia_prima: DataTypes.FLOAT,
    depreciacao: DataTypes.FLOAT,
    insumos: DataTypes.FLOAT,
    processo: DataTypes.STRING,
    horas_duracao: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Gastos_produtivos',
  });
  return Gastos_produtivos;
};