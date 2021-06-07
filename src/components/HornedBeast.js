import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        numOfHorned : 0
    }
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

             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={this.props.imageUrl} onClick={this.increasNumOfHorned} />
             <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
              ❤️ = {this.state.numOfHorned}
             </Card.Text>

             <Card.Text>
              {this.props.description}
             </Card.Text>

             </Card.Body>
             </Card>

            </div>
        )
    }
}
export default HornedBeast;
