import React, { Component } from 'react'


export default class ProductTable extends Component {
      
      render() {
            
            
            let data = this.props.data;
            
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
                                          <Product categoryName={["Sporting Goods","Electronics"]} data={data}/>

                                    </tbody>
                              </table>
                             
                  </div>
            )
      }
}

function Product(props){
      //categoryName
      //data

      

      return(
            

            props.categoryName.map(category=>{
                  
                  return(
                        <React.Fragment>
                              <ProductCategoryRow categor={category} key={props.categoryName}/>
                              <ProductRow categor={category} data={props.data} />
                        </React.Fragment>
                        
                  )
                                
            })
      
      )
      
}

function ProductCategoryRow(props) {

      return (
           
            <tr>
                  {props.categor}
            </tr>
            
            
      )
}


function ProductRow(props) {

      var sItems=[];
      var eItems=[];
      var c= props.categor;

     props.data.forEach((item)=>{

          
      if(item.category==="Sporting Goods"){
            
            sItems.push(
                  <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  </tr>
            )    
      }
      if(item.category==="Electronics"){
            
            eItems.push(
                  <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  </tr>
            )    
      }
      

     })
     

return(
      c === "Sporting Goods" ?  sItems : eItems 
      
)
     
}



