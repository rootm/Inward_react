import React, { Component } from 'react'
import Axios from 'axios';
import './css/Patient.css';





class AddETransfer extends React.Component {
    constructor(props) {
        super(props);
        this.setTransferData = this.setTransferData.bind(this);
        this.submitTransferData = this.submitTransferData.bind(this);
        this.setBhtNoData = this.setBhtNoData.bind(this);

        this.setselectedBhtNo = this.setselectedBhtNo.bind(this);
        this.setselectedfromHospital = this.setselectedfromHospital.bind(this);
        this.setselectedToHospital = this.setselectedToHospital.bind(this);
        this.setselectedReason = this.setselectedReason.bind(this);
        this.setselectedTreatment = this.setselectedTreatment.bind(this);
        this.setselectedDate = this.setselectedDate.bind(this);
        this.setselectenameGuardian = this.setselectenameGuardian.bind(this);
        this.setselectdaddressGuardian = this.setselectdaddressGuardian.bind(this);

       this.state = {
           bhtData:[],
           BHTNo: "",
           fromHospital:"",
           toHospital:"",
           reason:"",
           treatment:"",
           date:"",
           nameGuardian:"",
           addressGuardian:"",
           name: 'Composed TextField'


        };
    }
    setselectedBhtNo(e){
        this.setState({selectBhtNo:e.target.value});
    }
    setselectedfromHospital(e){
        this.setState({selectdischargeType:e.target.value});
    }

    setselectedToHospital(e){
        this.setState({selectdate:e.target.value});
    }
    setselectedReason(e){
        this.setState({selectedTime:e.target.value});
    }

    setselectedTreatment(e){
        this.setState({selectedremark:e.target.value});
    }

    setselectedDate(e){
        this.setState({selectedoutcome:e.target.value});
    }
    setselectenameGuardian(e){
        this.setState({selectedbhtno:e.target.value});
    }
    setselectdaddressGuardian(e){
        this.setState({selectedaddressGur:e.target.value});
    }

    setBhtNoData(data){
        this.setState({bhtData:data});

    }
    componentWillMount(){
        Axios.get('http://localhost:8083/patients').then(function (data) {
            this.setBhtNoData(data.data.data);

        }.bind(this))

    }

    setTransferData(e){
        console.log(e.target.value)
    }

    submitTransferData(){
        //console.log("Button Clicked");
        let object = {

            fromHospital: this.state.selectdischargeType,
            toHospital: this.state.selectdate,
            reason: this.state.selectedTime,
            treatment: this.state.selectedremark,
            date: this.state.selectedoutcome,
            nameGuardian: this.state.selectedbhtno,
            addressGuardian: this.state.selectedaddressGur,
            BHTNo: this.state.selectBhtNo,

        }

        console.log(object);

        Axios.post('http://localhost:8083/externalTransfer',object).then(function (data) {
            console.log(data);
            console.log("New External Transfer Added");
            alert("New External Transfer Added");
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
                    <div className="setting-head">Patient External Transfer Information</div>

                    <div className="settings-item">
                        <div className="setting-item-label">Select Patient BHT No</div>
                        <select className="combo" onChange={this.setselectedBhtNo}>
                            {bhtList}
                        </select>

                    </div>
                    <div className="settings-item">
                        <div className="setting-item-label">From Hospital</div>
                        <input type="text" name="profile-fname"  onChange={this.setselectedfromHospital}/>
                    </div>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">To Hospital</div>
                        <input type="text" name="profile-lname" onChange={this.setselectedToHospital}/>
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

                    <div className="settings-item">
                        <div className="setting-item-label">Name of Guardian</div>
                        <input type="text" name="profile-lname" onChange={this.setselectenameGuardian}/>

                    </div>
                    <br/>

                    <div className="settings-item">
                        <div className="setting-item-label">Address of Guardian</div>
                        <input type="text" name="profile-lname" onChange={this.setselectdaddressGuardian}/>
                    </div>

                    <br/>
                    <button type="button" name="save" className="Patient-button" onClick={this.submitTransferData}>Save Details</button>
                </form>
            </div>

        );
    }
}



export default AddETransfer;