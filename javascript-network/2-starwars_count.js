#!/usr/bin/node
const req = require('request')

URL = process.argv[2]

options = {
    'method': 'GET',
    'url': URL
}

let count = 0 

req(options, (err, res) => {
    formattedRes = JSON.parse(res.body)
    len = formattedRes["results"].length
    for(let i=0; i<len; i++){
        x = formattedRes.results[i]['characters']
        for (let j=0;j,x.length; j++){
            character = x[j]
            if(character.includes('18')){
                count+=1
            }
        }
    }
    console.log(count)
})

