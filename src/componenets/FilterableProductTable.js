import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
      constructor(props){
            super(props);
            this.state={
                  filterText:'',
                  inStockOnly:false
            }
            this.handleOnFilterTextChange=this.handleOnFilterTextChange.bind(this);
            this.handleOnInStockOnlyChange=this.handleOnInStockOnlyChange.bind(this);
      }

      handleOnFilterTextChange(filterText){
            this.setState({
                  filterText:filterText
            })

      }

      handleOnInStockOnlyChange(inStockOnly){
            this.setState({
                  inStockOnly:inStockOnly
            })
            
      }



      render() {
            return (
                  <div>
                        <SearchBar 
                        inStockOnly={this.state.inStockOnly} 
                        filterText={this.state.filterText}
                        onFilterTextChange={this.handleOnFilterTextChange}
                        onInStockOnlyChange={this.handleOnInStockOnlyChange}

                        />
                        <hr/>


                        <ProductTable 
                        data={this.props.data} 
                        filterText={this.state.filterText} 
                        inStockOnly={this.state.inStockOnly}
                        />
                  </div>
            )
      }
}


