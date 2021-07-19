import { Switch, Route} from 'react-router-dom';
import CharacterDetails from './Components/CharacterDetails';
import MainPage from './Components/MainPage';
const App = () => {
  const year = new Date().getFullYear();
    return (
      <>
       <h1 className="header"> Rick and Morty App by Ahmet Işık </h1>
      <div className="App">
       
        <Switch>
          <Route exact path='/rick-and-morty-react-app'> <MainPage/> </Route>
          <Route exact path='/rick-and-morty-react-app/details'> <CharacterDetails/></Route>
        </Switch>
        <div className="footer">
          <p className="copyRightStyle">© Copyright {year} Ahmet Işık. All rights reserved.</p>
        </div>
      </div>
      </>
    );
  
}
export default App;
