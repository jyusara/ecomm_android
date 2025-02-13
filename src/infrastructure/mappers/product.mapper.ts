import { API_URL } from '../../config/api/tesloApi';
import { Products } from '../../domain/entities/product';


export class ProductMapper{

    static productToEntity(Products: Products):Products{
        return{
            id: Products.id,
            title: Products.title, 
            price: Products.price, 
            description: Products.description, 
            slug: Products.slug, 
            stock: Products.stock, 
            sizes: Products.sizes, 
            gender: Products.gender, 
            tags: Products.tags, 
            images: Products.images.map(image => `${ API_URL}/files/product/${ image }`)      
        }
    }
}