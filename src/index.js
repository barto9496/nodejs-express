import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World I\'m Amogh!')
})

app.get('/user/:userId/books/:bookId', (req, res) => {
    // res.send(200)
    res.send(`we've added the ${req.params.bookId} to the user ${req.params.userId}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})