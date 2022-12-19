import './App.css'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
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
      <Status status={StatusConditions.ERROR} />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Di Caprio</Heading>
      </Oscar>
      <Greet name={'Andy'} isLoggedIn={true} />
    </div>
  )
}

export default App
