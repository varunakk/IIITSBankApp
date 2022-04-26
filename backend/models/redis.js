/*const Redis = require('ioredis');
const redis = new Redis({ host: 'redis',port: 6379});
module.exports = redis*/
/*const redis = require('redis');

const client = redis.createClient({host:'redisdb',port:6379});
client.on('error', (err) => console.log('Redis Client Error', err))
client.connect()
module.exports = client;
*/
//import { createClient } from 'redis';
const redis = require('redis');
const getConnection = async () => {

const client = redis.createClient({ socket: { port: 6379, host: 'redisdb' } })     

client.on('error', (err) => console.log('Redis Client Error', err))

await client.connect()
return client

// await client.set('key', 'value')
// const value = await client.get('key')
// console.log(value)
}

module.exports = {
getConnection,
}

/*             //({ url: 'redis://redis:6379' });
client.connect()
module.exports = client;
*/