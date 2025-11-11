import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({job}) => {

    console.log(job.company);

  return (
    // Card Section
    <div className="card">
      <div>
        {/* Top Section */}
        <div className="top">
          <img
            src={job.brandLogo}
            alt="Amazon Logo"
          />
          <button>
            Save <Bookmark />
          </button>
        </div>

        {/* Center Section */}
        <div className="center">
          <h3>
            {job.company} <span>{job.datePosted}</span>
          </h3>
          <h2>{job.post}</h2>
          <div className="tags">
            <h4>{job.tag1}</h4>
            <h4>{job.tag2}</h4>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div className="details">
          <h3>{job.pay}</h3>
          <p>{job.location}</p>
        </div>
        <div className="action">
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;