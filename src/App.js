import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import Dependent from './components/Dependent'
import { HomePage } from './components/Home.page'
import InfinityData from './components/InfinityData'
import PaginationColors from './components/PaginationColors'
import RqMoreIds from './components/RqMoreIds'
import { RQSuperHeroPage } from './components/RQSuperHero.page'
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
          <li>
            <Link to='/super-heroes-ids'>Ids Heroes</Link>
          </li>
          <li>
            <Link to='/super-heroes-Dependent'>Dependent</Link>
          </li>
          <li>
            <Link to='/super-colors-pagination'>Colors Pagination</Link>
          </li>
          <li>
            <Link to='/infinity-colors'>Infinty</Link>
          </li>
        </ul>
      </nav>
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/rq-super-heroes/:postId" element={<RQSuperHeroPage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/super-heroes-ids" element={<RqMoreIds heroIds={[1,3]}/>} />
          <Route path="/super-heroes-Dependent" element={<Dependent email="hamdymohame72gmail.com"/>} />
          <Route path="/super-colors-pagination" element={<PaginationColors />} />
          <Route path="/infinity-colors" element={<InfinityData />} />


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