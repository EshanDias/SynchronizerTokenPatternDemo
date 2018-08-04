'use strict';

let methods = {};

methods.validateLogin = (data) => {
    if (data.username == "Admin" && data.password == "1234") {
        return true;
    }
    else {
        return false;
    }
}

module.exports = methods;