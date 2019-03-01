1.  Explain the differences between `client-side routing` and `server-side routing`.

   Client-Side routing is when we handle our routing internally by the JavaScript . This allows us to load all content in the beginning and then dinamically change the route to different content fast - When a user clicks on a link, the URL changes but the request to the server is prevented.  The hole page won't referesh when using client- side routing only some elements inside the application

   Server-Side routing will retrive the information from the server every time the route is initiate . it will only request the data that we need. A server-side request causes the whole page to referesh because a new get request is sent to the server 

1.  What does HTTP stand for?

 Hiper Text Transfer Protocol - defines  how messages are formatted and transmitted and what actions web server and browser shoud take in different situation 


1.  What does CRUD stand for?
   Create Read Update Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

   Post : create a new resource
   Get : retrevie a resource
   Put: update a existing resource
   Delete: delete a resource

1.  Mention three tools we can use to make AJAX requests

   1.  Axios Library
   2. The Native Fetch API
   3. JQuerry , XMLHttpRequest