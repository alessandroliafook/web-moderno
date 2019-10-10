// javascript não tem sobrecarga exceto para o par get/set
const sequencia = {
    _valor: 1, // convenção para variáveis privadas
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor)
            this._valor = valor
    }
}

// as funções get e set são implícitas ao atributo sem o _
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
