import {Button, Card} from 'react-bootstrap'

export const Product = ({name, price, image, left}) => {
    return (   
            <Card className="mb-1 mt-3" style={{border: "none"}}>
                <div className="m-auto" style={{height: "15em", padding: "15px"}}>
                    <Card.Img src = {image} />
                </div>
                
                <Card.Body style={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                    <Card.Title>
                        <h4>{price} р.</h4> 
                    </Card.Title>
                    <Card.Text className="text-muted">
                        <h5>Цена: {name}</h5>
                    </Card.Text>
                    <Card.Text>
                        <span>В наличии: {left} шт.</span>
                    </Card.Text>
                    <Button variant="primary">Купить</Button>
                </Card.Body>
            </Card>
            )
}