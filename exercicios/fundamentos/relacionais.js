console.log('01)', '1' == 1) // compara apenas valores
console.log('02)', '1' === 1) // compara valores e tipos
console.log('03)', '3' != 3) // compara apenas valores
console.log('04)', '3' !== 3) // compara valores e tipos

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // compara referência de memória
console.log('10)', d1 == d2) // compara referência de memória
console.log('11)', d1.getTime() == d2.getTime()) // compara valores
console.log('11)', d1.getTime() === d2.getTime()) // compara valores e tipos

console.log('12)', undefined == null) // compara apenas valores
console.log('12)', undefined === null) // compara valores e tipos