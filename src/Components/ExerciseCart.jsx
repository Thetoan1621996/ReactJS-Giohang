import React, { Component } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'


const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

export default class ExerciseCart extends Component {

    state ={
        gioHang:[]}

    // Hàm thêm giỏ hàng
    themGioHang = (sanPhamClick)=>{
       
        // tạo ra sản phẩm giỏ hàng từ sản phẩm được chọn
        let spGH = {
            maSP: sanPhamClick.maSP,
            tenSP:sanPhamClick.tenSP,
            giaBan:sanPhamClick.giaBan,
            hinhAnh:sanPhamClick.hinhAnh,
            soLuong:1
        }
         // kiểm tra spGH có trong giỏ hàng chưa
         let gioHangCN = [...this.state.gioHang]
         let index = gioHangCN.findIndex(sp => sp.maSP === spGH.maSP)
         if(index != -1){
            // nếu đã có trong giohangCN rồi thì tăng số lượng
            gioHangCN[index].soLuong +=1;
         }else{
            // chưa có thì thêm vào mảng
            gioHangCN.push(spGH)
         }

         // Set stage để component render lại
        this.setState({
            gioHang:gioHangCN
        })
    }

    // Hàm xóa giỏ hàng
    xoaGioHang = (maSP)=>{
        // Tìm trong giỏ hàng có sản phẩm chứa maSP được click thì xóa
        let gioHangCN = [...this.state.gioHang];
        let index = gioHangCN.findIndex(sp => sp.maSP === maSP);
        if(index !== -1){
            gioHangCN.splice(index,1)
        }
        // cập nhật lại state
        this.setState({
            gioHang:gioHangCN
        })

    }

    // Hàm tăng giảm số lượng

    tangGiamSoLuong = (maSP,tangGiam) =>{
        let gioHangCN = [...this.state.gioHang];
        let index = gioHangCN.findIndex(sp => sp.maSP === maSP);
        if(tangGiam){
            gioHangCN[index].soLuong += 1
        }else{
            if(gioHangCN[index].soLuong > 1){
                gioHangCN[index].soLuong -= 1
            }
        }
        // Set state lại để cập nhật và render lại giỏ hàng
        this.setState({
            gioHang:gioHangCN
        })
    }

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl,spGH,index)=>{
        return tsl += spGH.soLuong
    },0)
    return (
      <div>
        <h2 className="text-center mb-5 text-success">Bài tập giỏ hàng</h2>
        <div className="text-center">
            <button className='btn btn-danger mb-3' style={{fontSize:20,cursor:'pointer'}} data-bs-toggle="modal" data-bs-target="#modalId">Giỏ hàng ({tongSoLuong})</button>
        </div>
        <Cart gioHang = {this.state.gioHang} xoaGioHang = {this.xoaGioHang} tangGiamSoLuong = {this.tangGiamSoLuong}/>
        <ProductList data ={data} themGioHang={this.themGioHang}/>
      </div>
    )
  }
}
