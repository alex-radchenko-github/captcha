const _ = require('lodash');

let pict = [1,1,1,2,2,2,3,3,3]

function pictures() {
    return _.shuffle(pict)

}



module.exports = pictures