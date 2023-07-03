'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gastos_produtivos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      processo_id: {
        type: Sequelize.INTEGER
      },
      energia: {
        type: Sequelize.FLOAT
      },
      mao_de_obra: {
        type: Sequelize.FLOAT
      },
      valor_materia_prima: {
        type: Sequelize.FLOAT
      },
      depreciacao: {
        type: Sequelize.FLOAT
      },
      insumos: {
        type: Sequelize.FLOAT
      },
      processo: {
        type: Sequelize.STRING
      },
      horas_duracao: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Gastos_produtivos');
  }
};