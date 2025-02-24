import './App.css';

function App() {
  const condition = false;

  return (
    <div>
      <h1>Renderizado condicional</h1>
      {/*condition && <h2>La condicion se cumple</h2>*/}

      {condition ? (
        <h2>La condicion se cumple</h2>
      ) : (
        <h2>La condicion no se cumple</h2>
      )}
    </div>
  )
}

export default App