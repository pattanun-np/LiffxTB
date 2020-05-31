import React from "react";
import useLiff from "./component/liff_hook";
import Nav from "./component/Navbar";
import "./component/styles/button.css";

const liffId = "1654260546-VwqZxy4o";

function Form() {
  const { loading, error, profile } = useLiff({
    liffId,
  });

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="columns is-mobile">
      <div className="column">
        <div
          className="card"
          style={{
            marginTop: "5px",
            borderRadius: 20,
            paddingBottom: 10,
            hight: 400,
            width: "auto",
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
          <div className="media">
            <div className="media-content">
              <p
                style={{
                  fontFamily: "Kanit",
                  padding: "10px",
                }}
              >
                กำลังพัฒนา....
              </p>
            </div>
          </div>
          <div className="level">
            <div className="level-item has-text-centered">
              {/* btn_start */}
              <div className="media">
                <div className="media-content">
                  <button
                    style={{
                      fontFamily: "Kanit",
                      color: "white",
                      marginTop: "210px",
                      marginBottom: "5px",
                    }}
                    className="button-sub"
                  >
                    <i class="far fa-file-alt"></i>
                    <span style={{ marginLeft: "10px" }}>
                      เริ่มตอบแบบคัดกรอง
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
