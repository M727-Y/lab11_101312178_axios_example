import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


export default function PersonDetail({person}) {
  return (
    <div className='row'>
        {/* <p style={{color:'red',fontSize:'20px'}}>{user.name} - {user.username} - {user.email}</p>
        <p>{user.address.suite},{user.address.street}, {user.address.city}</p> */}
        
        <Alert variant='info'>
            <p>{person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}</p>
            <hr/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2 d-flex flex-column'>
                        <img alt='Profile' src={person.picture.large} className="rounded-circle"></img>
                        <br/><br/>
                        <Button className='primary'>Details</Button>
                        
                    </div>
                    <div className='col-md-10'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <p>User Name:</p>
                                    <p>Gender:</p>
                                    <p>Time Zone Description:</p>
                                    <p>Address:</p>
                                    <p>Email:</p>
                                    <p>Birth Date And Age:</p>
                                    <p>Register Date:</p>
                                    <p>Phone#:</p>
                                    <p>Cell#:</p>
                                </div>
                                <div className='col-md-8'>
                                    <p>{person.login.username}</p>
                                    <p>{person.gender}</p>
                                    <p>{person.location.timezone.offset} {person.location.timezone.description}</p>
                                    <p>{person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} -  {person.location.postcode}</p>
                                    <p>{person.email}</p>
                                    <p>{person.dob.date}, {person.dob.age}</p>
                                    <p>{person.registered.date}</p>
                                    <p>{person.phone}</p>
                                    <p>{person.cell}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Alert>

    </div>
  )
}