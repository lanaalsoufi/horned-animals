import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form'
import allData from './data.json'

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }




    filter = (event) => {
        let numOfHorned = parseInt(event.target.value);
        let newHorns =  allData;

        let newData = [];
        if (numOfHorned) {
            newData = newHorns.filter(item => {
                if (item.horns === numOfHorned)

                    return item;

            })

        } else {
            newData = newHorns;

        }

        this.props.displayFilteredImages(newData);

    }




    render() {
        return (




            <div className='img'>

                <Form  >
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Select Number Of Horns</Form.Label>
                        <Form.Control as="select" onChange={this.filter} >
                            <option value='all'>All</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                            <option value='100'>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>


                <CardColumns>

                    {this.props.Data.map(item => {
                        return (
                            <HornedBeast
                                title={item.title}
                                imageUrl={item.image_url}
                                descreption={item.description}
                            />
                        )
                    })
                    }

                </CardColumns>

            </div>


        )
    }

}

export default Main;








