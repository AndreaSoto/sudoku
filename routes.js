const Api = require('./lib/api.js');

let api = new Api;

class Routes {

    getBoard(req, res, next) {
        
        res.send(api.createBoard());
    }

}
module.exports = Routes;
