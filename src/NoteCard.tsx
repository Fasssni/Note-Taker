import { useMemo } from "react"
import { Note, Tag } from "./App"
import { NoteListProp,  } from "./NoteList"
import cl from "./NoteCard.module.css"



export function NoteCard({note,onDelete}:NoteListProp){

    const color=["yellow","red", "green", "blue","violet","indingo","orange"]

    

    return <div className={cl.main}>
                <h3>{note.title}</h3>
             <div className={cl.tags}>
               {note.tags?.map((tag)=>
                <p 
                    className={cl.tag__title} 
                    key={tag.label}
                    style={{
                        color:color[Math.floor(Math.random()*color.length-1)]
                    }}
                    >
                    #{tag.label}
                </p>
                )}
                <p onClick={()=>onDelete(note.id)}>delete</p>
              </div>
           </div>
}
