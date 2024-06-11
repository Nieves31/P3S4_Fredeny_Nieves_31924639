const express = require('express')
const app = express()
const path = require('path')

app.use(require('./router'))
app.set('port',8080)
app.engine('html', require('ejs').renderFile)
app.set('views', path.join(__dirname,'/'))
app.set('views engine', 'ejs')
app.use(express.static('./'))

app.listen(app.get('port'), (req, res) =>{
    console.log('servidor corriendo en el puerto ', app.get('port'))
})