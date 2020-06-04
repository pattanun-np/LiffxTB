import React from "react";

function Terms() {
  return (
    <div>
      <div className="media">
        <div className="media-content">
          <tag
            className="tag is-success is-rounded"
            style={{
              fontFamily: "Kanit",
              fontSize: "14px",
              margin: "8px",
              color: "color",
            }}
          >
            <i class="fas fa-book"></i>
            <span style={{ marginLeft: "10px" }}>คำนิยาม</span>
          </tag>

          <p
            style={{
              fontFamily: "Kanit",
              backgroundColor: "rgba(250,250,250,1)",
              fontSize: "12px",
              padding: "15px",
              color: "grey",
            }}
          >
            แบบคัดกรองวัณโรคปอด ในเว็บแอปพลิเคชัน บอทน้อยดิจิตอลด๊อกเตอร์
            พัฒนาโดยสำนักงานป้องกันควบคุมโรคที่ 9 จังหวัดนครราชสีมา
            เป็นเครื่องมือที่ใช้ในการคัดกรองเพื่อค้นหาวัณโรคปอดจากอาการสงสัย
            อ้างอิงมาจากคู่มือการคัดกรองเพื่อค้นหาวัณโรคและวัณโรคดื้อยาของกองวัณโรค
            กรมควบคุมโรค หากท่านทำแบบคัดกรองนี้แล้ว
            ผลระบุว่าเสี่ยงต่อการเป็นวัณโรคปอด
            โปรดป้องกันการแพร่กระจายเชื้อตามคำแนะนำและรีบไปพบแพทย์ทันทีเพื่อรับการตรวจอย่างละเอียดต่อไป
          </p>
        </div>
      </div>
      <div className="media">
        <div className="media-content">
          <tag
            className="tag is-danger is-rounded"
            style={{
              fontFamily: "Kanit",
              fontSize: "12px",
              margin: "8px",
              color: "color",
            }}
          >
            <i class="fas fa-info-circle"></i>
            <span style={{ marginLeft: "10px" }}> ข้อกำหนดการใช้งาน</span>
          </tag>

          <div
            style={{
              fontFamily: "Kanit",
              backgroundColor: "rgba(250,250,250,1)",
              fontSize: "12px",
              padding: "15px",
              color: "grey",
            }}
          >
            <ul>
              <li>
                <tag className="tag is-success is-rounded">1.</tag>
                <span style={{ marginLeft: "10px" }}>
                  {" "}
                  แบบคัดกรองวัณโรคปอดนี้จะทำการบันทึกข้อมูล เช่น เพศ อายุ
                  ของผู้ใช้งานแอปพลิเคชั่นไลน์
                  และผลการคัดกรองเพื่อประโยชน์ในการวิเคราะห์ข้อมูลต่อไป
                </span>
              </li>
              <li>
                <tag className="tag is-success is-rounded">2.</tag>
                <span style={{ marginLeft: "10px" }}>
                  ข้อมูลของท่านจะถูกเก็บเป็นความลับ
                  และใช้เพื่อการวิเคราะห์โดยไม่ระบุตัวตนของท่าน
                  ระบบจะจัดเก็บข้อมูลไว้เป็นระยะเวลาอย่างน้อย 2 ปี
                  เพื่อประโยชน์ในการตรวจสอบย้อนหลัง
                </span>
              </li>
              <li>
                <tag className="tag is-success is-rounded">3.</tag>
                <span style={{ marginLeft: "10px" }}>
                  {" "}
                  ข้อมูลของท่านจะถูกเก็บเป็นความลับ
                  และใช้เพื่อการวิเคราะห์โดยไม่ระบุตัวตนของท่าน
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Terms;
