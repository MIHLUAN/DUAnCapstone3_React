import React from 'react'

const FooterHome = () => {
  return (
    <div><footer className="footer">
  <div className="container">
    <div className=" top">
      <div className="row">
        <div className="col-md-4 col-sm-6 col-12">
          <h3>GET HELP</h3>
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Shopping</a></li>
            <li><a href="#">NIKEiD</a></li>
            <li><a href="#">Nike+</a></li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <h3>ORDERS</h3>
          <ul>
            <li><a href="#">Payment options</a></li>
            <li><a href="#">Shipping and delivery</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Nike+</a></li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <h3>REGISTER</h3>
          <ul>
            <li><a href="#">Create  ane account to manage everything you do with nike, from your shopping preferences to Nike+ activity                 </a></li>
            <li><a className="text-danger" href="#">Learn more</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className=" bottom">
      <div className=" row">
        <div className="col-md-4 col-sm-6 col-12">
          <h3>EMAIL SIGN UP</h3>
          <ul>
            <li><a href="#"> Be the first to know about new product and special offers.</a></li>
            <li><a className="text-danger" href="#">Sign up now</a></li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <h3>GIFT CARDS</h3>
          <ul>
            <li><a href="#">Give the gift that always fits</a></li>
            <li><a className="text-danger" href="#">View cards</a></li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <h3>STORES NEAR YOU</h3>
          <ul>
            <li><a href="#">Locate a Nike retail store or authorized retailer</a></li>
            <li><a className="text-danger" href="#">Search</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
</div>
  )
}

export default FooterHome