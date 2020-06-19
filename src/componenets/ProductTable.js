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
                 <th> {props.categor}</th>
            </tr>
            
            
      )
}


function ProductRow(props) {

      var sItems=[];
      var eItems=[];
      var c= props.categor;

     props.data.forEach((item)=>{
      var i = !item.stocked ? <span style={{color:'red'}}><td>{item.name}</td></span> : <td>{item.name}</td>

      if(item.category==="Sporting Goods"){

            sItems.push(
                  
                  <tr key={item.name}>
                  <td>{i}</td>
                  <td>{item.price}</td>
                  </tr>
            )    
      }
      if(item.category==="Electronics"){
            eItems.push(
                  <tr key={item.name}>
                  <td>{i}</td>
                  <td>{item.price}</td>
                  </tr>
            )    
      }
      })
     
return(

      c === "Sporting Goods" ?  sItems : eItems 
      
)
     
}



