// https://www.npmjs.com/package/newman#using-newman-as-a-library
const newman = require('newman');

newman.run({
    collection: require('./my.postman_collection.json'),
    globals: require('./globals.json'),
    reporters: 'cli'
}, (err) => {
    if (err) throw err;
});