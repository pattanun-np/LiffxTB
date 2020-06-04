import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Terms from "../component/Terms";
function getSteps() {
  return ["เริ่มต้น", "ข้อ 1", "ข้อ 2", "ข้อ 3", "ข้อ 4", "ข้อ 5", "ข้อ 6"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Terms />;
    case 1:
      return "1";
    case 2:
      return "2";
    case 3:
      return "3";
    case 4:
      return "4";
    case 5:
      return "5";
    case 6:
      return "6";
    default:
      return "Unknown step";
  }
}

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="columns is-mobile">
      <div className="column">
        <div
          className="card"
          style={{
            margin: "5px",
            borderRadius: 20,
            paddingBottom: 20,
            fontFamily: "Kanit",
            transitionDelay: "2s",
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
            }}
          >
            <tag
              className="tag is-info is-large is-rounded"
              style={{ alignItems: "center" }}
            >
              <i className="far fa-file-alt"></i>
              <h1
                className="subtitle"
                style={{ marginLeft: "10px", fontSize: "12px", color: "white" }}
              >
                แบบคัดกรองวัณโรคปอด
              </h1>
            </tag>
            <div>
              <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <div>All steps completed - you&apos;re finished</div>

                    <div
                      className="media"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <div className="media-left">
                        {/* btn_start */}

                        <button
                          style={{
                            fontFamily: "Kanit",
                            color: "white",
                            hight: "10px",
                            width: "100px",
                          }}
                          className="button-clear"
                          onClick={handleReset}
                        >
                          <i className="fas fa-trash-alt"></i>
                          <span
                            style={{
                              hight: "50px",
                              width: "50px",
                              marginLeft: "10px",
                            }}
                          >
                            ล้างคำตอบ
                          </span>
                        </button>

                        <button
                          style={{
                            fontFamily: "Kanit",
                            color: "white",
                            marginLeft: "10px",
                            hight: "10px",
                            width: "100px",
                          }}
                          className="button-send"
                        >
                          <span
                            style={{
                              hight: "50px",
                              width: "50px",
                              marginRight: "10px",
                            }}
                          >
                            ส่งคำตอบ
                          </span>
                          <i className="fas fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {getStepContent(activeStep)}

                    <div
                      className="media"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <div className="media-left">
                        {/* btn_start */}

                        <button
                          style={{
                            fontFamily: "Kanit",
                            color: "white",
                            hight: "10px",
                            width: "100px",
                          }}
                          className="button-sub"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                        >
                          <i className="fas fa-angle-left"></i>
                          <span
                            style={{
                              hight: "50px",
                              width: "50px",
                              marginLeft: "10px",
                            }}
                          >
                            ย้อนกลับ
                          </span>
                        </button>
                      </div>

                      <div className="media-right">
                        {/* btn_start */}

                        <button
                          style={{
                            fontFamily: "Kanit",
                            color: "white",
                            hight: "10px",
                            width: "100px",
                          }}
                          className="button-his"
                          onClick={handleNext}
                        >
                          <span
                            style={{
                              hight: "50px",
                              width: "50px",
                              marginRight: "10px",
                            }}
                          >
                            {activeStep === steps.length - 1 ? "จบ" : "ต่อไป"}
                          </span>
                          <i class="fas fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
