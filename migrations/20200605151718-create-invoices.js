'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoice_number: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.NUMERIC
      },
      currency: {
        type: Sequelize.TEXT
      },
      invoice_data: {
        type: Sequelize.DATE
      },
      due_date: {
        type: Sequelize.DATE
      },
      vendor_name: {
        type: Sequelize.STRING
      },
      remittance_address: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('invoices');
  }
};