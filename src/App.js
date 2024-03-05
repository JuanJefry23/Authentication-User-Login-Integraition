import './App.css';
// import { useEffect } from 'react';
import { AdminPortal } from '@frontegg/react';
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  // useEffect(() => {
  //   if (!isAuthenticated) {
  // loginWithRedirect();
  //   }
  // }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleClick = () => {
    AdminPortal.show();
  };
  
  return (
    <div className="App">
      { isAuthenticated ? (
        <div className="loginPage">
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span className="userName">Logged in as: {user?.name}</span>
          </div>
          <div class="btnContainer">
            <div>
              <button onClick={() => alert(user.accessToken)} className="btnLogged" >What is my access token?</button>
            </div>
            <div>
              <button onClick={() => logout()} className="btnLogged" >Click to logout</button>
            </div>
            <div>
              <button onClick={handleClick} className="btnLogged" >Settings</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="btnLogin">
          <p className="txtLogin">Welcome, please click on the button below in order to log in into the main page</p>
          <button className="btn" onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;