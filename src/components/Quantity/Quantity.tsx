import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    onDecrementClick: () => void
    onIncrementClick: () => void
    minCount?: number
}

const Quantity = ({
    count,
    onDecrementClick,
    onIncrementClick,
    minCount = 1,
}: Props) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={() => onDecrementClick()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField value={count} size="small" />
            <Button
                variant="outlined"
                onClick={() => onIncrementClick()}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}
export default Quantity
