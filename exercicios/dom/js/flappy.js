function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {

    this.elemento = novoElemento('div', 'barreira')
    
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// Teste de criação da barreira
// const b = new Barreira(true)
// b.setAltura(200)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {

    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior

        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

// Teste do par de barreiras
// const p = new ParDeBarreiras(700, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(p.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3

    this.animar = () => {
        this.pares.forEach((par, i) => {

            const posicaoAtual = par.getX()
            const posicaoNova = posicaoAtual - deslocamento
            par.setX(posicaoNova)

            // quando o elemento sair da tela
            updateX = x => {
                console.log(par.elemento)
                console.log(this.pares[x].elemento)
                
            }

            if(par.getX() < -par.getLargura()) {
                i == 0 ?  par.setX(this.pares[3].getX() + espaco) : par.setX(this.pares[i - 1].getX() + espaco)
                par.sortearAbertura()
            }


            //computar ponto

            const meio = largura / 2

            // para compreenção mais fácil do cálculo
            // if(posicaoAtual >= meio &&
            //     posicaoNova < meio)
            //     notificarPonto()

            const cruzouOMeio = par.getX() + deslocamento >= meio &&
                par.getX() < meio
            // ele executa a parte após o && apenas se a parte anterior for verdadeira
            cruzouOMeio && notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        
        const yAtual = this.getY()
        const yNovo = yAtual + (voando ? 8 : -5)
        
        const alturaMaxima = alturaJogo - this.elemento.clientHeight
        
        if(yNovo <= 0) this.setY(0)
        else if (yNovo >= alturaMaxima) this.setY(alturaMaxima)
        else this.setY(yNovo)

    }
    this.setY(alturaJogo / 2)
}

function Progresso() {

    this.elemento = novoElemento('span', 'progresso')

    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }

    this.atualizarPontos(0)
}

function estaoSobrepostos(elementoA, elementoB) {

    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top

    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false

    barreiras.pares.forEach(parDeBarreiras => {

        if(!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento

            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })

    return colidiu
}

function FlappyBird() {

    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 250, 400, 
        () => {progresso.atualizarPontos(++pontos)})
    const passaro = new Passaro(altura - 10.5)
    
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
    areaDoJogo.appendChild(progresso.elemento)
    
    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if(colidiu(passaro, barreiras))
                clearInterval(temporizador)
        }, 20)
    }
}

new FlappyBird().start()
