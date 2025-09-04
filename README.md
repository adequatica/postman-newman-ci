# Run Newman (Postman CLI) in CI

The idea of the repository is outlined in the article «[Run Newman (Postman CLI) in TeamCity with Secrets](https://adequatica.github.io/2021/09/25/run-newman-in-teamcity-with-secrets.html)»

For local testing:
1. Add token to shell environment: `export TOKEN={your_secret_token}`
2. Run `npm init`
3. Run `node create-globals.js` and you will get *globals.json* file
4. Run `node run-newman.js` and you will test cases from *my.postman_collection.json* file
