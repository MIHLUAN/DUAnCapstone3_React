import React from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { ACCESS_TOKEN, removeStore, USER_LOGIN } from '../../util/config';
const HeaderHome = () => {
  const {userLogin} = useSelector(state => state.userReducer);
  const renderLoginButton = () => {
    
    if(userLogin) {
        return <>
            <NavLink to="/profile" className="nav-link mx-3 text-white">Hello ! {userLogin.email}</NavLink>
            <span style={{cursor:'pointer',paddingRight:'15px'}} className="text-white" onClick={()=>{
                removeStore(ACCESS_TOKEN);
                removeStore(USER_LOGIN);
                //clear hết tất cả biến trên redux
                window.location.reload();//f5 reload lại trang
            }}>Logout</span>
        </>
    }
    return <><NavLink to="/login" className="nav-link mx-0 text-white">Login</NavLink>
    <NavLink to="/register" className="nav-link mx-3 text-white">Register</NavLink>
    </>
}
  return (
    <div> <header className="header">
  <div className="nav navbar container">
    <div className="logo">
      <img src="./img/image 3.png" alt />
    </div>
    <div className="menu">
      <ul className="nav">
        <li>
          
        </li>
        <li> <form className="d-flex my-2 my-lg-0">
        <NavLink to="/search" className={"text-white"} style={{fontSize:'25px'}}><i className='fa fa-search' ></i> Search</NavLink>

        <NavLink to="/carts" className={"text-white"}><i className='fa fa-cart-plus' style={{fontSize:'25px'}}></i></NavLink>
        {renderLoginButton()}
    </form></li>
     
      </ul>
    </div>
  </div>
</header>
<div className="menu_1">
  <ul className="nav">
    <li><NavLink to="/" className="active">Home</NavLink></li>
    <li><a href="#">Men</a></li>
    <li><a href="#">Woman</a></li>
    <li><a href="#">Kid</a></li>
    <li><a href="#">Sport</a></li>
  </ul>
</div>
</div>
  )
}

export default HeaderHome