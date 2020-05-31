import React from "react";
import "./styles/Nav.css";

function Nav(props) {
  // const [info, setinfo] = useState(null);

  return (
    <div className="Nav" style={{ padding: "10px" }}>
      <article className="media">
        <figure className="media-left">
          <figure className="image is-32x32" style={{ padding: "2px" }}>
            <img alt="img" className="is-rounded" src={props.photo} />
          </figure>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name}</strong>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
export default Nav;
