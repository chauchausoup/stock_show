import React, { Component } from 'react'




export default class SearchBar extends Component {
      constructor(props){
            super(props);
            this.handleOnFilterTextChange=this.handleOnFilterTextChange.bind(this);
            this.handleOnInStockOnlyChange=this.handleOnInStockOnlyChange.bind(this);
      }

      handleOnFilterTextChange(e){
            this.props.onFilterTextChange(e.target.value)            

      }

      handleOnInStockOnlyChange(e){
            this.props.onInStockOnlyChange(e.target.checked)    
            
      }
      
     
     

      render(props) {
   

            return (
                  <form>
                        <input type="text" 
                        className="searchBar" 
                        placeholder="Search"
                        value={this.props.filterText}
                        onChange={this.handleOnFilterTextChange}
                        />
                        <br/>

                        <input type="checkbox"
                        className="inputCheckBox"
                        checked={this.props.isStockOnly}
                        onChange={this.handleOnInStockOnlyChange}
                        
                        />
                        Only show product in stock.

                  </form>
            )
      }
}


