import { Client } from 'pg'

async function getConection(){
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'admin',
        password: 'admin12345',
        database: 'myRestaurant'
    })
    await client.connect()
    return client
    //  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    //  console.log(res.rows[0].message) // Hello world!
    // await client.end()
}

export default getConection