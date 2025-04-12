import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex gap-2'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WS Boilerplate Vite + React + Vitest</h1>
      
    </div>
  )
}

export default App
