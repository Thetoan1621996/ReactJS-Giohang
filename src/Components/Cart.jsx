import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong} = this.props;
    return (
      <div>
        {/* Modal Body */}
        {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
          >
            <div className="modal-content" style={{ minWidth: "800px" }}>
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Mã sản phẩm</td>
                      <td>Hình ảnh</td>
                      <td>Tên sản phẩm</td>
                      <td>Số lượnng</td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((prodGH, index) => {
                      return (
                        <tr key={index}>
                          <td>{prodGH.maSP}</td>
                          <td>
                            <img src={prodGH.hinhAnh} width={50} height={50} />
                          </td>
                          <td>{prodGH.tenSP}</td>
                          <td>
                            <button
                              className="btn btn-primary mx-1"
                              onClick={() => {
                                tangGiamSoLuong(prodGH.maSP,false);
                              }}
                            >
                              -
                            </button>{" "}
                            {prodGH.soLuong}
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => {
                                tangGiamSoLuong(prodGH.maSP,true);
                              }}
                            >
                              +
                            </button>{" "}
                          </td>
                          <td>{prodGH.giaBan.toLocaleString()}</td>
                          <td>{(prodGH.soLuong * prodGH.giaBan).toLocaleString()}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                xoaGioHang(prodGH.maSP);
                              }}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                        <td colSpan={5}></td>
                        <td>Tổng thanh toán: </td>
                        <td>{gioHang.reduce((tongTien,spGH,index)=>{
                            return tongTien += spGH.soLuong * spGH.giaBan
                        },0).toLocaleString()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
                <button type="button" className="btn btn-primary">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
