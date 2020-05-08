import React from 'react'
import ReactDOM from 'react-dom'
import Product from './Product.js'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Test from './Test'

const data = 
  {title:'product',id:'117699813',price:100,discount:10,unitMoney:'US$',size:'M',qty:1,}


function App(){
    return (
        <div>
            {/* <Product data={data}/> */}
            <Test />
        </div>
    )
}


export default App
