import React, { Component } from 'react'

export default class Table extends Component {
      constructor(props){
            super(props);
            this.state={
                  students: [
                        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com',gender:"M" },
                        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com',gender:"M" },
                        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com',gender:"F" },
                        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com',gender:"F" }
                     ]
            }
           //this.renderTableData=this.renderTableData.bind(this)
      }

      renderTableData(){
            return this.state.students.map((student,index)=>{
                  const{name,id,email,age}=student; // destructuring in react 
                        return(
                              <tr key={id}>
                                    <td>{id}</td>
                                          <td>{name}</td>
                                                <td>{age}</td>
                                                      <td>{email}</td>

                              </tr>
                        )

            })
      }

      renderTableHeader(){
            let header = Object.keys(this.state.students[0]);// what the idea is this?
            return header.map((key,index)=>{
                  if(key==="gender") return;           
                  
                  return(
                        
                        <th key={index}>
                             {key}
                        </th>
                  )
                 
            })

      }
      renderCategory(){
           

      }
      render() {

          
            return (
                  <div>
                       
                        <table>
                              <tbody>
                                    <tr>{this.renderTableHeader()}</tr>     
                              </tbody>
                        </table>
                  </div>
            )
      }
}
