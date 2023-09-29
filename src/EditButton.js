import React from 'react';
import ViewTable from './ViewTable.js';
class EditButton extends React.Component{
    constructor(props){
        super(props);
        this.state = props;
       

      this.handleClickOk=this.handleClickOK.bind(this);
      this.handleEdit=this.handleEdit.bind(this);

    }

    handleEdit=(event)=>{
        return(
            <div>
                <div>
                    <div><input type="text" value={this.state.user} onChange={this.setState(this.state.user=event.target.value)}/></div>
                    <div><input type="text" value={this.state.phone} onChange={this.setState(this.state.phone=event.target.value)}/></div>
                    <div><input type="text" value={this.state.email} onChange={this.setState(this.state.email=event.target.value)}/></div>
                    <div><input type="text" value={this.state.address} onChange={this.setState(this.state.address=event.target.value)}/></div>
                </div>
                <div><button onClick={this.handleClickOK}>OK</button></div>
            </div>
        )
    }

    handleClickOk=()=>{
        var tableData = localStorage.getItem("tableData");
        tableData.push(this.state);
        localStorage.setItem("tableData",tableData);
        return <ViewTable/>
    }

    render(){
       return <button onClick = {this.handleEdit}>Edit</button>
    }
}

export default EditButton;