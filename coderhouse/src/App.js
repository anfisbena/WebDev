import { Box } from '@mui/system';
import Header from './components/Header/index.jsx';
import ItemListContainer from './components/Main/index.jsx';

function App() {
  return (
    <Box className="App">
      <Header />
      <ItemListContainer/>
    </Box>
  );
}

export default App;