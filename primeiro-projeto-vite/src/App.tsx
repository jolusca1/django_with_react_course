import { UserInfo } from "./components/UserInfo";

const App = () => {

  const isLogged = true;

  return (
      <div>
        <h1>Meu primeiro componente de usuário</h1>

        {isLogged ? <UserInfo /> : ''}
      </div>
    )
}

export default App;