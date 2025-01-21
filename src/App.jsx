import React from 'react'

import Header from './header';
import Contact from './contact';
import Content from './body';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div class="bg-secondary">
      <Header/>
      <Content/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App