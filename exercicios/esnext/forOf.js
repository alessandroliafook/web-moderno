for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado : true}],
    ['Set', {abordado : true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

// percorrer apenas as chaves do mapa
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

// percorrer apenas os valores do mapa
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

// percorrendo as entradas usando o destructuring
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])

for (let letra of s) {
    console.log(letra)
}