import React, { useState } from 'react'
import ProductService from '../Service/ProductService'

const Addproduts = () => {
 
    const[Msg,setMsg]=useState("")
    const[product,setProduct]=useState({
        ProdutName:"",
        description:"",
        price:"",
        status:"",
    })

    const handlechange=(e)=>{
         const value=e.target.value;
         setProduct({...product,[e.target.name]:value})
    }
 
    const ProductRegister=(e)=>{
        e.preventDefault();
        
        ProductService.saveProduct(product).then((res)=>{
            setMsg("Product Added Sucessfully")
            setProduct({ ProdutName:"",
                description:"",
                price:"",
                status:"",})
            
        }).catch((error)=>{
        console.log(error)
        })
    }
 
    return (
    <>
      <div className='Container mt-5'>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header fs-3 text-center'>Add Product </div>
                    {
                        Msg && <p className='fs-4 text-center text-success'>{Msg}</p>
                    }
                     <div className='card-body'>
                        <form onSubmit={(e)=>ProductRegister(e)}>
                            <div className='mb-2'>
                                <label>Enter Product Name</label>
                                <input type="text" name='productName' className='form-control' onChange={(e)=>handlechange(e)}  value={product.ProdutName}/>
                            </div> 
                            <div className='mb-2'>
                                <label>Product Description</label>
                                <input type="text" name='description' className='form-control' onChange={(e)=>handlechange(e)} value={product.description}/>
                            </div>
                            <div className='mb-3'>
                                <label>Enter Price</label>
                                <input type="text" name='price' className='form-control' onChange={(e)=>handlechange(e)} value={product.price}/>
                            </div>
                            <div className='mb-3'>
                                <label>Enter Status </label>
                                <input type="text" name='status' className='form-control' onChange={(e)=>handlechange(e)} value={product.status}/>
                            </div>
                            <button className='btn btn-primary col-md-12'>Submit</button>
                        </form>
                     </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Addproduts