import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

class ProductsListItem extends Component<Props> {
    render() {
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={this.props.image} alt="" />
                    </div>
                    <div className="product-title">{this.props.title}</div>
                    <div className="product-desc">{this.props.desc}</div>
                    <div className="product-features">
                        <span>Type:</span> {this.props.type}
                    </div>
                    <div className="product-features">
                        <span>Capacity:</span> {this.props.capacity}Gb
                    </div>
                    <div className="product-price">
                        <span>Price:</span>
                        {this.props.price}$
                    </div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField value="1" size="small" />
                        <Button variant="outlined">+</Button>
                    </div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

// const ProductsListItem = ({
//     title,
//     desc,
//     type,
//     capacity,
//     price,
//     image,
// }: Props) => {

// }

export default ProductsListItem
