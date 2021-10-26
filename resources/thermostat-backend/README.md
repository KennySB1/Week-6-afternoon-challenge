# Thermostat server

This project is intended as a small exemplar to be used for the JavaScript Thermostat web server.

Run the server:
```
$ npm install
$ node web.js

Thermostat server listening on http://localhost:3000
```

Usage over HTTP:

```
$ curl -XGET http://localhost:3000/temperature 
{"temperature":20}

$ curl -XPOST http://localhost:3000/up 
$ curl -XPOST http://localhost:3000/up 
$ curl -XGET http://localhost:3000/temperature 
{"temperature":22}

$ curl -XDELETE http://localhost:3000/temperature
$ curl -XGET http://localhost:3000/temperature 
{"temperature":20}
```


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=resources/thermostat-backend/README.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=resources/thermostat-backend/README.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=resources/thermostat-backend/README.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=resources/thermostat-backend/README.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=resources/thermostat-backend/README.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->