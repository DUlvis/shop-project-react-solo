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

type State = {
    count: number
}

class ProductsListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.onIncrement = this.onIncrement.bind(this)
        this.state = {
            count: 1,
        }
    }

    onIncrement() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    render() {
        const { title, desc, type, capacity, price, image } = this.props
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-desc">{desc}</div>
                    <div className="product-features">
                        <span>Type:</span> {type}
                    </div>
                    <div className="product-features">
                        <span>Capacity:</span> {capacity}Gb
                    </div>
                    <div className="product-price">
                        <span>Price:</span>
                        {price}$
                    </div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField value={this.state.count} size="small" />
                        <Button variant="outlined" onClick={this.onIncrement}>
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductsListItem
