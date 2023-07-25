import MenuItem from './MenuItem'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="shop-project-react-solo/">Home</MenuItem>
            <MenuItem to="shop-project-react-solo/about">About</MenuItem>
            <MenuItem to="shop-project-react-solo/shipping">Shipping</MenuItem>
            <MenuItem to="shop-project-react-solo/payment">Payment</MenuItem>
            <MenuItem to="shop-project-react-solo/cart">Cart</MenuItem>
        </>
    )
}
export default Menu
