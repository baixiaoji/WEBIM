import * as constObj from "../const.js"
export default function signReducer(state={
    loginState:0
},action){
    switch (action.type) {
        case constObj.LOGIN_START:
            return Object.assign({},state,{
                loginState:action.payload.text
            })
        default:
            return state
    }
}