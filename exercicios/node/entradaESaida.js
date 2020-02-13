const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo) // informa se o usuário utilizou a flag anonimo

if (anonimo) {

    process.stdout.write('Fala Anônimo!\n')
    process.exit()

} else {

    process.stdout.write('Informe seu nome: ')

    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        // process.stdout.write(`Fala ${nome}!!`)
        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    })
}