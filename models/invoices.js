'use strict';
module.exports = (sequelize, DataTypes) => {
  const invoices = sequelize.define('invoices', {
    invoice_number: DataTypes.INTEGER,
    total: DataTypes.NUMERIC,
    currency: DataTypes.TEXT,
    invoice_data: DataTypes.DATE,
    due_date: DataTypes.DATE,
    vendor_name: DataTypes.STRING,
    remittance_address: DataTypes.STRING
  }, {});
  invoices.associate = function(models) {
    // associations can be defined here
  };
  return invoices;
};