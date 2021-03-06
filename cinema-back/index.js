const express = require('express');
const cors = require('cors');

const { port } = require('./config');
const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/authRouter')

const PORT = port || 5000;

const app = express();
app.use(express.json());
app.use(cors())

app.use('/user', userRouter)
app.use('/auth', authRouter)
const start = () => {
  try{
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
  }catch (e){
    console.log(e)
  }
}

start()
