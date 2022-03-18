import '../ItemCount/ItemCount.style.css'
import './Item.style.css'
import { Card } from "react-bootstrap"
import { useState } from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

export const Item = ({id, title, price, pictureUrl})=>{
  const [showDetails, setShowDetails] = useState(false);
    const openDetails = () =>{
        setShowDetails(true);
    }
    const hideDetails = () =>{
      setShowDetails(false);
  }
    return(
      <>
      <Card style={{ width: '16rem', margin: '12px' }}>
        <Card.Img variant="top" src={pictureUrl} alt={title} />
        <Card.Body >
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Precio: ${price}
          </Card.Text>

          <button className="myButton" onClick={openDetails}>
              Ver detalle
            </button>
        </Card.Body>
      </Card>
      {
        showDetails && 
          <ItemDetailContainer 
            show={showDetails} 
            hideDetails={hideDetails}
          />
      }
    </>
    )
}