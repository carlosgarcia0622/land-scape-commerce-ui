import { products } from "../data/products"

export const getProducts = ({categoryId, id} = {}) => {
    return new Promise((resolve, reject) =>{
        const productsToShow = categoryId || id?
         products.filter(p => p.id === id || p.categoryId === categoryId)
         : products;
        setTimeout(() => {
            resolve(productsToShow)
        }, 1500)
    })
}