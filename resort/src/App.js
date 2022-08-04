import './App.css';

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
// import Error from './pages/Error'

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
   <>
   <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path='/room' component={Rooms}/>
      <Route exact path='/room/:slug' component={SingleRoom}/>
   </Switch>
    
   </>
  );
}

export default App;
