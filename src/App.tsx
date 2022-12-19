import './App.css'
import { Button } from './components/Button'
import { Container } from './components/Container'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Input } from './components/Input'
import { Oscar } from './components/Oscar'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Counter } from './state/Counter'
import { LoggedStatus } from './state/LoggedStatus'
import { User } from './state/User'

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

export default App
