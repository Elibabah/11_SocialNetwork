import { useAuth } from "../context/authContext"

export function Home() {

      const {user} = useAuth()

      //const authContext = useContext(context)
      console.log(user)

      return(
            <div>
                  Home
            </div>
      )
}