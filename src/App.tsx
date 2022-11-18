import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes,Route, Navigate} from "react-router-dom"
import { Container } from 'react-bootstrap'
import { NewNote } from './NewNote'
import { NoteForm } from './Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Container className="my-4">  
      <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/new" element={<NewNote/>}/>
          <Route path="/:id">
              <Route index element={<h1>Show</h1>}/>
              <Route path="edit" element={<NoteForm/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </Container>
    </div>
  )
}

export default App
