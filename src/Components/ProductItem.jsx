import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { data,themGioHang } = this.props;
    return (
      <div className="row">
        {data.map((prod, index) => {
          return (
            <div className="col-4" key={index}>
                <div className="card">
                <img src={prod.hinhAnh} height={400}/>
              <div className="card-body">
                <h4>{prod.tenSP}</h4>
                <p>{prod.giaBan.toLocaleString()} VND</p>
                <button className="btn btn-danger" onClick={()=>{
                    themGioHang(prod)
                }}>Thêm vào giỏ hàng</button>
                </div> 
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
