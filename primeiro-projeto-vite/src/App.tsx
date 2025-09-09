import { UserAvatar } from "./components/UserAvatar";
import { UserInfo } from "./components/UserInfo";

const App = () => {
  return (
    <div>
      <h1>Meu primeiro componente de usuário</h1>

      <UserAvatar />
      <UserInfo />
    </div>
  )
}

export default App;