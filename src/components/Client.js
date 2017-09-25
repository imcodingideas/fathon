import React, { Component } from 'react'
import '../assets/css/home.css'
import Header from './Header'
import SellerInfo from './SellerInfo'
import ClientTable from './ClientTable'

class Client extends Component {
  render () {
    return (
      <div className='App'>
        <Header selected='client' />
        <div className="row">
          <div className="col s6">
            <SellerInfo />
          </div>
          <div className="col s6"></div>
        </div>

        <div className="row">
          <div className="col s12">
            <ClientTable />
          </div>
        </div>
      </div>
    )
  }
}

export default Client
