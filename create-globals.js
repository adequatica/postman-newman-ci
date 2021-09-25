// Node.js module for interacting with the file system https://nodejs.org/api/fs.html
const fs = require('fs');

let date = new Date();
let dateIso = date.toISOString();

// The structure of postman_globals.json file
let postmanGlobals = {
    "id": "146e52f0-fd32-4814-8e58-8a3c0f4d5eb7",
    "values": [
        {
            "key": "token",
            "enabled": true
        }
    ],
    "name": "My Workspace Globals",
    "_postman_variable_scope": "globals",
    "_postman_exported_at": dateIso,
    "_postman_exported_using": "Postman/9.0.3"
}

// Access to environment variable and add it to object postmanGlobals
postmanGlobals.values[0].value = process.env.TOKEN;

// Create globals.json file containing object postmanGlobals as a string
fs.writeFile("globals.json", JSON.stringify(postmanGlobals), (err) => {
    if (err) throw err;
});