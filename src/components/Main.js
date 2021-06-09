import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import FormData from './components/FormData';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newData : this.props.Data,
        
        }
       
    }

       
    filter (numOfHorned) {

      let  filteredData = [];
      this.props.Data.map(event => {
        if (event  === {numOfHorned}) {
            all.push(event)
        } 
        return all  ;

      })


      if(numOfHorned === 'all' ){
        filteredData = this.props.Data;
     }
     this.setState({
        newData : filteredData
     })

       
    }

   
    render(){
        return(
            
        
            <div className='img'>
               < FormData filter = {this.filter}/>
                <CardColumns>
                
                {this.state.newData.map(item=>{
                    return(
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








