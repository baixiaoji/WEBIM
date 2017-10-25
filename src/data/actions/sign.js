import * as constObj from "../const.js"
export function signIn(text){
    return {
        type:constObj.LOGIN_START,
        payload:{
            text
        }
    }
}