import React, { Component } from 'react'

export default class ProductTable extends Component {
      constructor(props){
            super(props);
            this.state={
                  data:[
                        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
                      ]
            }

            
           //this.renderTableData=this.renderTableData.bind(this)
      }
      render() {
            
            let boxes;
            
          
                 
                  
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
                 
                        
                              <ProductHeader data={this.state.data[0]}/>
                              <br/>
                              <br/>
                              
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

function ProductHeader(props){

      let header = Object.keys(props.data);// what the idea is this?

      return header.map((key,index)=>{
                     
            if(key==="name" || key==="price"){
                  return(
                  
                        
                             {key}
                        
                  )
            }
            return;

           
           
      })

}



