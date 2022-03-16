import '../ItemCount/ItemCount.style.css'
import './Item.style.css'
export const Item = ({id, title, description, price, pictureUrl})=>{
    const showDetails = () =>{
        // Do something
    }
    return(
        <div >
        <img className="img" src={pictureUrl} alt={title} />
        <div >
          <p>{title}</p>
          <p>{`Precio: $${price}`}</p>
          <button className="myButton" onClick={showDetails}>
              Ver detalle
            </button>
        </div>
      </div>
    )
}