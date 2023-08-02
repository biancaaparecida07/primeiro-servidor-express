const express = require('express'); //Importação - Instanciando um "objeto" do tipo express importado.


const app = express(); //Colocando a instância dentro da constante app.

// Acesso via browser http:/localhost:3000/home
app.get('/home', (requisicao, resposta) => {
    //Requisição é tudo que vem do pedido

    //Todo o envio de volta é feito pela Resposta
    resposta.send('Olá.. este é o meu primeiro servidor com o express.')
}); //Criação de uma rota.

//O express precisa estar alerta escutando uma porta onde vão chegar as requisições. 
app.listen(3000);