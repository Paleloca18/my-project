import './App.css'
import Menu from './components/Menu.jsx'

function App() {
  const saySomething = () => {
    console.log("something");
  }

  return (
    <div>
      <Menu></Menu>
      <h1>Hola wuenas!!</h1>
      <h2 onClick={saySomething}>WTF BRO</h2>
    </div>
  )
}

export default App