import React from "react";
import { Button } from "reactstrap";

const Sidebar = () => (
  <div className="">
    <h2 className="earlyreg-header">Early Registration Discount</h2>
        <div className="earlyreg-box">
            <p>
                Take advantage of a $50 discount for registrations submitted through August 31.
            </p>
            <Button
                id="earlyreg-btn"
                color="primary"
                className="btn-margin"
                href="http://www.cvent.com/d/lhq4sj/2K"
                >
                Register Now!
            </Button>        
        </div>
  </div>
);

export default Sidebar;