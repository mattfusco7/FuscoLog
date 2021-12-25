import './styles/App.css';
import Log from './logPage';
import SignUp from './signUpPage';
import SignIn from './signInPage';
import PrivateRoute from './privateRoute';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import ForgotPassword from './forgotPassword';
import Profile from './profile';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/"
            element={<PrivateRoute />}>
            <Route exact path="/" element={<Log />} />
          </Route>

          <Route exact path="/settings"
            element={<PrivateRoute />}>
            <Route exact path="/settings" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
