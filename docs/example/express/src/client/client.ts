const Confiug:any = {};

/** Get accessible functions from server or config */
const serverFunctions = {};

/** Create client */
const serverConnection:any = {};

const guest:any = {}

// Call functions
guest.helloWorld().then((data:any)=>{
    console.log(data);
});
