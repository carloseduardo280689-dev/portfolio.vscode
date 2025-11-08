const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "cadastro",
    "root",
    "123456",
    {
        host: "localhost",
        dialect: "mysql",
    }
);

sequelize.authenticate().then((function(){
    console.log("Banco de dados conectado com sucesso!");
})).catch(function(erro){
    console.log("Erro ao conectar com banco de dados:");
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}