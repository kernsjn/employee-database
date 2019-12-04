import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AllEmployees from './pages/AllEmployees'
import AddEmployee from './pages/AddEmployee'
import HomePage from './pages/HomePage'
import EmployeeData from './pages/EmployeeData'

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <section>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/1">All Employees</Link>
              </li>
              <li>
                <Link to="/2">Add Employee</Link>
              </li>
            </ul>
          </section>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={AllEmployees}></Route>
        <Route exact path="/2" component={AddEmployee}></Route>
        <Route exact path="/employee/:id" component={EmployeeData}></Route>
      </Switch>
    </Router>
  )
}

export default App
