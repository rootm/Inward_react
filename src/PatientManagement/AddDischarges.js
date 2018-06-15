import React, { Component } from 'react'
import Axios from 'axios';
import './css/Patient.css';





class AddETransfer extends React.Component {
    constructor(props) {
        super(props);
        this.setDischargeData = this.setDischargeData.bind(this);
        this.submitDischargeData = this.submitDischargeData.bind(this);
        this.setBhtNoData = this.setBhtNoData.bind(this);

        this.setselectedBhtNo = this.setselectedBhtNo.bind(this);
        this.setselecteddischargeType = this.setselecteddischargeType.bind(this);
        this.setselecteddate = this.setselecteddate.bind(this);
        this.setselectedTime = this.setselectedTime.bind(this);
        this.setselectedRemark = this.setselectedRemark.bind(this);
        this.setselectedOutcome = this.setselectedOutcome.bind(this);

       this.state = {
           bhtData:[],
           BHTNo:"",
           dischargeType:"",
           date:"",
           time:"",
           remark:"",
           outcome:""


        };
    }
    setselecteddischargeType(e){
        this.setState({selectdischargeType:e.target.value});
    }

    setselecteddate(e){
        this.setState({selectdate:e.target.value});
    }
    setselectedTime(e){
        this.setState({selectedTime:e.target.value});
    }

    setselectedRemark(e){
        this.setState({selectedremark:e.target.value});
    }

    setselectedOutcome(e){
        this.setState({selectedoutcome:e.target.value});
    }
    setselectedBhtNo(e){
        this.setState({selectedbhtno:e.target.value});
    }

    setBhtNoData(data){
        this.setState({bhtData:data});

    }
    componentWillMount(){
        Axios.get('http://localhost:8083/patients').then(function (data) {
            this.setBhtNoData(data.data.data);

        }.bind(this))

    }

    setDischargeData(e){
        console.log(e.target.value)
    }

    submitDischargeData(){
        //console.log("Button Clicked");
        let object = {
            BHTNo: this.state.selectedbhtno,
            dischargeType: this.state.selectdischargeType,
            date: this.state.selectdate,
            time: this.state.selectedTime,
            remark: this.state.selectedremark,
            outcome: this.state.selectedoutcome,

        }

        console.log(object);

        Axios.post('http://localhost:8083/discharge',object).then(function (data) {
            console.log(data);
            console.log("New Discharge details Added");
            alert("New Discharge details Added");
        })
    }
    handleChange = event => {
        this.setState({ name: event.target.value });
    };


    render() {
        const { classes } = this.props;
        let bhtList= this.state.bhtData.map(function (item,i) {
            return <option value={item.BHTNo} key={i}>
                {item.BHTNo} </option>
        });
        return (

            <div className="settings-sub">
                <form action="">
                    <div className="setting-head">Patient Discharge Information</div>

                    <div className="settings-item">
                        <div className="setting-item-label">Select Patient BHT No</div>
                        <select className="combo" onChange={this.setselectedBhtNo}>
                            {bhtList}
                        </select>

                    </div>

                    <div className="settings-item">
                        <div className="setting-item-label">Discharge Type</div>
                        <input type="text" name="profile-fname"  onChange={this.setselecteddischargeType}/>
                    </div>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Date</div>
                        <input type="date" name="profile-lname" onChange={this.setselecteddate}/>
                    </div>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Time</div>
                        <input type="time" name="profile-lname" onChange={this.setselectedTime}/>

                    </div>

                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Remark</div>
                        <input type="text" name="profile-lname" onChange={this.setselectedRemark}/>

                    </div>
                    <br/>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Outcome </div>
                        <input type="text" name="profile-lname" onChange={this.setselectedOutcome}/>
                    </div>
                    <br/>
                    <button type="button" name="save" className="Patient-button" onClick={this.submitDischargeData}>Save Details</button>
                </form>
            </div>

        );
    }
}



export default AddETransfer;