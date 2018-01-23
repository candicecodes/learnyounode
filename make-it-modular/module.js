const fs = require('fs');
const path = require('path');



module.exports = (argv, extension, callback) => {
    fs.readdir(argv, function(err, list) {
        if(err) {
            return callback(err);
        } else {
            list.filter(file => {
                if (path.extname(file) === `.${extension}`) {
                    callback(null, file);
                }
            });
        }
    });
}
