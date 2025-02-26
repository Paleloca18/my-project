import './App.css';

function App() {
  const movies = ['IronMan','Hercules','Green Lantern','Batman','Superman','Thor']
  const animals = [{
    id: 1,
    name: 'michi',
    img: 'https://i.pinimg.com/originals/91/d8/9e/91d89ea00a3f2e9a3d326152da4a2548.jpg'
  },{
    id: 2,
    name: 'perrito',
    img: 'https://wallpaper.dog/large/17027270.jpg'
  },{
    id: 3,
    name: 'hamster',
    img: 'https://i.pinimg.com/originals/80/b0/63/80b0634a94ea46615db06a80bca15362.jpg'
  },]
  
  const HTMLMovies = movies.map((movie, index) => {
    return <p key={movie}>{index + 1}.- {movie}</p>
  })

  const HTMLAnimals = animals.map(animal => {
    return (
      <div key={animals.id}>
        <h2>{animal.name}</h2>
        <img src={animal.img} alt="" width={200}/>
      </div>
    )
  })

  return (
    <div>
      <h1>Renderizado de listas</h1>
        {HTMLMovies}
        {HTMLAnimals}
    </div>
  )
}

export default App