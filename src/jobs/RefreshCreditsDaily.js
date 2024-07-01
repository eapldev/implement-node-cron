const cron = require('node-cron')

function RefreshCreditsDaily() {
  console.log("Enviar o email diariamente")
}

module.exports = cron.schedule('0 0 * * *', RefreshCreditsDaily, {
  scheduled: false
})