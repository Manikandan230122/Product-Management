import React, { useEffect, useState } from "react";
import ProductService from '../Service/ProductService'
import { Link } from "react-router-dom";

const Home = () => {

  const [productList,setproductList]=useState([]);
  const[Msg,setMsg]=useState("")
  useEffect(()=>{
    ProductService.getAllProduct().then((res)=>{
      setproductList(res.data)
    }).catch((error)=>{
      console.log(error);
    })
},[])

const deleteProduct=(id)=>{
   ProductService.deleteProduct(id).then((res)=>{
      setMsg("Delete successfully")
   }).catch((error)=>{
    console.log(error);
   })
}
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card"/>
            <div className="card-header fs-3 text-center">All Product List
            {Msg && <p className='fs-4 text-center text-success'>{Msg}</p>}
            </div>
              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">SI No</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Desription</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                     {
                      productList.map((p,num)=>(
                        <tr>
                        <td>{num+1}</td>
                        <td>{p.productName}</td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>
                        <td>{p.status}</td>
                        <td>
                          <Link to="" className="btn btn-sm btn-primary">Edit</Link>
                          <button onClick={()=>deleteProduct(p.id)} className="btn btn-sm btn-danger ms-1">Delete</button>
                        </td>
                      </tr>
                      ))
                     }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>  
    </>
  );
};

export default Home;
