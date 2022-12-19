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
import { LoggedStatus } from './state/LoggedStatus'

function App() {
  return (
    <div className="App">
      <LoggedStatus />
    </div>
  )
}

export default App
