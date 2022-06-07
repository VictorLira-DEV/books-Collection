import "../styles/App/App.css";
import Home from '../components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from "../components/context/GlobalState";
import AddNewTransaction from "../components/AddNewTransaction";

function App() {
    return (
        <div className="wrapper">
            <GlobalProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}  />
                        <Route path="/addTransaction" component={AddNewTransaction}  />
                    </Switch>
                </Router>
            </GlobalProvider>
        </div>
    );
}

export default App;
