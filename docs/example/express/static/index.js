var Confiug = {};
/** Get accessible functions from server or config */
var serverFunctions = {};
/** Create client */
var serverConnection = {};
var guest = {};
// Call functions
guest.helloWorld().then(function (data) {
    console.log(data);
});
