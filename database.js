const {Pool} = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'pass',
    database: 'library'
};

const pool = new Pool(config);

const getBoooks = async () => {
    try {
        const books = await pool.query('select * from books');
        console.log(books.rows);
        pool.end();
    } catch(e){
        console.log(e);
    }
}

const insertBook = async () => {
    try {
        const text = 'INSERT INTO users(username, password) VALUES($1, $2)';
        const values = ['manuel', 'man123'];
        const res = await pool.query(text, values);
        console.log(res);
        pool.end();
    } catch (e){
        console.log(e);
    }
}

const deleteUser = async () => {
    try {
        const text = 'DELETE FROM users WHERE username = $1';
        const values = ['manuel']
        const res = await pool.query(text, values);
        console.log(res);
        pool.end();
    } catch (e){
        console.log(e);
    }
}

const editUser = async () => {
    try {
        const text = 'UPDATE users SET username = $1 WHERE username = $2';
        const values = ['Jhon', 'Juan'];
        const res = await pool.query(text, values);
        console.log(res);
        pool.end();
    } catch (e){
        console.log(e);
    }
}

editUser();