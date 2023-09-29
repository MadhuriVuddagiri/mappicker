import {React} from 'react';
import ViewTable from './ViewTable.js';

class AddField extends React.Component{
    
    constructor(props){
        super(props);
        var tableData=[];
     this.state = {
    user: "MMM",
    phone:"111",
    email:"mmm@gmail.com",
    address:"mmm",
   }


   this.handleNameChange=this.handleNameChange.bind(this);
   this.handleEmailChange=this.handleEmailChange.bind(this);
   this.handlePhoneChange=this.handlePhoneChange.bind(this);
   this.handleAddressChange=this.handleAddressChange.bind(this);
   this.formSubmit=this.formSubmit.bind(this);

    }
     handleNameChange = (e) => {
        this.setState(this.state.user=e.target.value);
    }
     handleEmailChange = (e) => {
        this.setState(this.state.email=e.target.value);
    }
     handlePhoneChange = (e) => {
       this.setState(this.state.phone=e.target.value);
    }
     handleAddressChange = (e) => {
        this.setAddress(this.state.address=e.target.value);
    }
     formSubmit = ()=>{
        if(localStorage.hasItem("tableData")){
            this.tableData=localStorage.getItem("tableData");
        }
        this.tableData.push(this.state);
        localStorage.setItem("tableData",this.tableData);

        return <ViewTable/>

    }
  

   

render (){
    return(
    <div>
        <div>
            <div>
                <label>Name</label>
                <input type="text" onClick={this.handleNameChange} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" onClick={this.handleEmailChange} />
            </div>
            <div>
                <label>Phone</label>
                <input type="text"  onClick={this.handlePhoneChange} />
            </div>
            <div>
                <label>Address</label>
                <input type="text"  onClick={this.handleAddressChange} />
            </div>
        </div>
        <div>
            <button onClick={this.formSubmit}>Save</button>
            <button>Cancel</button>
        </div>

        </div>
    )
}   
}

export default AddField;