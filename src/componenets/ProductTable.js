import React, { Component } from 'react'

export default class ProductTable extends Component {
      
      render() {
            
            let boxes=[];

          
                 
                  
            let rows= this.state.data.map((item,index)=>{
                  if(item.category==="Sporting Goods"){
                        
                        return <ProductRow itemName={item.name} itemPrice={item.price} index={index}/>
                   }
            })

/* 
            let categorE;
            let itemHeadE;
           categorE= this.state.data.map((item,index)=>{
                  
                  if(item.category==="Electronics"){
                        itemHeadE="Elec"
                       return <ProductCategoryRow itemName={item.name} itemPrice={item.price} itemCategory={item.category} index={index}/>
                  }
                  return;
            })
 */


            return (
                  <div>
                 
                        
                              <table>
                                    <thead>
                                          <tr>
                                                <th>Name</th>
                                                <th>Price</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {boxes}
                                    </tbody>
                              </table>
                              {boxes}
                              

                        
                  

                  </div>
            )
      }
}



function ProductCategoryRow() {
      var upper=[];
      upper.push(
      <div>
            
            {props.itemPrice}
            
            {props.itemName}

      </div>
      
      );

      return (
            <div>
                  
                 

                       
                              {upper}

                        
                
                  
            </div>
      )
}


function ProductRow() {
      return (
            <div>
                  
            </div>
      )
      }



