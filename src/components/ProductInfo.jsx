

const product = {
    name: "Laptop",
    price: 1200,
    availability: "In Stock"
}

const ProductInfo = () => {
  return (
    <div>
        <h1>{product.name}</h1>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Availability: {product.availability}</p>
    </div>
  )
}

export default ProductInfo

