import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RoutePrivate                               from './components/routes/RoutePrivate.component';
import RouteAdmin                                 from './components/routes/RouteAdmin.component';
import AlertState                                 from './context/alert/alertState';
import AuthState                                  from './context/auth/authState';
import ContactState                               from './context/contact/contactState';
import authToken                                  from './config/auth';
import Login                                      from '../src/components/auth/Login.component';
import Dashboard                                  from '../src/components/menu/Dashboard.component';
import Reportes                                   from '../src/components/reportes/Reportes.component';
import Caja                                       from '../src/components/caja/Caja.component';

import Usuarios                                   from '../src/components/usuarios/Usuarios.component';
import CreateUser                                 from '../src/components/users/CreateUser.component';
import Product                                    from '../src/components/products/Product.component';
import Pedidos                                    from '../src/components/pedidos/Pedidos.component';
import Ventas                                     from '../src/components/ventas/Ventas.component';
import Facturacion                                from '../src/components/facturacion/Facturacion.component';
import Clientes                                   from '../src/components/clientes/Clientes.component';




const token = localStorage.getItem('token');
if(token) authToken(token);

function App() {
  return (
    <Fragment>
      <AlertState>
        <AuthState>
          <ContactState>
            <Router>
              <Switch>

                <Route exact path="/" component={Login} />

                <RoutePrivate exact path="/facturacion" component={Facturacion} />
                <RoutePrivate exact path="/products"    component={Product} />
                <RoutePrivate exact path="/pedidos"     component={Pedidos} />
                <RoutePrivate exact path="/ventas"      component={Ventas} />
                <RoutePrivate exact path="/clientes"    component={Clientes} />
                <RoutePrivate exact path="/usuarios"    component={Usuarios} />
                
                <RoutePrivate exact path="/dashboard"     component={Dashboard} />
                <RoutePrivate exact path="/reportes"      component={Reportes} />
                <RoutePrivate exact path="/caja"          component={Caja} />

                <RoutePrivate exact path="/create-user"   component={CreateUser} />
                
              </Switch>
            </Router>
          </ContactState>
        </AuthState>
      </AlertState>
    </Fragment>
  );
}

export default App;
