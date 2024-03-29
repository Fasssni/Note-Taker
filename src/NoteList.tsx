import {Row,Col,Stack, Button,Form, Card} from "react-bootstrap"
import { Link } from "react-router-dom"
import ReactSelect from "react-select"
import { Note, NoteData, Tag } from "./App"
import {useState, useMemo} from "react"
import { NoteCard } from "./NoteCard"

export type NoteListProp={
    onDelete:(id:string)=>void
    availableTags:Tag[]
    notes:Note[]
}


export function NoteList({availableTags, notes, onDelete}:NoteListProp){ 

    const [selectedTags,setSelectedTags]=useState<Tag[]>([])
    const [title, setTitle]=useState('')

    const filteredNotes=useMemo(()=>{
        return( notes.filter(note=>note.title===""||note.title.toLocaleLowerCase().includes(title.toLowerCase())))

        
    }, [title,selectedTags, notes])

    const simplifiedNotes=useMemo(()=>{
        return(
            notes.map((x)=>{
                return {id:x.id,tags:x.tags,title:x.title, markdown:x.markdown}
        }))
    },[notes])

    console.log(1,notes,2,simplifiedNotes)
  
   

    return <>
    <Row className="align-items-center mb-4">
        <Col><h2>Notes</h2></Col>
        <Col xs="auto">
           <Stack gap={2} direction="horizontal"> 
             <Link to="/new">
                <Button variant="primary">
                    Create a note
                </Button>
             </Link>
             <Button variant="outline-secondary">
                    Edit Tags
            </Button>
           </Stack>
        </Col>
    </Row>
    <Form>
        <Row className="mb-4">
            <Col>
              <Form.Group controlId="title">
                  <Form.Label>
                      Title
                  </Form.Label>
                  <Form.Control 
                  value={title} 
                  onChange={(e)=>setTitle(e.target.value)}
                  type="text">

                  </Form.Control>
              </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="tag">
                    <Form.Label>Tag</Form.Label>
                    <ReactSelect
                    options={ 
                        availableTags.map(tag=>{
                            return{ label:tag.label, value: tag.id}
                        })
                    }
                 
                    value={selectedTags.map(tag=>{ 
                        return{label:tag.label,value:tag.id}
                    })} 
                    onChange={(tags)=>{setSelectedTags(tags.map(tag=>{ 
                     return{label:tag.label, id:tag.value}
                    }))
                }}
                    isMulti />
                </Form.Group> 
            </Col>
        </Row>
    </Form> 
    <Row sx={1} sm={2} lg={3} xl={4}>
        {filteredNotes.map(note=>{
            return( 
                <Col key={note.id}>
                    <NoteCard note={note} onDelete={onDelete}></NoteCard>
                </Col> 
            )
        })
          
        }
    </Row>
    
    </>

}