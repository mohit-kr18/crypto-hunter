import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
  App:{
     backgroundColor :"#14161a",
     color:"white",
     minHeight:"100vh"
  },
}));


function App() {
  const classes = useStyles();
 
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path='/coins/:id' Component={CoinPage}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
