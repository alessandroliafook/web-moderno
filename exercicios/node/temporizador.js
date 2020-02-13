const schedule = require('node-schedule')


// Usando regra do crontab
// O primeiro parametro se refere a distribuição do tempo
/*
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
*/

const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 4', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds(), new Date().getHours())
})

setTimeout(function() {
    // chamando função para realizar o cancelamento da tarefa
    tarefa1.cancel()
    console.log('Cancelando a tarefa 1!')
}, 20000)

// utilizando outra forma de agendar atividade
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 20
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando a tarefa 2!', new Date().getSeconds())
})