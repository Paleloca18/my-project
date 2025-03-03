import "./App.css";

function App() {
  let numero = 8;

  return (
    <>
      <h1>Renderizado switch case</h1>
      {(() => {
        switch (numero) {
          case 13:
            return <div>Numero es 13</div>;
          case 12:
            return <div>Numero es 12</div>;
          default:
            return <div>El numero no es ni 13 ni 12</div>;
        }
      })()}
    </>
  );
}

export default App;
