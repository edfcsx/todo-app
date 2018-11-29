//O cors será responsavel por fazer com que a aplicação possa receber solicitações de origens diferentes e não apenas local

module.exports = function(req,res,next){

    //As origens que serão permitidos os acessos no caso * = todas
    res.header('Access-Control-Allow-Origin','*')

    //Os metodos que iremos permitir os acessos
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE')

    //Mais um cabeçalho necessario
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Accept')

    //agora iremos fazer um next para continuar o fluxo da aplicação
    next()
}