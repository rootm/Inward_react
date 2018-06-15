import React from 'react';
import './css/Ward.css';


class EditWardBeds extends React.Component {
    state = {
        name: 'Composed TextField',
    };

    handleChange = event => {
        this.setState({name: event.target.value});
    };

    render() {
        const {classes} = this.props;

        return (

            <div>
                <div className="settings-sub">
                    <form action="">
                        <div className="setting-head">Add New Beds To Ward</div>

                        <div className="settings-item">
                            <div className="setting-item-label">Ward Name</div>
                            <select className="combo" name="ward_name">
                                <option>xxx</option>
                                <option>xxx</option>
                                <option>xxx</option>
                            </select>
                        </div>


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
                                <button type="button" name="add_bed" className="bed-add-button">Add to ward</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="settings-sub">
                    <form action="">
                        <div className="setting-head">Remove Beds From Ward</div>

                        <div className="settings-item">
                            <div className="setting-item-label">Ward Name</div>
                            <select className="combo" name="ward_name">
                                <option>xxx</option>
                                <option>xxx</option>
                                <option>xxx</option>
                            </select>
                        </div>


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
                                <div className="setting-item-label">Bed Name</div>
                                <select className="combo" name="bed_name">
                                    <option>xxx</option>
                                    <option>xxx</option>
                                    <option>xxx</option>
                                </select>
                            </div>
                            <div>
                                <button type="button" name="add_bed" className="bed-delete-button">Delete from ward</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}


export default EditWardBeds;