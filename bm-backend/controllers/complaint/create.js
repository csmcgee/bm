var upload = require('../../lib/upload');
module.exports = function(router) {
    router.post('/', upload.array('image[]'), function(req, res, files) {
        console.log("hit");
        res.json({'message': 'ok'});
    });
};