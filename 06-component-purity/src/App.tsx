// import '@/learn/about-purify'
// import '@/learn/about-size-effect'
import AvatarListPage from "@/pages/AvatarList"
import '@/styles/main.css'
import { avatarData } from "./data/data"

function App() {
  return (
    <div>
      <AvatarListPage list ={avatarData}/>
    </div>
  )
}

export default App