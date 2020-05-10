import React from 'react'
import Product from './Components/Bussiness/Product.js'
import Test from './Components/Bussiness/Test'
import jsonData from './sampledata/data.json'

const data = jsonData[0]

function App(){
    return (
        <>
            <Product data={data}/>
            {/* <Test /> */}
        </>
    )
}


export default App
