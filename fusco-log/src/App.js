import './App.css';
import { useState } from 'react';
import Log from './logPage';
import SignIn from './signInPage';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [hasAccount, setHasAccount] = useState(true)
  const [isCoach, setIsCoach] = useState(false)

  return isSignedIn ? (
    <Log
      isCoach={isCoach}
    />
  ) :
    (
      <SignIn
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        isCoach={isCoach}
        setIsCoach={setIsCoach}
      />
    );
}

export default App;
