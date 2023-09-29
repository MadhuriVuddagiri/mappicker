import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import AddField from './AddField';

class ViewTable extends React.Component{
   
    constructor(props){
        super(props);
        var dataTable = localStorage.getItem("dataTable");
       
        this.handleAddRow=this.handleAddRow.bind(this);
    }

    handleAddRow=()=>{
        return <AddField/>
    }


    render(){
       return( <div>
            <table>
                <th>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Actions</td>
                </th>
                {
                    this.dataTable.map=(item)=>{
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>
                                <fr><EditButton item={item}/></fr>
                                <fr><DeleteButton item={item}/></fr>
                            </td>
                        </tr>
                    }
                }
            </table>
            <div><button onclick={this.handleAddRow}>Add</button></div>

        </div>
       );
    }
}

export default ViewTable; 