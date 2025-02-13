import { tesloApi } from "../../config/api/tesloApi"
import { Products } from "../../infrastructure/interfaces/products.response"
import { ProductMapper } from "../../infrastructure/mappers/product.mapper";

export const getProductsByPage= async (page:number,limit:number=20) =>{
    try{
        const {data} = await tesloApi.get<Products[]>(`/products?offset=${ page * 10 }&limit=${ limit }`);
        const products = data.map(ProductMapper.productToEntity)
        console.log(products[0]);
        return products;
    }
    catch(error){
        console.log(error);
        throw new Error('Error getting products');
    }
}