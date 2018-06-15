import React, { Component } from 'react'
import Axios from 'axios';
import './css/Patient.css';





class AddAdmission extends React.Component {
    constructor(props) {
        super(props);
        this.setAdmissionData = this.setAdmissionData.bind(this);
        this.submitAdmissionData = this.submitAdmissionData.bind(this);
        this.setBedData = this.setBedData.bind(this);
        //this.submitAdmissionData = this.submitAdmissionData.bind(this);

        this.setselectedBHTNo = this.setselectedBHTNo.bind(this);
        this.setselectedPatientData = this.setselectedPatientData.bind(this);
        this.setselectedWardNo = this.setselectedWardNo.bind(this);
        this.setselectedBedNo = this.setselectedBedNo.bind(this);
        this.setselectedAdmittedDate = this.setselectedAdmittedDate.bind(this);
        this.setselectedadmittedTime = this.setselectedadmittedTime.bind(this);


       this.state = {
           bedData:[],
           selectedBhtNo:"",
           selectedPatientName:"",
           selectedWardNo:"",
           selectedBedNo:"",
           selectedAdmittedDate:"",
           selectedAdmittedTime:0,
           name: 'Composed TextField'
        };
    }
    setselectedBHTNo(e){
        this.setState({selectedBhtNo:e.target.value});
    }

    setselectedPatientData(e){
        this.setState({selectedPatientName:e.target.value});
    }

    setselectedWardNo(e){
        this.setState({selectedWardNo:e.target.value});
    }

    setselectedBedNo(e){
        this.setState({selectedBedNo:e.target.value});
    }

    setselectedAdmittedDate(e){
        this.setState({selectedAdmittedDate:e.target.value});
    }

    setselectedadmittedTime(e){
        this.setState({selectedAdmittedTime:e.target.value});
    }

    setBedData(data){
        this.setState({bedData:data});

    }
    componentWillMount(){
        Axios.get('http://localhost:8083/beds').then(function (data) {
            this.setBedData(data.data.data);

        }.bind(this))

    }

    setAdmissionData(e){
        console.log(e.target.value)
    }

    submitAdmissionData(){
        //console.log("Button Clicked");
        let object = {
            BHTNo: this.state.selectedBhtNo,
            patientName: this.state.selectedPatientName,
            wardNo: this.state.selectedWardNo,
            bedNo: this.state.selectedBedNo,
            admittedDate: this.state.selectedAdmittedDate,
            admittedTime: this.state.selectedAdmittedTime
        }

        console.log(object);

        Axios.post('http://localhost:8083/patients',object).then(function (data) {
            console.log(data);
            console.log("New Patient Admission Added");
            alert("New Patient Admission Added");
        })
    }
    handleChange = event => {
        this.setState({ name: event.target.value });
    };


    render() {
        const { classes } = this.props;
        let bedList= this.state.bedData.map(function (item,i) {
            return <option value={item.bedNumber} key={i}>
                {item.bedNumber} </option>
        });

        return (

            <div className="settings-sub">
                <form action="">
                    <div className="setting-head">Patient Admission Information</div>

                    <div className="settings-item">
                        <div className="setting-item-label">BHT NO</div>
                        <input type="text" name="profile-fname"  onChange={this.setselectedBHTNo}/>
                    </div>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Patient Name</div>
                        <input type="text" name="profile-lname" onChange={this.setselectedPatientData}/>
                    </div>
                    <br/>
                    <div>
                        <div className="setting-item-label">Assign Ward No</div>
                        <select className="combo" onChange={this.setselectedWardNo}>
                            <option>xxx</option><option>xxx</option><option>xxx</option>
                        </select>
                    </div>
                    <br/>
                        <div>
                            <div className="setting-item-label">Assign Bed No</div>
                             <select className="combo" onChange={this.setselectedBedNo}>
                                 {bedList}
                             </select>

                        </div>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Admitted Date </div>
                        <input type="date" name="profile-lname" onChange={this.setselectedAdmittedDate}/>
                    </div>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Admitted Time</div>
                        <input type="time" name="profile-lname" onChange={this.setselectedadmittedTime}/>
                    </div>

                    <br/>
                    <button type="button" name="save" className="Patient-button" onClick={this.submitAdmissionData}>Save Details</button>
                </form>
            </div>

        );
    }
}



export default AddAdmission;