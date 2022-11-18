import {Form,Stack,Col,Row} from "react-bootstrap"
import CreatableReactSelect  from "react-select"

export const NoteForm=()=>{
    

    return( 
       <Form>
          <Stack gap={4}>
            <Row>

            <Col> 
                 <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required/>
                </Form.Group>
            </Col>

            <Col> 
                 <Form.Group controlId="tag">
                    <Form.Label>Tag</Form.Label>
                    <CreatableReactSelect isMulti />
                </Form.Group>
            </Col>

            </Row>
          </Stack>

       </Form>
    )
}