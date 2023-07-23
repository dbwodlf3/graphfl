/** return user information */
export const getUserProfile = {
    functionId:"user_profile_getUserProfile",
    /** return user information */
    func: (jwt: string)=>{
        return {
            username: "chomama",
            email: "moc_elgoog@google.com"
        }
    }
}

export const updateUserProfile = {
    functionId:"user_profile_updateUserProfile",
    func:(jwt: string, input: {})=>{
        return {}
    }
};
