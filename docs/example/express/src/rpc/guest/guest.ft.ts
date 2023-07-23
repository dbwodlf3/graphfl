const helloWorld = {
    functionId: "guest_hello_world",
    /** return hello msg */
    func: ()=>{return "Hello World";}
}

export interface GuestFunctions{
    helloWorld: typeof helloWorld;
}
