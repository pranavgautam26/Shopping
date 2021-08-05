import React from "react";
import { Button, Item, Segment } from "semantic-ui-react";
import { Product } from "../../../app/models/product";
interface Props
{
    products: Product[];
    onAdd: (product: Product) => void;
}
export default function ProductList({products,onAdd}:Props)
{
    return(
        <Segment>
            <Item.Group divided>
            {products.map(product => (
                <Item key={product.id}>
                    <Item.Content>
                        <Item.Header as='a'>{product.title}</Item.Header>
                        <Item.Meta>${product.price}</Item.Meta>
                        <Item.Description>
                            <div>{product.description}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => onAdd(product)} floated='right' content='Buy' color='blue' />

                        </Item.Extra>
                    </Item.Content>
                </Item>
            ))}
            </Item.Group>
        </Segment>
    )
}