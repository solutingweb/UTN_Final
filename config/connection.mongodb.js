const conectionMongoos = require('mongoose')

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ei7lyjo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`


conectionMongoos.connect(URI)
.then(
    () => console.log('Base de datos conectada'), {   
})
.catch(
    (error) => {
        console.log('Error al conectar MongoDB: ', error)
    } 
)

module.exports = {conectionMongoos} 