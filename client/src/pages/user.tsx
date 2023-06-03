import {withPageAuthRequired} from "@auth0/nextjs-auth0/client"
import LoginLogout from "@/components/LoginLogout";

const user = (props: any)=>{
    return (
        <div>
            <img src={props.user.picture} alt='' width={40} height={40}/>
            <h2>Hola {props.user.nickname}</h2>
            <h2>Email: {props.user.email}</h2>
        </div>

        // <div>Email: {props.user.email}</div>
    )
}

export default withPageAuthRequired(user);