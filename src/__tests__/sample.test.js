import {expect} from 'chai'
import React from 'react'
import Product from '../Components/Bussiness/Product'
import ProductImages from '../Components/Bussiness/ProductDetail'
import jsonData from '../sampledata/data.json'
import {
    mount,shallow
} from '../../enzymeConfig'

describe('test Product component',()=>{
    it('number of children render',()=>{
        jsonData.forEach(element => {
            const comp = shallow(<Product data={element}/>)
            expect(comp.find(ProductImages)).to.have.lengthOf(1)            
        });    

    })

    it('contains components ProductImages without props',()=>{
        const comp = shallow(<Product/>)
        expect(comp.contains(<ProductImages/>)).to.equal(false)
    })

    it('contains components ProductImages with props',()=>{
        jsonData.forEach(element => {
            const comp = shallow(<Product data={element}/>)
            expect(comp.contains(<ProductImages />)).to.equal(false)            
        });    
    })

})
