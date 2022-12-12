import { NoteData, Tag } from "./App"
import { NoteForm } from "./Form"
import {useState} from "react"

export type NewNoteProps={ 
    onSubmit:(data:NoteData)=>void
    onAddTag:(tag:Tag)=>void
    availableTags:Tag[]
}

export function NewNote({onSubmit,onAddTag, availableTags}:NewNoteProps){ 
    console.log(availableTags)
    
    return(   
    <div>
            <h1 className="mb-4">New note</h1>
            <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </div>
    )
      
}