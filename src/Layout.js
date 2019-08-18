import React from "react";

const refresh = (e) => {
  window.parent.location = window.parent.location.href;
}
const Layout = () => (
    <div className="jumbotron">
      <h3 className="display-5">한국어 랜덤 유저 프로필</h3>
      <p className="lead">변수 이름만 고민하자! 😛</p>
      <hr/>
        <p>A free, open-source API for generating random user data in Korean.</p>
        <button className="btn btn-primary btn-lg" onClick={refresh} role="button">Refresh</button>
    </div>
)

export default Layout