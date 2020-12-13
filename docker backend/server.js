const { response } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')


const app = express()


app.use(bodyParser.json())



app.get('/emp/', (request, response)=>{
    
    const statement = `select * from Emp`

    db.query(statement,(error,result)=>{
        if(error){
            response.send("error")
        }else{
            response.send({status : 'success', data: result})
        }
    })
})

app.listen(3000,'0.0.0.0', ()=>{
    console.log("Started server on port 3000")
})