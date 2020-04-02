import React from "react"
import products from "./components/products.js"
import Product from "./components/product.js"

function App() {
    const productComponents = products.map(item => <Product key={item.id} product={item}/>)

    return(
        <div>
            {productComponents}
        </div>
    )
}

export default App
