
import React from "react";
import { Button, Card } from "semantic-ui-react";
import { Product } from "../../../app/models/product";

interface Props
{
    cartItems: Product[];
    onAdd: (product: Product) => void;
    onRemove: (product: Product) => void;
}
export default function Cart({cartItems,onAdd,onRemove}: Props)
{
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty,0);
    const taxPrice = itemsPrice *0.18;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice+taxPrice+shippingPrice;
    return(
        <Card>
            <Card.Content>
            {cartItems.length === 0 && <Card.Header>Cart is Empty</Card.Header>}
            </Card.Content>
            
            {cartItems.map((item) => (
                <Card.Content key={item.id}>
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Meta>
                        <span>${item.price}</span>
                    </Card.Meta>
                    <Card.Content extra>
                        <Button.Group widths='2'>
                            <Button onClick={()=>onAdd(item)} basic color='blue' content='+' />
                            
                            <Button onClick={()=>onRemove(item)} basic color='grey' content='-'/>
                        </Button.Group>
                    </Card.Content>
                    <Card.Content>
                        {item.qty} x ${item.price.toFixed(2)}
                    </Card.Content>
                </Card.Content>
            ))}
            {cartItems.length !==0 && (
                <Card.Content>
                    <Card.Header>Items Price</Card.Header>
                    <Card.Meta><span>${itemsPrice.toFixed(2)}</span></Card.Meta>
                    <Card.Header>Tax Price</Card.Header>
                    <Card.Meta><span>${taxPrice.toFixed(2)}</span></Card.Meta>
                    <Card.Header>Shipping Price</Card.Header>
                    <Card.Meta><span>${shippingPrice.toFixed(2)}</span></Card.Meta>
                    <Card.Header>Total Price</Card.Header>
                    <Card.Meta><span>${totalPrice.toFixed(2)}</span></Card.Meta>
                </Card.Content>
            
                )}

            

        </Card>
    )
}



// <Card.Content key={item.id}>
// <Card.Header>{item.title}</Card.Header>
// <Card.Meta>
//   <span>{product.price}</span>
// </Card.Meta>
// </Card.Content>
// <Card.Content extra>
//   <Button.Group widths='2'>
//       <Button basic color='blue' content='+' />
//       <Button basic color='grey' content='-' />
//   </Button.Group>
// </Card.Content>