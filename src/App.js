import React from 'react';
import Contact from './components/Contact'

import './App.css';

function App() {
  return (
    
      <p className='App'>
        <Contact name ="Pierre" avatar = "https://randomuser.me/api/portraits/men/94.jpg" onLine/>
        <Contact name ="Paul" avatar = "https://randomuser.me/api/portraits/men/12.jpg"/>
        <Contact name ="Jack" avatar = "https://randomuser.me/api/portraits/men/47.jpg" onLine/>

      </p>

  );
}

export default App;
