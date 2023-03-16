import React from 'react'
import ReactDOM from 'react-dom/client'
import { useToggle } from 'osaka-utils'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  const [value, toggle] = useToggle<string>({
    options: ['On', 'Off']
  })

  return (
    <>
      <h1>Hello from App</h1>
      <pre>{value}</pre>
      <button
        onClick={() => {
          toggle()
        }}
      >
        Click me
      </button>
    </>
  )
}
