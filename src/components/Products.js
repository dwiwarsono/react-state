import React from 'react'

class Products extends React.Component {
  render() {
    const {itemData} = this.props;
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="thumbnail">
          <img alt={itemData.namaProduk} src={itemData.img}/>
          <div className="caption">
            <h3>{itemData.namaProduk}</h3>
            <p>Rp. {itemData.harga}</p>
          </div>
          <button type="button" className="btn btn-success">Tambah Keranjang</button>
        </div>
      </div>
      </div>
    )
  }
}

export default Products;