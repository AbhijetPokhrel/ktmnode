
exports.index = controller;


function controller(global) {
    //Now write you codehere
    var mdl = require("../model/mdl_home").model();

    global["index"] = function (writer) {

        mdl.getVersion(function (err, response) {
            if (err) {
                writer.write(("Uh oh! Couldn't get results: " + err.msg));
            } else {
                writer.write(JSON.stringify(response));
            }
        });

    }
    
    return global;
}

