import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Projects } from "../components/Projects"


export function HomePage() {
  const { email, uid } = useContext(UserContext)

  return (
    <main className="p-12">
        <h1 className="text-5xl font-semibold text-stone-800 mb-4">Home</h1>
        <h2 className="text-xl text-stone-600 m-5">
          {uid && 'Bienvenid@, '}
          {email}
        </h2>

      < Projects />
    </main>
  )
}
