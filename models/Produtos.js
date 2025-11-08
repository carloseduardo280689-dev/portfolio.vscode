const db = require("./db");

const Produto = db.sequelize.define("produtos",{
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: db.Sequelize.DOUBLE,
        allowNull: false
    },
    descricao: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
})

Produto.create({
    nome: "Monitor Gamer Samsung",
    preco: 1150.00,
    descricao: "24' Full hd, 1ms, 64hz  HDMI"
});


Produto.sync({force: false});