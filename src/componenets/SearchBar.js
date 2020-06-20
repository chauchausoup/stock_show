import React, { Component } from 'react'




export default class SearchBar extends Component {
      render() {
            return (
                  <form>
                        <input type="text" 
                        className="searchBar" 
                        placeholder="Search"

                        />
                        <br/>

                        <input type="checkbox"
                        className="inputCheckBox"      
                        />
                        Only show product in stock.

                  </form>
            )
      }
}


