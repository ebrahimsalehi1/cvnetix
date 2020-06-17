//import {expect} from 'chai'
import React from 'react'
import Product from '../Components/Bussiness/Product'
import ProductImages from '../Components/Bussiness/ProductDetail'
import jsonData from '../sampledata/data.json'
import {
    mount,shallow,render
} from '../../enzymeConfig'
import Test from '../Components/Bussiness/Test';
import { ExpansionPanelActions } from '@material-ui/core'

describe('test Product component',()=>{
    // it('number of children render',()=>{
    //     jsonData.forEach(element => {
    //         const comp = shallow(<Product data={element}/>)
    //         expect(comp.find(ProductImages)).to.have.lengthOf(1)            
    //     });    

    // })

    // it('contains components ProductImages without props',()=>{
    //     const comp = shallow(<Product/>)
    //     expect(comp.contains(<ProductImages/>)).to.equal(false)
    // })

    // it('contains components ProductImages with props',()=>{
    //     jsonData.forEach(element => {
    //         const comp = shallow(<Product data={element}/>)
    //         expect(comp.contains(<ProductImages />)).to.equal(false)            
    //     });    
    // })

    it('sample',()=>{

        const wrapper = mount((
            <Test value="val1"/>
          ));
        //   wrapper.find('.foo').forEach(node=>{
        //     expect(node.prop('style')).toBe(undefined);
        //   });
        //expect(wrapper.find('.foo').every('.withStyles')).to.equal(false);
        //expect(wrapper.find('.foo').every('.qoo')).to.equal(false);
        //expect(wrapper.find('.foo').every('.bar')).to.equal(false);

        const foundedComp = wrapper.find('.ebrahim');
        // foundedComp.forEach(node=>{
        //     console.log(node);            
        // });
        //const renderedComp = render(foundedComp);
        //console.log(foundedComp.render().prop('children'));

        //foundedComp.render

        // foundedComp.render().prop('children').forEach((child,index)=>{
        //     console.log('index number: '+index,child);        
        // })
            
    });

})
