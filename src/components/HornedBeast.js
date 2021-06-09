import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Modal} from 'react-bootstrap/'

class HornedBeast extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        numOfHorned : 0,
        show : false
       
    }
}


handleClick = () => {
    this.setState({
        show:true,
    })
}
handleClose =() => {
    this.setState({
        show:false,
    })
}

increasNumOfHorned = () => {
    let numOfHorned = this.state.numOfHorned+1
    this.setState({
        numOfHorned :numOfHorned
    })
}



render(){
        return(
            <div>

             <Card style={{ width: '18rem', backgroundColor : '#232323', color: 'white'}} onClick={this.handleClick}> 
             <Card.Img variant="top" src={this.props.imageUrl} onClick={this.increasNumOfHorned} />
             <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
              ❤️ = {this.state.numOfHorned}
             </Card.Text>
             <Card.Text>
              {this.props.descreption}
             </Card.Text>
             </Card.Body>
             </Card>

             <Modal show={this.state.show} onHide={this.handleClose}>
             <Modal.Header closeButton>
             <Modal.Title>{this.props.title}</Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <div>
                 <img src={this.props.imageUrl} alt={this.props.title}></img>
                 </div>
                 <div>
                 {this.props.descreption}
                 </div>
             </Modal.Body>
             <Modal.Footer>
             <Button variant="secondary"onClick={this.handleClose}>Close</Button>

              </Modal.Footer>
              </Modal>

            </div>
        )
    }
}

export default HornedBeast;
