const express = require('express')
const app = express()
const port = 3000

app.get('/v1', (req, res) => res.json({
    'hello': 'world'
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))