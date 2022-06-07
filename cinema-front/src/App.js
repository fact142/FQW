import 'antd/dist/antd.css';
import { LoginPage } from './views/Auth/LoginPage';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authentication } from './store/actions/userAction';
import { Registration } from './views/Auth/Registration';
import { Main } from './views/Main/Main';
import { Error401 } from './views/Errors/Error401';
import { Error404 } from './views/Errors/Error404';
import AccountPage from './views/AccountPage/index';
import useUser from './hooks/useUser';
import AdminPage from './views/AdminPage/index';
import OrderPage from './views/OrderPage';


function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const {role} = useUser();
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
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={Registration}/>
            <Route path='/main' component={Error401} />
            <Route component={Error404}/>
          </Switch>
        )
        : (
          <Switch>
            <Route path="/main" component={Main}/>
            <Route path="/account" component={AccountPage} />
            <Route path="/order" component={OrderPage}/>
            { role === "ADMIN" && <Route path="/admin" component={AdminPage}/> }
            <Redirect to="/main" />
          </Switch>
        )}
    </BrowserRouter>
  );
}

export default App;
