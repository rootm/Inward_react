import React from 'react';
import './css/Staff.css';


class ViewStaff extends React.Component {
    state = {
        employees: [],
        name:'',
    };




    getEmployees = async () => {
        await fetch('http://localhost:8083/employee/')
            .then((res) => res.json())
            .then((response) => {

                this.setState({
                    employees: response.data
                });
                console.log(this.state.employees);

            });
    };

    getEmployee = async () => {
        await fetch('http://localhost:8083/employee/search/' + this.state.name)
            .then((res) => res.json())
            .then((response) => {

                this.setState({
                    employees: response.data
                });
                console.log('search '+this.state.name);

            });
    };

    getEmployeeTable = () => {
        const HTMLarray = [];
        let index = 1;

        for (let employee of this.state.employees) {
            HTMLarray.push(
                <tr className="employee-table-row">
                    <td className="employee-num-column">{index}</td>
                    <td className="employee-id">{employee.employeeId}</td>
                    <td className="employee-name">{employee.firstName} {employee.lastName}</td>
                    <td className="employee-designation">{employee.designation}</td>
                    <td className="employee-mobile">{employee.mobile}</td>
                    <td className="employee-edit">
                        <button type="button" name="employee-view" className="staff-view-button">Edit</button>
                    </td>
                </tr>
            );
            index++;
        }

        return HTMLarray;
    };

    constructor() {
        super();
        this.getEmployees();

    }


    handleNameChange = event => {
        console.log('xxx');
        console.log(event.target.value);
        this.setState({name: event.target.value});
    };

    render() {
        const {classes} = this.props;

        return (

            <div className="full-settings-sub">
                <form action="">
                    <div className="setting-head">Staff Information</div>
                    <form>
                        <div className="settings-items">

                            <div>
                                <div className="setting-item-label">Search Employee</div>
                                <input type="text" name="employee_name_search" placeholder="Name" onChange={this.handleNameChange}/>

                            </div>
                            <div>
                                <button type="button" name="employee_search" className="staff-search-button"
                                        onClick={() => this.getEmployee()}>Search
                                </button>
                                <button type="button" name="employee_search_name" className="staff-search-button" onClick={() => this.getEmployees()}>View
                                    All
                                </button>
                            </div>


                        </div>
                    </form>
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
                            {this.getEmployeeTable()}

                        </table>


                    </div>


                </form>
            </div>

        );
    }
}


export default ViewStaff;