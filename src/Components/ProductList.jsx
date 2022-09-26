import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { data,themGioHang } = this.props;
    return (
      <div className="container">
        <div>
          <ProductItem data={data} themGioHang={themGioHang}/>
        </div>
      </div>
    );
  }
}
