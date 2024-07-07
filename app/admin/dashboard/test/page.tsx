'use client'
import { useReducer } from "react";

const initialState = {count: 0};
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'incr':
            return {count: state.count + 1}
            break;
        default:
            state
            break;
    }
}
const testPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return(
        <>
            <h3>Test page</h3>
            Counter - {state?.count}
            <button onClick={()=> {
                dispatch({type: 'incr'})
            }}>Increament</button>
            <p>Hello there this is test writing for website development video recording. Thanks for watchinng our videos</p>
        </>
    )
}
export default testPage;