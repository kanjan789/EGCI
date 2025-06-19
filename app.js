const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({message: 'hello world hello again!' })
})

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})