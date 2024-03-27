#!/usr/node
const request = require('request');

movieId = process.argv[2]

idReq = {
    'method': 'GET',
    'url': 'https://swapi-api.alx-tools.com/api/films/'+movieId  
}

request.get(idReq,(err,res)=>{
    if (err) console.log(err)

    jsonRes = JSON.parse(res.body)
        console.log(jsonRes['title']);
});
