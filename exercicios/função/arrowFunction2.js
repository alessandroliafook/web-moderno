function Pessoa() {

    this.idade = 0
        // no caso da arrow function o contexto utilizado é o léxico e não o da execução
    setInterval(() => {
        this.idade++
            console.log(this.idade)
    }, 1000)
}

new Pessoa