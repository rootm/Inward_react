import React from 'react';
import './css/Patient.css';





class EditAdmission extends React.Component {
    state = {
        name: 'Composed TextField',
    };

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
                    <div className="setting-head">Edit Patient Admission Information</div>

                    <div className="settings-item">
                        <div className="setting-item-label">BHT NO</div>
                        <input type="text" name="profile-fname" placeholder={"Search with BHT NO"}  onChange={this.setselecteddischargeType}/>
                    </div>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Patient Name</div>
                        <input type="text" name="profile-lname" onChange={this.setselecteddate}/>
                    </div>
                    <br/>
                    <div>
                        <div className="setting-item-label">Assign Ward No</div>
                        <select className="combo" onChange={this.setselectedRemark}>
                            <option>xxx</option><option>xxx</option><option>xxx</option>
                        </select>
                    </div>
                    <br/>
                    <div>
                        <div className="setting-item-label">Assign Bed No</div>
                        <select className="combo" onChange={this.setselectedOutcome}>
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

                    <button type="button" name="staff_update" className="Patient-button">Update Details</button>
                    <button type="button" name="staff_delete" className="Patient-delete-button">Delete Admission</button>
                </form>
            </div>

        );
    }
}



export default EditAdmission;