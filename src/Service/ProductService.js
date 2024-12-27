import axios from "axios"

const API_URL="http://localhost:8080"

class ProdutService{

    saveProduct(product){
       return axios.post(API_URL+"/saveproduct",product)
    }

    getAllProduct(){
        return axios.get(API_URL+"/Allproduct") 
    }

    getProductById(id){
        return axios.get(API_URL+"/"+id)
    }

    deleteProduct(id){
        return axios.get(API_URL+"/deleteProdut/"+id)
    }

    updateProduct(product){
        return axios.post(API_URL+"/"+product.id,product)
    }
}

export default new ProdutService;