const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const Connect = require('./connectDB/connect')
const accRouter = require('./routes/accountRoutes')
const userRouter = require('./routes/userRoutes')
app.get('/', (req,res) => {
    res.send('Homepage')
})

app.use(express.json())
app.use('/account', accRouter)
app.use('/user', userRouter)
const startServer = async() => {
    if(Connect()){
        app.listen(port, () => {console.log(`app is listening to port ${port}`)})
    }
}

startServer()