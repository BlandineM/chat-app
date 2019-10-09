import React from 'react';
import Contact from './components/Contact'
import ContactList from './components/ContactList'
import './App.css';

function App(props) {
  return (
    
      <p className='App'>
        <ContactList />
        

      </p>

  );
}

export default App;


/*<Contact name ="Paul" avatar = "https://randomuser.me/api/portraits/men/12.jpg"/>
        <Contact name ="Jack" avatar = "https://randomuser.me/api/portraits/men/47.jpg" onLine/>*/