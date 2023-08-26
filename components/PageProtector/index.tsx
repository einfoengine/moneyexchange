'use client'
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";
const tokenString = localStorage.getItem('user');
const PageProtector = () => {    
    const router = useRouter();
    if(!tokenString){
        router.push("/");
    }
    if(tokenString){
        const localdata = JSON.parse(tokenString);
        const decode:any = jwt_decode(localdata.token);
        console.log("decoded", decode.role)
        if(decode.role!=='admin'){
            router.push('/');
        }
    }
}
export default PageProtector;