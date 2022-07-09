const http =  require('http');
const PORT = 8000;
const app = require('./app');
const server = http.createServer(app);


server.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});