import Config from 'config'
import Mongoose  from 'mongoose'
import log from '../logger';

export default function connect ()  {
    const dbUri = Config.get('dbUri') as string;

    return Mongoose.connect(dbUri).then(() => {
        log.info('Database connected')
    }
    ).catch((error ) => {
        log.error("database error", error);
        process.exit(1);
    })
}