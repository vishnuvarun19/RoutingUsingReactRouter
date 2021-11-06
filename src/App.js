import {Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound'
import HomeRoute from './components/Home'
import ContactRoute from './components/Contact'
import AboutRoute from './components/About'
import Header from './components/Header'
import './App.css'

const App = () => (
  <div className="page-container">
    <div className="app-container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/contact" component={ContactRoute} />
        <Route exact path="/about" component={AboutRoute} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
