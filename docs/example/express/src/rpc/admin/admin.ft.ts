/** return user information */
function userGetInfo(jwt: string){
    return {
        username: "chomama",
        email: "moc_elgoog@google.com"
    }
}

export interface UserFunctions{
    userGetInfo: typeof userGetInfo;
}
