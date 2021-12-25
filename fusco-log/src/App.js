import './styles/App.css';
import Log from './logPage';
import SignUp from './signUpPage';
import SignIn from './signInPage';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" element={<Log />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
