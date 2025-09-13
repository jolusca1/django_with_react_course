import { UserInfo } from "./components/UserInfo";

const App = () => {

  const isLogged = true;

  return (
      <div>
        <h1>Meu primeiro componente de usuário</h1>

        <UserInfo
          name="João Lucas"
          avatar="https://tse4.mm.bing.net/th/id/OIP.ISTF7i7BSv635VbXUt5ItAHaEK?r=0&cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          age={24}
          email="joaolucas@teste.com"
          roles={[{id: 1, title: 'CEO'}]}
        />
        <UserInfo
          name="Shara Thalya"
          avatar="https://tse4.mm.bing.net/th/id/OIP.ISTF7i7BSv635VbXUt5ItAHaEK?r=0&cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          age={23}
          email="shara@teste.com"
          roles={[{id: 2, title: 'CTO'}]}
        />
      </div>
    )
}

export default App;