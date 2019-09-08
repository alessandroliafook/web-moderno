{
    {
        {
            {
                // escopo global
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

// escopo da função
function teste() {
    var local = 123
    console.log(local)
}

teste()
    // console.log(local) // variável em escopo de função não é visível fora da função