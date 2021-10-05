# Events
Small program to add user specified events to database


#How to install
1. To run this app you need npm and MongoDB.
2. Download and install Node Package Manager (https://nodejs.org/en/download/)
3. Download and install MongoDB server (https://www.mongodb.com/try/download/community) (alternatively create free acount on https://www.mongodb.com/  to have free online access to cluster and database)
4. Clone git repo,
5. Open console. In console navigate to main project folder (containing client and server folders) and type "npm run install". W8 to finish dependencies installation.
6. Launch MongoDB server (open console, go to MongoDB-Installation_dir/bin and launch mongo.exe). In console should be database connection address with port (by default mongodb://127.0.0.1:27017). If you have differenent address copy it.
7. (when launching with online Mongo cluster) - go to mongo provider and find connection link (starting with mongodb://......). Copy connection uri.
8. Open file default.ts (which is in server/config directory) and paste copied uri instead of default (ofc when you have different connection uri than default).

#How to run
1. Open 2 instances of console and go to the main folder (one containing client and server folders).
2. In one console type  "npm run server". If everything is ok you should see in console 2 messages: "INFO: Server listing at http://localhost:8080"  and INFO: Database connected
3. In another one type "npm run client". After a few seconds app should open in new tab in your default browser.

#How to run tests
1. Open console and go to main folder.
2. If u want to perform backend tests type "npm run server_test"/
3. If u want to perform frontend tests type "npm run client_test"/

