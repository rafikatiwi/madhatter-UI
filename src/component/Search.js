import React from 'react';
import { Container, Row, Col, InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';
import SearchField from 'react-search-field';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			user: "",
			recommended_champs: []
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}


	handleInputChange() {
		// add code to get user data from back-end / server 
		if (this.search.value == this.state.user) {
			this.setState({user: this.search.value}); // set current state to be the user that is found
			//call back-end to get champion recommendations, then add the champions name to recommended_champs array
		}
   		else {
   			this.setState({user: "User not found"});
   		}
   	}

	render() {
      return (
      	<Container sm="12" md={{ size: 6, offset: 3 }}>
        	<InputGroup>
        		<Input placeholder="Username to get champion recommendations" ref={input => this.search = input} onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.handleInputChange()
                }
              }}/>
          		<Button color="secondary" ref={input => this.search = input} onClick={this.handleInputChange}>Search</Button><br/>
      		</InputGroup>
      		<p>{this.state.user}</p>
      	</Container> );
    }
}

export default Search;