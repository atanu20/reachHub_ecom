import React from 'react'
import './CardList.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
const CardList = () => {
  return (
    <>
    <div className="card_list">
        <div className="filter_box mb-4">
                <div>
                <select name="filter" >
  <option value="" selected hidden>Headphones Type</option>
  <option value="">Wired</option>
  <option value="">Wireless</option>
  <option value="">Bluetooth</option>
</select>
<select name="filter" >
  <option value="" selected hidden>Price</option>
  <option value="">Wired</option>
  <option value="">Wireless</option>
  <option value="">Bluetooth</option>
</select>

<select name="filter" >
  <option value="" selected hidden>Review</option>
  <option value="">Wired</option>
  <option value="">Wireless</option>
  <option value="">Bluetooth</option>
</select>

<select name="filter" >
  <option value="" selected hidden>Color</option>
  <option value="">Wired</option>
  <option value="">Wireless</option>
  <option value="">Bluetooth</option>
</select>

<select name="filter" >
  <option value="" selected hidden>Material</option>
  <option value="">Wired</option>
  <option value="">Wireless</option>
  <option value="">Bluetooth</option>
</select>
<select name="filter" >
  <option value="" selected hidden>Offer</option>
  <option value="">Wir</option>
  <option value="">Wir</option>
  <option value="">Blu</option>
</select>
<button className='btn-filter'>Filter &nbsp; <i class="fa fa-sliders" aria-hidden="true"></i>
</button>
                </div>

                <select name="filter" >
  <option value="" selected hidden>Sort</option>
  <option value="">Wir</option>
  <option value="">Wir</option>
  <option value="">Blu</option>
</select>

        </div>
        <h3>Headphones For you!</h3>
        <div className="card_flex mt-4">
           {
            [1,2,2,6,4,,9,9,41].map((val,ind)=>{
                return(
                    <>
                    
                    
                    <div className="card_item">
                <NavLink to="/product/123" className="img_div">
                    <img src="https://i.pinimg.com/originals/d9/db/11/d9db11953a2d185d37246bb1f500c957.png" alt="" />
                   
                </NavLink>

                <div className="love_icon">
                    <i className='fa fa-heart-o'></i>
                </div>
                <div className="p-2 text_item">
                <div className="text_flex ">
                    <NavLink to="/product/123"><p className='m-0 fn_18'><b>Lorem ipsum dolor .</b></p></NavLink>
                    <NavLink to="/product/123"><p className='m-0 '>₹450</p></NavLink>
                </div>
                <NavLink to="/product/123"><p className='m-0 fn_14 card_p'>Lorem ipsum dolor sit amet contetur, adipisicing elit. Voluptatibus, tempora?</p></NavLink>
                <div className="rate_flex">
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                     &nbsp; <small>(123)</small>
                </div>
                <div className="text-left mt-3">
                <button className='btn btn-primary'>Add To Cart</button>
                </div>
                </div>
                
                
            </div>
                    </>
                )
            })
           }
        </div>
    </div>
    
    
    </>
  )
}

export default CardList