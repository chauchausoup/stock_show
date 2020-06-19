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
            let categor;
           categor= this.state.data.map((item,index)=>{
                  if(item.category==="Sporting Goods"){
                       return <ProductCategoryRow itemName={item.name} itemPrice={item.Price} itemCategory={item.category} index={index}/>
                  }
            })

            return (
                  <div>
                 
                        
                              <ProductHeader data={this.state.data[0]}/>
                              <br/>
                              <br/>
                              {categor}

                        
                  

                  </div>
            )
      }
}



function ProductCategoryRow(props) {
      var upper=[];
      upper.push(
      <tr key={props.index}>
      <td>{props.itemName}</td>
      <td>{props.itemPrice}</td>
      </tr>
      );

      return (
            <div>
                  
                  {props.itemCategory}

                       
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
                  
                        <th key={index}>
                             {key}
                        </th>
                  )
            }
            return;

           
           
      })

}



