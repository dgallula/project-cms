import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Aa123456!',
    database: 'cms'
})

connection.query(
    'Select * from customers',
    (error,results)=> {
       if (error){
           console.log(error)
       } else {
           console.log(results)
       }
    }
)

export default connection;