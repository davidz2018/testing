var test = require('./testing');
test.assert_false(false,"false is false duh")
test.assert(6, add(2,4),"2 + 4 === 6");

function add(a,b) {
    return a+b
}

