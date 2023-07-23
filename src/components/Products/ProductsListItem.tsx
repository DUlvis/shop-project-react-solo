import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'
import { useState } from 'react'
type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductsListItem = ({
    title,
    desc,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }

    const [color, setColor] = useState<string>('green')

    const changeColor = () => {
        // with trinary operator "?"
        setColor((prevState: string) =>
            prevState === 'green' ? 'red' : 'green'
        )

        // with if
        // setColor((prevState: string) => {
        //     if (prevState === 'green') {
        //         return 'red'
        //     } else {
        //         return 'green'
        //     }
        // })
    }

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
                <p>Color: {color}</p>
                <button onClick={changeColor}>Change color</button>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={onDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField value={count} size="small" />
                    <Button
                        variant="outlined"
                        onClick={onIncrementClick}
                        disabled={count >= 10}
                    >
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

export default ProductsListItem
