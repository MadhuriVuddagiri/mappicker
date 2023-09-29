import React from 'react';
import ViewTable from './ViewTable.js';
class DeleteButton extends React.Component{
    constructor(props){
        super(props);
        this.state=props;
       
        var index=100000;
        this.handleDelete=this.handleDelete.bind(this);
    }
    tableData = localStorage.getItem("tableData");
    user = this.state.user;
        handleDelete = (user) =>{
            for(var i=0;i<this.tableData.length;i++){
                if(user==this.tableData[i].user)
                {
                    this.index=i;
                    break;
                }

            }
            if(this.index<this.tableData.length)
            {
              //  this.tableData.splice[this.index];
                localStorage.setitem("tableData",this.tableData);
            }
            return <ViewTable/>
        }

    

    render(){
       return <button onclick={this.handleDelete}>Delete</button>
    }
}

export default DeleteButton;