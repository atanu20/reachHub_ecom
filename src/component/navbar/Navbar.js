import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Header from './Header'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { path } from '../../data/fdata'
const Navbar = () => {
 const [showSearch,setShowSearch]= useState(false)
 const [ opensearch,setOpenSearch]= useState(false)



 function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

  return (
    <>
    <div className="navbar_item">
    <Header/>
    <div id="mySidenav" class="sidenav">
      <div className="side_login">
        <div className="side_card">
          <img src={`${path}/image/user.png`} alt="" />
          <div className='ml-2'>
            <small className='m-0'>Hello,</small>
            <h5>Demo User</h5>
          </div>
        </div>
      </div>

  <p class="m-0 closebtn " onClick={closeNav}>&times;</p>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/">All Category</NavLink>
  <NavLink to="/">Deals</NavLink>
  <NavLink to="/">What's New</NavLink>
  <NavLink to="/">Delivery</NavLink>
</div>
    <div className="whole_nav">
      <div className="inn_nav">
        <div className="left_nav">
          <i className='mob_bar fa fa-bars' onClick={openNav}></i>
          <NavLink to="/">ShopCart</NavLink>
        </div>
        <div className="center_nav">
          <div className="manu_item">
              <ul>
                
                <li class="menu-item-has-children" ><NavLink to="/">Category</NavLink>
                <div class="sub-menu mega-menu mega-menu-column-4">
 								<div className="flex_item">
                 <div class="list-item ">
 									<NavLink to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3UkAeqQWSlD4LgzYbtoP66NJgdluDudoTLaN9CS-LhYLg0QFpCyjUGVz1kzPjmcjZTc&usqp=CAU" alt="" /></NavLink>
                  <div>
                    <NavLink to="/">
                    <p className='m-0'>Wired Bluetooth Headphones</p>
                    
                    </NavLink>
                  </div>
 								</div>

                 <div class="list-item ">
 									<NavLink to="/"><img src="https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/j/k/predator-xo1-gaming-earbuds-with-50h-playtime-13mm-drivers-40ms-original-imagrcfvgzjffkjd.jpeg?q=70" alt="" /></NavLink>
                  <div>
                    <NavLink to="/">
                    <p className='m-0'>Wireless Bluetooth Headphones</p>
                    
                    </NavLink>
                  </div>
 								</div>

                 <div class="list-item ">
 									<NavLink to="/"><img src="https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_IN?$jpglarge$&wid=1250" alt="" /></NavLink>
                  <div>
                    <NavLink to="/">
                    <p className='m-0'>Wired Headphone</p>
                    
                    </NavLink>
                  </div>
 								</div>
                 <div class="list-item ">
                
 									<NavLink to="/"><img src=" https://img3.gadgetsnow.com/gd/images/products/additional/small/G449754_View_1/accessories/headphones-headsets/boat-airdopes-138-bluetooth-v5-0-in-ear-truly-wireless-earbuds-with-mic-viper-green-.jpg" alt="" /></NavLink>
                  <div>
                    <NavLink to="/">
                    <p className='m-0'>Airdopes</p>
                    
                    </NavLink>
                  </div>
 								</div>
                 <div class="list-item ">
 									<NavLink to="/"><img src="https://cdn.lowestrate.in/20220628104650/61-BZvhNE8L._SL1500_.jpg" alt="" /></NavLink>
                  <div>
                    <NavLink to="/">
                    <p className='m-0'>Wired Headphone</p>
                    
                    </NavLink>
                  </div>
 								</div>
                 <div class="list-item ">
 									<NavLink to="/"><img src="https://cdn.lowestrate.in/20220628104650/61-BZvhNE8L._SL1500_.jpg" alt="" /></NavLink>
                  <div>
                    <NavLink to="/">
                    <p className='m-0'>Wired Headphone</p>
                    
                    </NavLink>
                  </div>
 								</div>
                
                </div>
 							
 							</div>
               
                </li>
                <li><NavLink to="/">Deals</NavLink></li>
                <li class="menu-item-has-children"><NavLink to="/">What's New</NavLink>
                
                <div class="sub-menu mega-menu mega-menu-column-4">
 								<div className="flex_item">
                 {
                  [,1,2,3,5,,4,5,6,8].map((val,ind)=>{
                    return(
                      <>
                      
                      <div class="list-item ">
 									<NavLink to="/"><img src="https://www.dealsplant.com/cdn/shop/products/boat-wireless-headphone-fiery-red-boat-rockerz-370-wireless-headphone-with-bluetooth-5-0-28105758703691_130x.jpg" alt="" /></NavLink>
                  <div>
                    <NavLink to="/">
                    <p className='m-0'>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>₹ 150</h5>
                    </NavLink>
                  </div>
 								</div>
                      </>
                    )
                  })
                 }
                
                </div>
 							
 							</div>
                
                </li>
                <li class="menu-item-has-children"><NavLink to="/">Delivery </NavLink>
                
                <div class="sub-menu single-column-menu">
 								<ul>
 									<li><NavLink to="/">Standard Layout</NavLink></li>
 									<li><NavLink to="/">Grid Layout</NavLink></li>
 									<li><NavLink to="/">single Post Layout</NavLink></li>
 								</ul>
 							</div>  
                </li>



              </ul>
          </div>
          <div className="searchbox">
          <div className="search_bar">
          <form action="">
      <input type="text" placeholder="Search..." name="search" required />
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
{
  showSearch && <div className='search_item'></div>
}
    
          </div>
          </div>
        </div>
        <div className="right_nav">
          <p className='m-0 mob_p cur' onClick={()=>setOpenSearch(true)} ><i className='fa fa-search'></i></p>
        <div class="dropdown">

  <NavLink to="/" class="dropbtn"><i className='fa fa-user-o'></i> &nbsp; <span> Account</span> </NavLink>
  <div class="dropdown-content">
   <NavLink to="/">Account</NavLink>
   <NavLink to="/">Orders</NavLink>
   <NavLink to="/">Wishlist</NavLink>
   <NavLink to="/">Logout</NavLink>



  </div>
</div>
           
           
            <NavLink to="/" className="cart_rel"><i class='bx bx-cart-alt' ></i> &nbsp; <span>Cart</span> <div className='cart_box'>1</div> </NavLink>
        </div>
      </div>
    </div>

{
  opensearch && <><div className="search_mob">
  <div className="cross_div" onClick={()=>setOpenSearch(false)}>
    &times;
  </div>
  <form className='seach_mob_box'>
      <input type="text" placeholder="Search..." name="search" required />
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>

    {
  
}
  
</div>
{
  showSearch && <>
<div className='search_item_main_mob'>

<div className='search_item_mob'></div>
</div>

  </>
}
</>
}
    </div>



    
    </>
  )
}

export default Navbar