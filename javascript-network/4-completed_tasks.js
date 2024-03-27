#!/usr/bin/node
const request = require('request')
const fs = require('fs')

let URL = process.argv[2]
options = {
    'method': 'GET',
    'url': URL
}

let taskCompleted = {}

request(options, (err,res) => {
    if (err) console.log(err)
    records = JSON.parse(res.body)
    for(let i=0; i<record.length; i++){
        if(record[i]['completed'] ){
            if(record[i]['userId'] in taskCompleted){
                taskCompleted[record[i]['userId']] += 1
            }else {
                taskCompleted[record[i]['userId']] = 1
            }
        }
    }
    console.log(taskCompleted)
})
