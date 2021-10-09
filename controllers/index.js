const fs = require('fs')

module.exports = app => {
    fs.readdirSync( __dirname).forEach(fileName => {
        if(fileName != "index.js")
            require(__dirname + '/' + fileName)(app)
    })
}