type ProductProps = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

const productsArray:ProductProps[] = [
    {
        title: "iPhone 14 Pro",
        desc: "This is iPhone 14 Pro",
        type: "phone",
        capacity: "256",
        price: 1000
    },
    {
        title: "iPhone 13 Pro",
        desc: "This is iPhone 14 Pro",
        type: "phone",
        capacity: "128",
        price: 500
    },
    {
        title: "iPhone 13",
        desc: "This is iPhone 13",
        type: "phone",
        capacity: "64",
        price: 2000
    },
    {
        title: "iPhone 11 Pro",
        desc: "This is iPhone 11 Pro",
        type: "phone",
        capacity: "256",
        price: 1000
    },
    {
        title: "iPhone 13 Pro MAX",
        desc: "This is iPhone 14 Pro MAX",
        type: "phone",
        capacity: "512",
        price: 1500
    },
    {
        title: "iPhone X",
        desc: "This is iPhone X",
        type: "phone",
        capacity: "64",
        price: 500
    },
]

export default productsArray