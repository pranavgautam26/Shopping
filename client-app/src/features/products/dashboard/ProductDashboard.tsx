import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Product } from "../../../app/models/product";
import Cart from "../Cart/Cart";
import ProductList from "./ProductList";
interface Props
{
    products: Product[];
    cartItems:Product[];
    onAdd: (product: Product) => void;
    onRemove: (product: Product) => void;
}
export default function ProductDashboard({products,cartItems,onAdd,onRemove}: Props)
{
    return(
        <Grid>
            <Grid.Column width='10'>
            <ProductList products={products} onAdd={onAdd}/>
            </Grid.Column>
            <Grid.Column width='6'>
                
                <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
            </Grid.Column>
        </Grid>
    )
}