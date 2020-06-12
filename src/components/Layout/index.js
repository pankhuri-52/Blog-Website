import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';
import Card from '../UI/Card';

const Layout = (props) => {
  return(
    <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
      </div>
    <Card>
      <div>
          <h1><center>Created with ❤️ by Dreamster Blogs</center></h1>
      </div>
    </Card>
      </React.Fragment>
    
   )
  }
  export default Layout;