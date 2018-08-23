const Api = require('./lib/api.js');

let api = new Api;

class Routes {

    getBoard(req, res, next) {
        api.getBoard();
        res.send('here!');
    }

}

module.exports = Routes;
