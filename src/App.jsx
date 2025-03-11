//Все что в коменатриях, это старый код базовой странички, оставил для примера
// import { useState } from 'react' - Это подключение/импортирование Хука(На метаниете, это для того что бы менять состояние в реальном времени)
// import reactLogo from './assets/react.svg' - Это подключение/импортирование картинки
// import viteLogo from '/vite.svg' - Это подключение/импортирование картинки
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  

  return (

    <>
      <Header />
      <MainContent />   
      <Footer />
    </>


    /*
    
    const [count, setCount] = useState(0)
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    */
  )
}

export default App
