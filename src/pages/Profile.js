import React from "react";
import CustomSidenav from "../components/SideNav";
import ProfileCards from "../components/ProfileCards"


const ProfileComponent = () => {
  return (
    <div className="next-steps my-5 content-wrapper">
        <CustomSidenav />
      <div className="main-content-profile">
        <ProfileCards />
      </div>
      
    </div>
    
  );
};

export default ProfileComponent