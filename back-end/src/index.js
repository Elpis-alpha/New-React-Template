const express = require('express')

const chalk = require('chalk')

const cors = require('cors')

const mongoose = require('./db/mongoose')

const userRouter = require('./routers/user')

const itemRouter = require('./routers/item')

const dummyRouter = require('./routers/dummy')

const port = process.env.PORT


// Acquire an instance of Express
const app = express()


// Automatically parse incoming reqests
app.use(express.json())


// Automatically allow incomming incoming cors
app.use(cors())


// Automatically allows user routers
app.use(userRouter)


// Automatically allows task routers
app.use(itemRouter)


// Automatically allows dummy routers
app.use(dummyRouter)


// Listening Server
app.listen(port, () => {

  console.log(chalk.yellow('\n\nInitializing Server'));

  console.log(`Server starting on port ${port}`);

})