import React from 'react';
import './css/Staff.css';


class ViewStaff extends React.Component {
    state = {
        name: 'Composed TextField',
    };

    handleChange = event => {
        this.setState({name: event.target.value});
    };

    render() {
        const {classes} = this.props;

        return (

            <div className="full-settings-sub">
                <form action="">
                    <div className="setting-head">Staff Information</div>
                    <div className="settings-items">
                        <div>
                            <div className="setting-item-label">Search Employee</div>
                            <input type="text" name="employee_name_search" placeholder="Name"/>

                        </div>
                        <div>
                            <button type="button" name="employee_search" className="staff-search-button">Search</button>
                            <button type="button" name="employee_search_name" className="staff-search-button">View All</button>
                        </div>
                    </div>

                    <div className="settings-item">


                        <table className="beds-table">
                            <tr className="beds-table-row">
                                <th className="employee-num-column">#</th>
                                <th className="employee-id">Employee ID</th>
                                <th className="employee-name">Employee Name</th>
                                <th className="employee-designation">Designation</th>
                                <th className="employee-mobile">Mobile Details</th>
                                <th className="employee-edit"> </th>
                            </tr>
                            <tr className="employee-table-row">
                                <td className="employee-num-column">1</td>
                                <td className="employee-id">Employee ID</td>
                                <td className="employee-name">Employee Name</td>
                                <td className="employee-designation">Designation</td>
                                <td className="employee-mobile">Mobile Number</td>
                                <td className="employee-edit"><button type="button" name="employee-view" className="staff-view-button">Edit</button></td>
                            </tr>

                        </table>


                    </div>



                </form>
            </div>

        );
    }
}


export default ViewStaff;