const express = require('express')
const app = express ()
app.use(express.static('public'))
app.get('/', function(req, res) {

    res.send('This is my first node app')
})
app.get('/about', function(req , res){
    res.send({
        Name : 'Sample app' ,
        Technology : 'NodeJS'
    })

}
)
app.listen (3000, function(){

    console.log('server is up on port 3000')
})