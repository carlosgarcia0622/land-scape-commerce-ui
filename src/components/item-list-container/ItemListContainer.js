import { useEffect, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { ItemList } from "../ItemList/ItemList";
import "./itemListContainer.styles.css"
export const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    const products =  [
        {
          id: 0,
          title: "Donas",
          price: 300000,
          description:
            "Casa con jardín, doble garaje y dos pisos en excelente ubicación",
          pictureUrl:
        "https://image.shutterstock.com/image-photo/houses-suburb-summer-north-america-600w-1514333600.jpg"        },
        {
          id: 1,
          title: "Macarrones franceses",
          price: 500000,
          description:
            "Casa  con jardín y doble garaje de un piso en unidad cerrada",
          pictureUrl:
            "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
        },
        {
          id: 2,
          title: "FINCA",
          price: 1200000,
          description:
            "Finca con piscina, dos pisos, dos balcones, en unidad cerrada",
          pictureUrl:
            "https://image.shutterstock.com/image-illustration/luxurious-villa-swimming-pool-dusk-600w-361283462.jpg",
        },
        {
          id: 3,
          title: "FINCA",
          price: 12000000,
          description:
            "Finca de amplio espacio ideal para una familia numerosa",
          pictureUrl:
            "https://image.shutterstock.com/image-photo/exterior-real-estate-photography-utah-600w-1919931614.jpg",
        },
      ];
    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        })
    })

    useEffect(() => {
        getItems.then(result =>{
            setItems(result)
        })
    }, []);
    return(
        <>
             <ItemList items={items}/>
            <ItemCount stock={5} initial={1} onAdd={(amount)=>{console.log(`Productos agregados: ${amount}`)}}></ItemCount>
        </>
    )
}