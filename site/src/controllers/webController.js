const path = require('path');

module.exports = {
    index: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views','web','index.html'))
    },
    quienes: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views','web','quienesSomos.html'))
    }
};