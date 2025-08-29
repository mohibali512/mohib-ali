import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css";
import "./experience.css";

const Journey = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="mb-5">
        My <span className="text-primary">Journey</span>
      </h2>
      <div className="row">
        {/* Education Section */}
        <div className="col-md-6 mb-4">
          <h4 className="mb-4">Education</h4>
          {["Royal Grammar - School", "Tips - College", "Government College - University"].map(
            (title, i) => (
              <div
                key={i}
                className="card journey-card animate__animated animate__fadeInUp mb-4"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <div className="card-body text-start">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Modi ipsum soluta vero iusto. Explicabo quis aut deserunt
                    modi totam possimus.
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Experience Section */}
        <div className="col-md-6 mb-4">
          <h4 className="mb-4">Experience</h4>
          {["Edify - Company", "Career - Company", "Naxape - Company"].map(
            (title, i) => (
              <div
                key={i}
                className="card journey-card animate__animated animate__fadeInDown mb-4"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <div className="card-body text-start">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Modi ipsum soluta vero iusto. Explicabo quis aut deserunt
                    modi totam possimus.
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Journey;
