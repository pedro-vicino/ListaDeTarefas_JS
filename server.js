const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const Tarefas = require('./models/Tarefas')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main', runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('tarefa')
})
app.post('/dados', (req, res) => {
    Tarefas.create({
        nome: req.body.txtNome,
        descricao: req.body.txtDescricao,
        data_limite: req.body.txtData,
    }).then(() => {
        res.redirect('/lista')
    }).catch((err) => {
        res.send("Houve um erro: " + err)
    })
})
app.get('/lista', (req, res) => {
    Tarefas.findAll().then(function (tarefas) {
        res.render('lista', { tarefas: tarefas })
    })
})
app.get('/deletar/:id', (req, res) => {
    Tarefas.destroy({ where: { 'id': req.params.id } }).then(() => {
        res.redirect('/lista')
    })
})
app.get('/editar/:id', (req, res) => {
    Tarefas.findByPk(req.params.id).then(tarefa => {
        if (tarefa) {
            res.render('editar', { tarefa: tarefa });
        } else {
            res.send('Tarefa não encontrada');
        }
    }).catch(err => {
        res.send("Houve um erro: " + err);
    });
});

app.post('/atualizar/:id', (req, res) => {
    Tarefas.update({
        nome: req.body.txtNome,
        descricao: req.body.txtDescricao,
        data_limite: req.body.txtData,
    }, {
        where: { id: req.params.id }
    }).then(() => {
        res.redirect('/lista');
    }).catch((err) => {
        res.send("Houve um erro: " + err);
    });
});


app.listen(port, console.log("Rodando"))