import './styles/App.css';
import Log from './logPage';
import SignUp from './signUpPage';
import SignIn from './signInPage';
import PrivateRoute from './privateRoute';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import ForgotPassword from './forgotPassword';
import Profile from './profile';
import Home from './home';
import Greg from './greg';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/"
            element={<PrivateRoute />}>
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route exact path="/log"
            element={<PrivateRoute />}>
            <Route exact path="/log" element={<Log />} />
          </Route>
          <Route exact path="/profile"
            element={<PrivateRoute />}>
            <Route exact path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/greg" element={<Greg />} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
