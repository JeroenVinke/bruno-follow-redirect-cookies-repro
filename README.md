# Start
1. npm i
2. node ./server.js
3. npm start

# Repro
- When running the collection from bruno-electron -> failure
- When running the folder from bruno-cli -> failure
- When running both requests manually -> success

# Problem
When followredirects is false, and the server returns 302 with set-cookie headers, the cookies are not stored by bruno-cli and the collection runner.