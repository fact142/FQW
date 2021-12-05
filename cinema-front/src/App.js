import logo from './logo.svg';
import './App.css';
import { LoginPage } from './views/Auth/LoginPage';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authentication } from './store/actions/userAction';
import { Registration } from './views/Auth/Registration';
import { Main } from './views/Main/Main';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(authentication());
    }
  }, [dispatch, isAuth]);
  return (
    <BrowserRouter>
      {!isAuth ? (
          <Switch>
            <Redirect from="/main" to="/login" />
            <Redirect from="/" exact to="/login" />
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={Registration}/>
          </Switch>
        )
        : (
          <Switch>
            <Route path="/main" component={Main}/>
            <Redirect to="/main" />
          </Switch>
        )}
    </BrowserRouter>
  );
}

export default App;
