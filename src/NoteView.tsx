import { Link } from "react-router-dom";
import { Note, RawNote } from "./App";

export type NoteView={
    note:RawNote[]
}


export function NoteView({note}:NoteView){

    return (
        <div as={Link} to={`/${note.id}`}> 
            Show
        </div>
    )


}