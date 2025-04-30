import React from "react";
import TypewriterText from "./TypewriterText";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  <div style={{ position: 'relative', height: '100%' }}>
                    <TypewriterText 
                      text={props.data ? props.data.title : "PromptAI Studio"} 
                      speed={150}
                    />
                  </div>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
