import './App.css'
import { Button } from './components/Button'
import { Container } from './components/Container'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Input } from './components/Input'
import { Oscar } from './components/Oscar'
import { Person } from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

export enum StatusConditions {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

function App() {
  return (
    <div className="App">
      <Container
        styles={{
          border: '1px solid black',
          padding: '1rem',
          backgroundColor: 'pink',
        }}
      />
    </div>
  )
}

export default App
