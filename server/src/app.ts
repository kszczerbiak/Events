import Express from 'express';
import Config from 'config';
import log from './logger'
import connect from './db/connect';
import routes from './routes';
import cors from 'cors'


const port = Config.get('port') as number;
const host = Config.get('host') as string;

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({extended: false}));
app.use(cors());

let server =  app.listen(port, host, () => {
    log.info(`Server listing at http://${host}:${port}`)
    connect();
    routes(app)
})

module.exports =  server;
