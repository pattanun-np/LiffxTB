import React from "react";
import useLiff from "./component/liff_hook";
import Nav from "./component/Navbar";
import "./component/styles/button.css";
import "./component/styles/checkbox.css";
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
            hight: "350px",
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
              <tag
                className="tag is-success"
                style={{
                  fontFamily: "Kanit",
                  fontSize: "14px",
                  margin: "8px",
                  color: "color",
                }}
              >
                คำนิยาม
              </tag>
              <span style={{ fontFamily: "Kanit", fontWeight: "bold" }}>
                แบบคัดกรองวัณโรคปอด
              </span>
              <p
                className="title"
                style={{
                  fontFamily: "Kanit",
                  backgroundColor: "rgba(250,250,250.1)",
                  fontSize: "14px",
                  padding: "15px",
                  color: "grey",
                }}
              >
                ในเว็บแอปพลิเคชัน <span></span> บอทน้อยดิจิตอลด๊อกเตอร์
                พัฒนาโดยสำนักงานป้องกันควบคุมโรคที่ 9 จังหวัดนครราชสีมา
                เป็นเครื่องมือที่ใช้ในการคัดกรองเพื่อค้นหาวัณโรคปอดจากอาการสงสัย
                อ้างอิงมาจากคู่มือการคัดกรองเพื่อค้นหาวัณโรคและวัณโรคดื้อยาของสำนักวัณโรค
                กรมควบคุมโรค หากท่านทำแบบคัดกรองนี้แล้ว
                ผลระบุว่าเสี่ยงต่อการเป็นวัณโรค
                โปรดป้องกันการแพร่กระจายเชื้อตามคำแนะนำและรีบไปพบแพทย์ทันทีเพื่อรับการตรวจอย่างละเอียดต่อไป
              </p>
            </div>
          </div>
          <div className="level">
            <div className="level-item has-text-centered">
              {/* btn_start */}
              <div className="media">
                <div className="media-left" style={{ paddingLeft: "10px" }}>
                  <label className="checkbox">
                    <input type="checkbox2" />
                    <span
                      style={{
                        marginLeft: "5px",
                        fontFamily: "Kanit",
                        fontSize: "10px",
                      }}
                    >
                      ยอมรับข้อกำหนดการใช้งาน
                    </span>

                    <a
                      href="#"
                      style={{
                        marginLeft: "5px",
                        fontFamily: "Kanit",
                        fontSize: "10px",
                      }}
                    >
                      คำนิยาม และ ข้อกำหนดการใช้งาน
                    </a>
                  </label>
                </div>
              </div>
              <div
                className="media"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <div className="media-content">
                  <button
                    style={{
                      fontFamily: "Kanit",
                      color: "white",
                      marginTop: "40px",
                      marginBottom: "5px",
                    }}
                    className="button-sub"
                  >
                    <i class="far fa-file-alt"></i>
                    <span
                      style={{
                        hight: "16px",
                        width: "15px",
                        marginLeft: "10px",
                      }}
                    >
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
