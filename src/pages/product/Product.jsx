import React, { useState } from 'react'
import './Product.css'
import { path, prodDet } from '../../data/fdata'
import { useEffect } from 'react'
const Product = () => {
  const [colorStatus,setColorStatus]=useState('pink')
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
    
    <div className="hero">
    <div className="hero_in">
        <p className='m-0'>Electronics / Audio / Headphones / Shop Headphones by type / <b>airpods-max</b> </p>

        <div className="row mt-3">
            {
              prodDet?.map((val,ind)=>{
                return(
                  <>
                  
                  
                  <div className="col-lg-6 col-md-6 col-12 mb-3">
                <div className="card_img_box">
                        <img src={`${path}/image/product/airpods-max-select-${colorStatus}-202011.png`} alt="" />
                </div>
                <div className="card_flex_img mt-3">
                            
                            {
                              val.products.map((va,ins)=>{
                                return(
                                  <>
                                  <div className="card_sml_img_item">
                                <img src={va.url} alt="" onClick={()=>setColorStatus(va.color)} />
                            </div>
                                  </>
                                )
                              })
                            }
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <h2>{val.title}</h2>
              <p className='m-0'>{val.describe}</p>
              <div className="rate_flex">
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                     &nbsp; <small>(123)</small>
                </div>
                <hr />
                <h2>{val.price}</h2>
                <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, hic!</p>
                <hr />
                <h4>Choose a color</h4>
                <div className="color_flex">
                  {/* <div className="color_item activer">
                    <img src={`${path}/image/product/finish-green-202011.png`} alt="" />
                  </div> */}
                 
                  {
                    val.products.map((va,ins)=>{
return(
  <>
  
  <div className={va.color== colorStatus ? "color_item activer":"color_item"}  onClick={()=>setColorStatus(va.color)}>
                    <img src={va.colorimg} alt=""  />
                  </div>
  </>
)
                    })
                  }
                </div>
                <hr />
                <div className="addto_flex">
                  <div className="form_add mr-3">
                    <button><i class='bx bx-minus'></i></button>
                    <input type="text" value="1" />
                    <button><i class='bx bx-plus'></i></button>
                  </div>
                  <p className='m-0'>only <span>15 items</span>  left <br /> Don't Miss it</p>
                </div>
                <div className="mt-3 row ml-2">
                <button className='btn btn-primary mr-1 btn_w btn_bg' >Buy Now</button>
                <button className='btn btn-primary ml-1 btn_w'>Add to Cart</button>

                 
                </div>
               <div className="card_bo mt-5">
                  <div>
                    <p className='m-0'><b><span className='textpink'><i class="fa fa-truck" aria-hidden="true"></i> &nbsp;
</span>Free Delivery</b></p>
          <p className='m-0 fn_14 ml-4' style={{textDecoration:'underline'}}> Enter Your Pincode for delivery availiability</p>
                  </div>
                  <hr />
                  <div>
                    <p className='m-0'><b><span className='textpink'><i class="fa fa-calendar-o" aria-hidden="true"></i> &nbsp;
</span>Return Delivery</b></p>
          <p className='m-0 fn_14 ml-4' style={{textDecoration:'underline'}}> Free 30 Days Delivery return</p>
                  </div>
               </div>

            </div>
                  
                  </>
                )
              })
            }
        </div>

    </div>
    </div>
    
    </>
  )
}

export default Product