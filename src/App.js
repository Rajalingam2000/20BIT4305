import { Route } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Home/>
      {/* <Route path="/home" exact><Home></Home></Route> */}
    </div>
  )
}

export default App
