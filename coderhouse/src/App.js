import { Box } from '@mui/system';
import NavBar from './components/NavBar/index.jsx';
import LandPage from './components/Board/index.jsx';

function App() {
  return (
    <Box className="App" borderColor="primary.main" borderTop={4} borderBottom={4}>
      <NavBar />
      <LandPage/>
    </Box>
  );
}

export default App;
