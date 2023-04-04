
import { Container } from 'react-bootstrap';
import './App.css';
import SearchBar from './Components/SearchBar';
import useFetchMembers from './Utils/useFetchMembers';

function App() {

  const membersData = useFetchMembers()

  return (
    <>

      <Container className="App">   
        <h1 className='headingOfProject'> Admin UI</h1>
      </Container>

      <SearchBar membersData={membersData}/>



    </>
  );
}

export default App;
