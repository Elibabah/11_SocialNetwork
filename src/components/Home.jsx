import { useAuth } from "../context/authContext"

export function Home() {

      const {user, logout, loading} = useAuth()

      const handleLogout = async () => {
            try {
                  await logout()
            } catch (error) {
                  console.log(error)
            }
      }

      if(loading) return <h1>loading...</h1>

      return(
            <div>
                  Welcome, {user.displayName || user.email}

                  <button onClick={handleLogout}>logOut</button>
            </div>
      )
}