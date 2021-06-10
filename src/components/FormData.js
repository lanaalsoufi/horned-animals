import React from 'react';
import Form from 'react-bootstrap/Form'

class FormData extends React.Component {

    
    
    render() {
        return (
            <Form  >
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Select Number Of Horns</Form.Label>
                    <Form.Control as="select" onChange={this.props.filter} >
                        <option value='all'>All</option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                        <option value='100'>100</option>
                    </Form.Control>
                </Form.Group>
            </Form>)
    }
}
export default FormData;