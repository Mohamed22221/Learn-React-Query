import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'

function App() {
  return (
    <div>
       <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/super-heroes'>Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />


        </Routes>
      </Router>
    </div>

    // <Router>
    //   <div>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to='/'>Home</Link>
    //     </li>
    //     <li>
    //       <Link to='/super-heroes'>Traditional Super Heroes</Link>
    //     </li>
    //     <li>
    //       <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
    //     </li>
    //   </ul>
    // </nav>
    //     <Switch>
    //       <Route path='/super-heroes'>
    //         <SuperHeroesPage />
    //       </Route>
    //       <Route path='/rq-super-heroes'>
    //         <RQSuperHeroesPage />
    //       </Route>
    //       <Route path='/'>
    //         <HomePage />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  )
}

export default App