# Run Newman (Postman CLI) in CI

The idea of the repository is outlined in the article «[Run Newman (Postman CLI) in TeamCity with Secrets](https://adequatica.medium.com/run-newman-postman-cli-in-teamcity-with-secrets-d3f06d7199bf)»

For local testing:
1. Add token to shell environment: `export TOKEN={your_secret_token}`
2. Run `npm init`
3. Run `node create-globals.js` and you will get *globals.json* file
4. Run `node run-newman.js` and you will test cases from *my.postman_collection.json* file