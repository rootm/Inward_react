import React from 'react';
import './css/Staff.css';





class AddStaff extends React.Component {
    state = {
        name: 'Composed TextField',
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (

            <div className="settings-sub">
                <form action="">
                    <div className="setting-head">Employee Information</div>

                    <div className="settings-item">
                        <div className="setting-item-label">First Name</div>
                        <input type="text" name="profile-fname"/>
                    </div>
                    <div className="settings-item">
                        <div className="setting-item-label">Last Name</div>
                        <input type="text" name="profile-lname"/>
                    </div>

                    <div className="settings-item">
                        <div className="setting-item-label">Address</div>
                        <input type="text" name="profile-email"/>

                    </div>

                    <div className="settings-items">

                            <span className="gender-group">
                                <div className="setting-item-label">Gender</div>
                                <span>
                                <span><input  type="radio" name="gender" value="male" id="maleR"/> <label
                                    htmlFor="maleR">Male</label></span>
                                <span><input type="radio" name="gender" value="female" id="femaleR"/><label
                                    htmlFor="femaleR">Female</label></span>
                                </span>
                            </span>
                        <div>
                            <div className="setting-item-label">Birth Date</div>
                            <input type="Date" name="profile-email"/>
                        </div>

                    </div>

                    <div className="settings-items">
                        <div>
                            <div className="setting-item-label">NIC Number</div>
                            <input type="text" name="profile-email"/>
                        </div>
                        <div>
                            <div className="setting-item-label">Mobile Number</div>
                            <input type="text" name="profile-email"/>
                        </div>
                    </div>

                    <div className="settings-items">
                        <div>
                            <div className="setting-item-label">Designation</div>
                            <select className="combo"><option>xxx</option><option>xxx</option><option>xxx</option></select>
                        </div>
                        <div>
                            <div className="setting-item-label">Assigned Ward</div>
                            <select className="combo"><option>xxx</option><option>xxx</option><option>xxx</option></select>
                        </div>
                    </div>


                    <button type="button" name="staff_save" className="Patient-button">Save Details</button>
                </form>
            </div>

        );
    }
}



export default AddStaff;