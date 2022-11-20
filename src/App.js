import './App.css';
import PersonList from './PersonList';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Container className="p-3">
      <div className='row'>
        <div className='col-md-3'></div>
        <PersonList className='col-md-6'/>
        <div className='col-md-3'></div>
      </div>
      
    </Container>
  );
}

export default App;
