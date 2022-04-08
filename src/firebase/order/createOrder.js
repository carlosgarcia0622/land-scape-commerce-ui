import { collection, writeBatch, getDocs, addDoc, Timestamp, query, where, documentId } from "firebase/firestore"
import { db } from "./../config"

export const createOrder = async (buyer, cart, totalCart, setOrderId, vaciarCart) =>{
    const order = {
        buyer,
        items: cart,
        total: totalCart(),
        date: Timestamp.fromDate(new Date())
    } 

    const batch = writeBatch(db)
    const ordersRef = collection(db, "orders")
    const productsRef = collection(db, "items")
    
    const q = query(productsRef, where(documentId(), 'in', cart.map((p) => p.id)))
    const productos = await getDocs(q)
    const outOfStock = []
    
    productos.docs.forEach((doc) => {
        const item = cart.find((el) => el.id === doc.id)

        if (doc.data().stock >= item.amount) {
            batch.update(doc.ref, {
                stock: doc.data().stock - item.amount
            })
        } else {
            outOfStock.push(item)
        }
    })

    if (outOfStock.length === 0) {
        addDoc(ordersRef, order)
            .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                vaciarCart()
            })
    } else {
        alert(`Los siguientes productos no tienen inventario disponible:\n ${outOfStock.map(p=>p.title)}`)
    }
}