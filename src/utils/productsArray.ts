type ProductProps = {
    id:number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

const productsArray:ProductProps[] = [
    {
        id:1,
        title: "iPhone 14 Pro",
        desc: "This is iPhone 14 Pro",
        type: "phone",
        capacity: "256",
        price: 1000
    },
    {
        id:2,
        title: "iPhone 13 Pro",
        desc: "This is iPhone 14 Pro",
        type: "phone",
        capacity: "128",
        price: 500
    },
    {
        id:3,
        title: "iPhone 13",
        desc: "This is iPhone 13",
        type: "phone",
        capacity: "64",
        price: 2000
    },
    {
        id:4,
        title: "iPhone 11 Pro",
        desc: "This is iPhone 11 Pro",
        type: "phone",
        capacity: "256",
        price: 1000
    },
    {
        id:5,
        title: "iPhone 13 Pro MAX",
        desc: "This is iPhone 14 Pro MAX",
        type: "phone",
        capacity: "512",
        price: 1500
    },
    {
        id:6,
        title: "iPhone X",
        desc: "This is iPhone X",
        type: "phone",
        capacity: "64",
        price: 500
    },
]

export default productsArray