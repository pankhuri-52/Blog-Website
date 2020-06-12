import React from 'react';
import './style.css';
import Card from '../UI/Card';

const Sidebar = (props) => {
   return (
     <div className="sidebarContainer">
        <Card style={{marginBottom : '20px', padding : '20px', boxSizing : 'border-box'}}>
          <div className="cardHeader">
            <span>About Us</span>
          </div>
          <div className="profileImageContainer">
              <img src={require("../../blogPostImages/mine.jpg")} alt="about me" />
          </div>
          <div className="cardBody">
            <p className="personalBio">My name is Pankhuri Trikha. I am a software developer. I am good in Front-end Development.</p>
          </div>
        </Card>

        <Card>
          <div className="cardHeader">
            <span>Social Network</span>
          </div>
        </Card>

        <Card>
        <div className="cardHeader">
            <span>Recent Posts</span>
          </div>
        </Card>
     </div>
   );
}
export default Sidebar;
