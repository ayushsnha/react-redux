import React from 'react';
import './css/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Navbar from './Navbar'
import Content from './Content'
import Postform from './Postform'


function App() {
  return (
   <Provider store={store}> 
   <div>
     <Navbar/>
     <Postform/>
     <Content/>
   </div>
   </Provider>
  )
}

export default App;
