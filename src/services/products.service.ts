import {productsList} from "../db/db";
import {Product} from "../model/product.model";

export const getAllProducts = ():Product[] =>{
    return productsList;
}
export const saveProduct = (product: Product):Product  => {
    productsList.push(product);
    return product;
}

export const getProductById = (id: number): Product | undefined => {
    return productsList.find(product => product.id === id);
}

export const updateProduct = (id: number, data: Product): Product | undefined | null => {
    const product = productsList.find(product => product.id === id);
    if ( !product) {
        return null;
    }
    Object.assign(product, data);
    return product;
}
export const deleteProduct = (id: number): boolean => {
    const index = productsList.findIndex(product => product.id === id);
    if (index === -1) {
        return false;
    }
    productsList.splice(index, 1);
    return true;
}

export const validateProduct = (product:Product) => {
    if (!product.id || !product.name || !product.price || !product.currency || !product.image){
        return 'All fields are required'
    }
    return null;
}