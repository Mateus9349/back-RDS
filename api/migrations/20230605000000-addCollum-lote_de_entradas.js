'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Lote_de_entradas','valor_pago',{
                allowNull: false,
                type: Sequelize.FLOAT
            }
        );
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Lote_de_entradas', 'valor_pago');
    }
};