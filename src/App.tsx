import { useState,useMemo } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes,Route, Navigate} from "react-router-dom"
import { Container } from 'react-bootstrap'
import { NewNote } from './NewNote'
import { NoteForm } from './Form'
import { useLocalStorage } from './useLocalStorage'
import {v4 as uuidV4} from "uuid"
import { NoteList } from './NoteList'
import { EditTags } from './EditTags'
import { NoteView } from './NoteView'
import { NoteLayout } from './NoteLayout'

export type Note={ 
  id:string
}&NoteData

export type NoteData={ 
  title:string
  markdown:string
  tags: Tag[]
}

export type RawNoteData={ 
  title:string
  markdown:string
  tagIds:string[]
}

export type Tag={ 
  id:string
  label:string
}

export type RawNote={ 
  id:string
}&RawNoteData



function App() {
  const [notes,setNotes]=useLocalStorage<RawNote[]>("NOTES",[])
  const [tags,setTags]=useLocalStorage<Tag[]>("TAGS",[])
 
  const notesWithTags=useMemo(()=>{
  return notes.map(note=>{
    return{...note, tags:tags.filter(tag=>note.tagIds.includes(tag.id))}})
  }, [notes, tags])

  function addTag(tag: Tag){
    setTags(prev=>[...prev, tag])
  }

  function onCreateNote({tags,...data}:NoteData){
      setNotes(prevNotes=>{
        return[
          ...prevNotes,
          {
           ...data, id:uuidV4(),tagIds:tags.map(tag=>tag.id)
        }]
      })}

      function onDeleteNote(id:string){

        setNotes(prevNotes=>{
           console.log("did work")
            return prevNotes.filter((note)=>note.id!==id)
            
        })
      }

      
  return (
    <div className="App">
      <Container className="my-4">  
      <Routes>
          <Route path="/" element={<NoteList notes={notesWithTags} onDelete={onDeleteNote} availableTags={tags}/>}/>
          <Route path="/new" element={<NewNote 
          onAddTag={addTag}
          availableTags={tags}
          onSubmit={onCreateNote}/>}/>
          <Route path="/:id" element={<NoteLayout notes={notesWithTags}/>}>
              <Route index element={<NoteView note={notesWithTags}></NoteView>}/>
              <Route path="edit" element={<EditTags></EditTags>}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </Container>
    </div>
  )
}

export default App
