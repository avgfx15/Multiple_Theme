import './App.css';

import HomeComponent from './HomeComponent';
import NavbarComponent from './NavbarComponent';
import ThemeContextProvider from './ThemeContext/ThemeContextProvider';

const App = () => {
  return (
    <ThemeContextProvider>
      <NavbarComponent />
      <HomeComponent />
    </ThemeContextProvider>
  );
};

export default App;
