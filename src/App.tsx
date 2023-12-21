import './App.css'
import {useRutterLink} from "react-rutter-link";

function App() {
  const {open} = useRutterLink({
    publicKey: 'my-key',
    onSuccess: (publicKey: string) => {
      console.log('it worked!', publicKey)
    }
  })

  return (
    <div>
      <button onClick={() => open()}>Open Rutter</button>
    </div>
  )
}

export default App
