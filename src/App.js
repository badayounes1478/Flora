import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Establishment from './Components/Establishment'
import Founder from './Components/Founder'
import Cofounder from './Components/Co_Founder'
import Executive from './Components/Executive'
import Vision from './Components/Vision'

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/establishment" component={Establishment} />
      <Route  path="/founder" component={Founder} />
      <Route  path="/co-founder" component={Cofounder} />
      <Route  path="/executive" component={Executive} />
      <Route  path="/vision" component={Vision} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
