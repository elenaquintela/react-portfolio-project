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
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 text-right bg-slate-800 p-4">Sobre mí</h2>
          <div className="flex mb-5">
            <p className="text-xl text-stone-600 m-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, minus eos! Molestiae eaque quae laboriosam dolores incidunt animi, soluta dolorem mollitia quos perferendis delectus necessitatibus voluptates? Dolor quia in ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nemo temporibus adipisci ea voluptatem enim earum dolore natus, magnam voluptate, architecto maxime, voluptatum repellat facilis autem. Rerum eius incidunt tenetur. lorem</p>
            <img className="object-contain w-96 mr-5" src="./public/profile.jpg" alt="profile"/>
          </div>
        </div>
      < Projects />
    </main>
  )
}
