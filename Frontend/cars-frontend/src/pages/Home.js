import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
        const [cars,setCars]=useState([])
        useEffect(()=>{
        loadCars();
        },[]);

        const loadCars= async()=>{
        const  result= await axios.get("http://localhost:8080/cars");
        setCars(result.data);
        };

  return (
    <div className='container'>
        <div className='py-4'>

        <table className="table border  shadow">
  <thead className="table-dark">
  <tr>
      <th scope="col">#</th>
      <th scope="col">Brand</th>
      <th scope="col">Model</th> 
      <th scope="col">Color</th>
      <th scope="col">Checkout</th>
       
    </tr>
  </thead>
  <tbody className="table-light">
    {
        cars.map((car,index)=>(
        <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.color}</td>
            <td>
                <button className="btn btn-primary mx-2">View</button>
                <button className="btn btn-outline-primary mx-2">Edit</button>
                <button className="btn btn-success mx-2">Checkout</button>
            </td>
            
        </tr>
        ))
    }
  
    
  </tbody>
</table>


        </div>
    </div>
  )
}
