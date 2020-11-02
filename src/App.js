import { GlobalStyle } from "./utils/globalStyles";
import { ThemeProvider } from 'styled-components'
import {light} from './utils/Theme'
import Mainpage from "./pages/Mainpage";
  

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <div className="App">
        <Mainpage />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
