const express = require('express')
const router = express.Router()
const Client = require('../models/Client')


router.get('/clients', function(req, res){
    Client.find({}).exec(function(error, clients){
        res.send(clients)
    })
})

router.post('/client', async function(req, res){
    let newClient = new Client(req.body)
    await newClient.save()
    Client.find({}).exec(function(error, clients){
        res.send(clients)
    })
})

router.post('/save-clients', async function(req, res){
     let data = require('../../src/data')
     console.log(data)

     data.forEach(async c => {
        let newClient = new Client(c)
        await newClient.save()
     })

    // let newClient = new Client(req.body)
    // await newClient.save()
    Client.find({}).exec(function(error, clients){
        res.send(clients)
    })
})



module.exports = router