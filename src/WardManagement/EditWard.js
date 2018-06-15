import React from 'react';
import './css/Ward.css';


class EditWard extends React.Component {
    state = {
        name: 'Composed TextField',
    };

    handleChange = event => {
        this.setState({name: event.target.value});
    };

    render() {
        const {classes} = this.props;

        return (

            <div className="settings-sub">
                <form action="">
                    <div className="setting-head">Change Ward Information</div>

                    <div className="settings-item">
                        <div className="setting-item-label">Ward Name</div>
                        <input type="text" name="ward_name" value="xx" readOnly disabled="true"/>
                    </div>


                    <div className="settings-item">
                        <div className="setting-item-label">Ward Descrption</div>
                        <input type="text" name="ward_description"/>

                    </div>
                    <div className="settings-items">

                            <span className="gender-group">
                                <div className="setting-item-label">Ward Type</div>
                                <span>
                                <span><input type="radio" name="gender" value="male" id="maleR"/> <label
                                    htmlFor="maleR">Male</label></span>
                                <span><input type="radio" name="gender" value="female" id="femaleR"/><label
                                    htmlFor="femaleR">Female</label></span>
                                </span>
                            </span>
                        <div>
                            <div className="setting-item-label">Ward Category</div>
                            <select className="combo" name="ward_category">
                                <option>xxx</option>
                                <option>xxx</option>
                                <option>xxx</option>
                            </select>
                        </div>
                    </div>

                    <div className="setting-head add-margin">Bed Information</div>

                    <div className="settings-items">
                        <div>
                            <div className="setting-item-label">Bed Category</div>
                            <select className="combo" name="bed_category">
                                <option>xxx</option>
                                <option>xxx</option>
                                <option>xxx</option>
                            </select>
                        </div>
                        <div>
                            <div className="setting-item-label">Bed Count</div>
                            <input type="number" name="bed_count_add" min="1" value="1"/>
                        </div>
                        <div>
                            <button type="button" name="add_bed" className="bed-add-button">Add Bed</button>
                        </div>
                    </div>

                    <div className="settings-item">
                        <div className="setting-item-label">Beds Added</div>

                        <table className="beds-table">
                            <tr className="beds-table-row">
                                <th className="beds-num-column">#</th>
                                <th className="beds-category-column">Bed Category</th>
                                <th className="beds-count-column">Bed Count</th>
                                <th className="beds-remove-column"></th>
                            </tr>
                            <tr className="beds-table-row">
                                <td className="beds-num-column">#</td>
                                <td className="beds-category-column">Bed Category</td>
                                <td className="beds-count-column"><input type="number" name="bed_count"  min="1" /></td>
                                <td className="beds-remove-column">x</td>
                            </tr>
                            <tr className="beds-table-row">
                                <td className="beds-num-column">#</td>
                                <td className="beds-category-column">Bed Category</td>
                                <td className="beds-count-column">Bed Count</td>
                                <td className="beds-remove-column">x</td>
                            </tr>
                        </table>


                    </div>


                    <button type="button" name="ward_save" className="staff-button">Update Details</button>
                    <button type="button" name="ward_delete" className="staff-delete-button">Delete Details</button>
                </form>
            </div>

        );
    }
}


export default EditWard;