import React from "react";
import useLiff from "./component/liff_hook";
import Nav from "./component/Navbar";
import "./component/styles/button.css";
import "./component/styles/checkbox.css";
import useModal from "./component/useModal";
import * as loadingData from "./component/Loading/data.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

// liffId
const liffId = "1654260546-VwqZxy4o";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Form() {
  const { loading, profile } = useLiff({
    liffId,
  });

  if (loading) {
    return (
      <FadeIn>
        <div style={{ display: "flex" }}>
          <Lottie options={defaultOptions} height={140} width={140} />
        </div>
      </FadeIn>
    );
  }

  return (
    <div className="columns is-mobile">
      <div className="column">
        <div
          className="card"
          style={{
            marginTop: "25px",
            borderRadius: 20,
            paddingBottom: 20,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {profile && (
            <Nav name={profile.displayName} photo={profile.pictureUrl} />
          )}
          {/* header image */}
          <figure className="image">
            <img
              src="https://res.cloudinary.com/image-chatbot/image/upload/v1585380833/images/akbapvlluoydgmloh1ds.png"
              alt="banner"
              style={{ borderRadius: "10px" }}
            />
          </figure>
          {/* <Terms /> */}

          <div className="level">
            <div className="level-left">
              {/* btn_start */}

              <div
                style={{
                  display: "flex",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                <div>
                  <button
                    style={{
                      fontFamily: "Kanit",
                      color: "white",
                      hight: "10px",
                      width: "320px",
                      marginTop: "100px",
                      marginBottom: "5px",
                    }}
                    className="button-sub"
                  >
                    <i className="far fa-file-alt"></i>
                    <span
                      style={{
                        hight: "50px",
                        width: "50px",
                        marginLeft: "10px",
                      }}
                    >
                      เริ่มตอบแบบคัดกรอง
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="level-left">
              {/* btn_start */}

              <div
                style={{
                  display: "flex",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                <div>
                  <button
                    style={{
                      fontFamily: "Kanit",
                      color: "white",
                      hight: "10px",
                      width: "320px",
                      marginTop: "50px",
                      marginBottom: "5px",
                    }}
                    className="button-his"
                  >
                    <i class="fas fa-history"></i>
                    <span
                      style={{
                        hight: "50px",
                        width: "50px",
                        marginLeft: "10px",
                      }}
                    >
                      ประวัติการคัดกรอง
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
