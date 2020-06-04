import React from "react";
import Terms from "../component/Terms";

function StepperForm() {
  return (
    <div className="columns is-mobile">
      <div className="column">
        <div
          className="card"
          style={{
            marginTop: "25px",
            borderRadius: 20,
            paddingBottom: 20,
            fontFamily: "Kanit",
            width: "100%",
            height: "100%",
            alignText: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "15px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <tag className="tag is-info is-large is-rounded">
              <i className="far fa-file-alt"></i>
              <h1
                className="subtitle"
                style={{ marginLeft: "10px", fontSize: "12px", color: "white" }}
              >
                แบบคัดกรองวัณโรคปอด
              </h1>
            </tag>

            <Terms />
          </div>
        </div>
      </div>
    </div>
  );
}
export default StepperForm;
