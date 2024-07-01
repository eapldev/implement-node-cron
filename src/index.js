const app = require('./app');
const ManagerCron = require('./manager-crom')

app.listen(3000, () => {
  console.log('Server is running')
  ManagerCron.run()
});