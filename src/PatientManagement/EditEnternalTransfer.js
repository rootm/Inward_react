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
                    <div className="setting-head">Edit Patient External Transfer Information</div>

                    <div className="settings-item">
                        <div className="setting-item-label">From Hospital</div>
                        <input type="text" name="profile-fname"  onChange={this.setselecteddischargeType}/>
                    </div>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">To Hospital</div>
                        <input type="text" name="profile-lname" onChange={this.setselecteddate}/>
                    </div>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Reason</div>
                        <input type="text" name="profile-lname" onChange={this.setselectedTime}/>

                    </div>

                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Treatment</div>
                        <input type="text" name="profile-lname" onChange={this.setselectedRemark}/>

                    </div>
                    <br/>
                    <br/>
                    <div className="settings-item">
                        <div className="setting-item-label">Date </div>
                        <input type="date" name="profile-lname" onChange={this.setselectedOutcome}/>
                    </div>
                    <br/>

                    <div className="settings-item">
                        <div className="setting-item-label">Name of Guardian</div>
                        <input type="text" name="profile-lname" onChange={this.setselectdaddressGuardian}/>

                    </div>
                    <br/>

                    <div className="settings-item">
                        <div className="setting-item-label">Address of Guardian</div>
                        <input type="text" name="profile-lname" onChange={this.setselectdaddressGuardian}/>
                    </div>
                    <br/>
                    <button type="button" name="update" className="Patient-button">Update Details</button>
                    <button type="button" name="delete" className="Patient-delete-button">Delete Transfer</button>
                </form>
            </div>

        );
    }
}



export default EditAdmission;