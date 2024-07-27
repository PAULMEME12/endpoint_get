const {Sequelize} = require('sequelize');
const sequelize = new Sequelize ('libreria','root','root',{
    host:'localhost',
    dialect:'mysql'
});
module.exports = sequelize;
