import React from 'react'
import NavList from './NavList'
const Style = {
    fontSize:"1.5rem",
    fontWeight:"bold",
    color:"cyan",
    marginTop:"10%"
}

const SideNavbar = () => {
  return (
    <>
      <div className='navbar'>
        <nav>
            <ul>
               <li style={Style} sectionId="register">Registration</li>
               <NavList btnVal="Sign Up" sectionId="signup"/>
               <NavList btnVal="Confirm Email" sectionId="confirmemail"/>
               <NavList btnVal="Sign in" sectionId="signin"/>

               <li style={Style} sectionId="products">Products</li>
               <NavList btnVal="Create Product" sectionId="createproduct"/>
               <NavList btnVal="Get All Products" sectionId="getallpro"/>
               {/* <NavList btnVal="Get a Single Products" sectionId="getpro"/> */}
               <NavList btnVal="Products By Category" sectionId="bycat"/>
               <NavList btnVal="Product's Category" sectionId="category"/>
               <NavList btnVal="Update Product" sectionId="updpro"/>
               <NavList btnVal="Delete Product" sectionId="dltpro"/>

               <li style={Style} sectionId="carts">Carts</li> 
               <NavList btnVal="Create Cart" sectionId="createcart"/>
               <NavList btnVal="Get a Single Cart" sectionId="getcart"/>
               <NavList btnVal="Get All Carts" sectionId="getcarts"/>
               <NavList btnVal="Update Cart" sectionId="updcart"/>
               <NavList btnVal="Delete Cart" sectionId="dltcart"/>

            </ul>
        </nav>
      </div>
    </>
  )
}

export default SideNavbar
