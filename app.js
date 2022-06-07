const { response } = require('express');
var express = require('express');
var {engine} = require('express-handlebars')
var bp = require('body-parser')

var app = express();
var geladinhos = [];

//configurções para identificar framework que fará rendeirizações
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(bp.urlencoded({extended: false}))
app.use(bp.json());

//caminho das pastas do projeto front (nome da pasta public)
app.use(express.static('public'));

app.get('/', function (request, response){
    response.render('index');
})

app.get('/cadastro', function(request, response){
    response.render('cadastro');
})
app.post('/cadastro', function(request, response){
    sabor = request.body.sabor;
    peso = request.body.peso;
    preco = request.body.preco;
    console.log("Sabor: " + sabor);
    console.log("Peso: " + peso);
    console.log("Preco: " + preco);
    geladinho = {
        "sabor": sabor,
        "peso": peso,
        "preco": preco 
    };
    geladinhos.push(geladinho);
    response.render('index', {geladinhos});
})
app.listen(3000);