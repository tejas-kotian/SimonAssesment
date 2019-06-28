import React from "react";
import PropTypes from "prop-types";

const Dashboard = ({allocation}) => (

     

        <div className="set-size charts-container">
          <div className={'whiteBackground pie-wrapper progress-' + allocation}>
            <span className="label">{allocation}<span className="smaller">%</span></span>
            <div className="pie">
              <div className="left-side half-circle"></div>
              <div className="right-side half-circle"></div>
            </div>
          </div>
        </div>
     
    


);

Dashboard.propTypes = {
  allocation:PropTypes.number
};

export default Dashboard;
