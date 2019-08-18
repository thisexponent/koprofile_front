import React, {Fragment} from "react";
import {Query} from "react-apollo"
import USER from "./Queries"


const Profile = () => (<Query query={USER}>
  {({loading, data, error}) => {
    if(loading) return (<div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>);
    if(error) return <span>something went wrong.</span>;
    if(data){
      return (
          <div className={"container d-flex justify-content-center"}>
            <div className={"card bg-light"}>
              <div className={"row no-gutters"}>
                <div className="col-md-4 d-flex align-items-center">
                  <img src={data.user.photo} className="card-img" alt={data.user.name} style={{height: "100%"}}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">👤{data.user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">✉️{data.user.email}</h6>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-light"><b>생년월일 </b>{data.user.birth}</li>
                    <li className="list-group-item list-group-item-light"><b>주소 </b>{data.user.address}</li>
                    <li className="list-group-item list-group-item-light"><b>전화번호 </b>{data.user.phone}</li>
                    <li className="list-group-item list-group-item-light"><b>비밀번호 </b>{data.user.password}</li>
                    <li className="list-group-item list-group-item-light"><b>성별 </b>{data.user.gender === "female"? "여":"남"}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      )
    }
  }}
</Query>)

export default Profile