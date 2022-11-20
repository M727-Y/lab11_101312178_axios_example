import React, { Component } from 'react'
import PersonDetail from './PersonDetail';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios'

export default class PersonList extends Component {
    constructor(props){
        super(props)
        this.state = {
            persons: []
        }
    
    }
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {
        return (
            <>
            <Alert variant="success">
                <h2>User List</h2>
            </Alert>
            <Container className="p-3">
            
            
            {
                this.state.persons.map(person =>(
                    <div key={person.login.uuid}>
                        <PersonDetail person={person} />
                    </div>
                    
                ))
            }
            
        </Container>
        </>
        )
    }
}
