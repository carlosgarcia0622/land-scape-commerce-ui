import '../ItemCount/ItemCount.style.css'
import './Item.style.css'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom';

export const Item = ({id, title, price, pictureUrl})=>{

    return(
      <Link to={`/item/${id}`} style={{ textDecoration: 'none', color: "black"}}>
      <Card style={{ width: '16rem', margin: '12px' }}>
        <Card.Img variant="top" src={pictureUrl} alt={title} />
        <Card.Body >
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Precio: ${price}
          </Card.Text>

          <button className="btn-add">
              Ver detalle
            </button>
        </Card.Body>
      </Card>
    </Link>
    )
}