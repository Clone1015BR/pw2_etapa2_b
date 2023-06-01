const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('thoughts','root','123456',{
    host:'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.info('Conectamos no serviço de dados!')
}catch(error){
    console.error('Não foi possivel conectar ao serviço de dados: ', error)
}

module.exports = sequelize