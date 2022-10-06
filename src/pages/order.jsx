import React from 'react'
import NavBelfast from '../components/NavBelfast'
import Order from '../components/Order'
import Footer from "../components/Footer";
const OrderPage = () => {
  return (
    <div style={{backgroundColor: "#e64752"}}>
    <NavBelfast />
    <Order/>
    <Footer />
    </div>
  )
}

export default OrderPage