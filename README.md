SungardAS
=========
```
POC FE client retrieve JSON data from servers (RoR and NodeJS)
Both have the same funtionality, invoke the same SOAP endpoint
```
Contains 4 projects 
-------------------
```
1. AngularClient - retrieves JSON data from the RoR and NodeJS servers via $HTTP.get
2. SoapServerRails - RoR rack server - accepts zipcode request, invokes the SOAP server, parses the SOAP to JSON and sends a JSON response
3. SoapServerNode - NodeJS server - does same task as the Rails server
4. ReactJS project will replace the AngularJS 
```

Ports
-----
```
AngularClient - runs on port 9000
SoapServerRails - rack server port 9292
SoapServerNode - port 3000
```

Install and Run
---------------
SoapServerRails - logs to  log/development.log
```
1. bundle install (no DB or views)
2. rackup - starts up on port 9292
```

SoapServerNode
```
1. npm install (package.json)
2. npm start - starts up on port 3000
```

AngularClient - top navbar allows user to alternate from Rails to NodeJS
```
1. npm install (package.json)
2. bower install (bower.json)
3. grunt serve - starts a nodeJS server on port 9000
```





