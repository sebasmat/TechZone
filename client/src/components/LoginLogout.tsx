import Link from "next/link"
import {useUser} from "@auth0/nextjs-auth0/client"

type Props = {}

 const LoginLogout = ({}: Props) => {
    const {error, isLoading, user} = useUser()
    if(error) {
        return <div>Error</div>
    }

    if (isLoading) {
        return <div>Cargando...</div>
    }

    
    
    return (
        <div>
            {
            !user  && (
            <Link href={"/api/auth/login"}>
            <button>
            <div>
            <svg 
              className="h-8 w-8 text-black"  
              fill="none" viewBox="0 0 24 24" 
              stroke="currentColor"
              >
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            </div>
          </button>
          <h5>Login</h5>
        </Link>
            )
            }

            {
            user && (
            <Link href={"/api/auth/logout"}>
            <button>
            <div>
            <svg 
                className="h-8 w-8 text-red-500"  
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                >
                <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
            </div>
            </button>
            <h5>Logout</h5>
            </Link>
                )
            }
       
      </div>

      
    )
    
}

export default LoginLogout