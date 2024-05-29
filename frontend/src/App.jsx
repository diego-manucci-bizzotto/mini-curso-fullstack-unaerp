
function App() {

  fetch('http://localhost:8080/atividades')
    .then(response => response.json())
    .then(data => console.log(data))

  return (
    <p>Hello World!</p>
  )
}

export default App
