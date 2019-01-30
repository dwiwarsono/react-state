import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          namaProduk: 'Iphone 6 Plus',
          harga: '15.000.000',
          img: "https://cdn.ndtv.com/tech/images/gadgets/iphone5-vs-4S-new.jpg",
          status: true
        },
        {
          id: 2,
          namaProduk: 'Samsung j7',
          harga: '12.000.000',
          img: "https://i.gadgets360cdn.com/products/large/1526892165_635_Samsung_Galaxy_J6.jpg",
          status: false
        },
        {
          id: 3,
          namaProduk: 'Oppo Smart',
          harga: '10.000.000',
          img: "https://i.gadgets360cdn.com/products/large/1530947258_635_oppo_a5.jpg",
          status: true
        },
      ],
      isActive: true
    }
  }


  /* SAAT TOMBOL ACTIVE DI CLIK*/
  _handleSetState = () => {
    // if (this.state.isActive === true ) { // JIKA state isActive SAMA DENGAN TRUE
    //   this.setState({ // SET STATE isActive MENJADI false
    //     isActive : false
    //   })
    // } else { // MAKA SEBALIKNYA CEK JIKA isActive TIDAK SAMA DENGAN TRUE
    //   this.setState({ // SET STATE isActive MENJADI true
    //     isActive : true
    //   })
    // } 
    // CODINGAN DI ATAS BISA DI SINGKAT MENJADI SEPERTI INI
    this.setState({ //SET isActive MENJADI TIDAK SAMA NILAI NYA DENGAN STATE isActive
      isActive : !this.state.isActive
    });
  }


  render() {
    const elements = this.state.products.map((barang, index) => { // BARANG ADALAH VALUE, INDEX ADALAH INDEX ARRAY NYA
      let result = '';
      if (barang.status) {
        result = 
        <tr key={index}>
          <td>{index}</td>
          <td>{barang.namaProduk}</td>
          <td>
            <span className="label label-success">Rp. {barang.harga}</span>
          </td>
        </tr>
      }
      return result;
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">Materi STATE</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="row">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nama Produk</th>
                    <th>Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {elements}
                </tbody>
              </table>
              <button type="button" className="btn btn-warning" onClick={ this._handleSetState }>
                Active : { this.state.isActive === true ? 'true' : 'false'} {/* JIKA isActive sama dengan true maka cetak true, sebaliknya cetak false */}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
