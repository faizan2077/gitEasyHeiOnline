import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import RoutesList from "./RoutesList";
import { isJwtExpired } from "jwt-check-expiration";
import { useEffect } from "react";

const App = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const tokenchek = () => {
    // console.log(token)
    if (token != null) {
      // alert("no token")
      //  console.log('isExpired is:', isJwtExpired(token));
      if (isJwtExpired(token) == true) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        // navigate('/')
      }
    }
  };

  function checklocalstorage() {
    const ax = localStorage.getItem("assignment");
    const arr = JSON.stringify([]);
    if (ax === null) {
      localStorage.setItem("assignment", arr);
    }
  }

  useEffect(() => {
    checklocalstorage();
    tokenchek();
  }, []);
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <RoutesList />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
