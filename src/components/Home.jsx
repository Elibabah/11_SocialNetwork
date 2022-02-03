import { useAuth } from "../context/authContext"

export function Home() {

      const {user, logout, loading} = useAuth()

      const handleLogout = async () => {
            await logout()
      }

      if(loading) return <h1>loading...</h1>

      return(
            <div>
                  Welcome, {user.email}

                  <button onClick={handleLogout}>logOut</button>
            </div>
      )
}