import logo from './logo.svg';
import './App.css';
import Vajra from './components/Vajra';
import Sidebar from './components/Sidebar';
import { Box } from '@chakra-ui/react';


function App() {
  return (
    <Box className="App" display={"flex"} >
      <Sidebar/>
      <Vajra/>
     
    </Box>
  );
}

export default App;
