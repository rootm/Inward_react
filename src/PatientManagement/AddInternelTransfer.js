import React, { Component } from 'react'
import Axios from 'axios';
import './css/Patient.css';





class AddITransfer extends React.Component {
    constructor(props) {
        super(props);
        this.setTransferData = this.setTransferData.bind(this);
        this.submitTransferData = this.submitTransferData.bind(this);


        this.setselectedTransferWard = this.setselectedTransferWard.bind(this);
        this.setselectedReason = this.setselectedReason.bind(this);
        this.setselectedTreatment = this.setselectedTreatment.bind(this);
        this.setselectedDate = this.setselectedDate.bind(this);

       this.state = {
           transferWard:"",
           reason:"",
           treatment:"",
           date:""

        };
    }
    setselectedTransferWard(e){
        this.setState({selectTransferWard:e.target.value});
    }

    setselectedReason(e){
        this.setState({selectedReason:e.target.value});
    }

    setselectedTreatment(e){
        this.setState({selectedTreatment:e.target.value});
    }

    setselectedDate(e){
        this.setState({selectedDate:e.target.value});
    }


    // setBedData(data){
    //     this.setState({bedData:data});
    //
    // }

    setTransferData(e){
        console.log(e.target.value)
    }

    submitTransferData(){
        //console.log("Button Clicked");
        let object = {
            BHTNo: this.state.selectedBhtNo,
            transferWard: this.state.selectTransferWard,
            reason: this.state.selectedTime,
            treatment: this.state.selectedremark,
            date: this.state.selectedoutcome,

        }

        console.log(object);

        Axios.post('http://localhost:8083/internalTransfer',object).then(function (data) {
            console.log(data);
            console.log("New Internal Transfer Added");
            alert("New Internal Transfer Added");
        })
    }
    handleChange = event => {
        this.setState({ name: event.target.value });
    };


    render() {
        const { classes } = this.props;
        // let bedList= this.state.bedData.map(function (item,i) {
        //     return <option value={item.bedNumber} key={i}>
        //         {item.bedNumber} </option>
        // });

        return (

            <div className="settings-sub">
                <form action="">
                    <div className="setting-head">Patient Internal Transfer Information</div>

                    <div className="settings-item">
                        <div className="setting-item-label">Transfer Ward</div>
                        <input type="text" name="profile-fname"  onChange={this.setselectedTransferWard}/>
                    </div>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Reason</div>
                        <input type="text" name="profile-lname" onChange={this.setselectedReason}/>
                    </div>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Treatment</div>
                        <input type="text" name="profile-lname" onChange={this.setselectedTreatment}/>

                    </div>
                    <br/>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Date </div>
                        <input type="date" name="profile-lname" onChange={this.setselectedDate}/>
                    </div>
                    <br/>

                    <button type="button" name="save" className="Patient-button" onClick={this.submitTransferData}>Save Details</button>
                </form>
            </div>

        );
    }
}



export default AddITransfer;