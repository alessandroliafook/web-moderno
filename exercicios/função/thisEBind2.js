/*
// Reproduzindo o caso do erro de referência do this
// pois a function utiliza o contexto da execução.
// solução implementanda considerando o uso de bind
function Pessoa1() {

    this.idade = 0

    setInterval(function() {
        this.idade++
            console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa1
*/

// Implementando solução ao erro de referência através do uso de uma constante
function Pessoa2() {

    this.idade = 0
    const self = this
    setInterval(function() {
        self.idade++
            console.log(self.idade)
    }, 1000)
}

new Pessoa2