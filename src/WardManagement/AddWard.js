import React from 'react';
import './css/Ward.css';


class AddWard extends React.Component {
    state = {
        ward_name: '',
        ward_description: '',
        gender: '',
        ward_category: '',
        bed_category: null,
        bed_count_add: 0,
        beds: [],

    };

    findInBeds(category) {
        return this.state.beds.find(function (obj) { return obj.category === category; });
    }

    findInBedsIndex(category) {
        return this.state.beds.findIndex(function (obj) { return obj.category === category; });
    }

    addToBedArray = (event) => {
        console.log(this.state.bed_category);

        if (this.state.bed_category != null && this.state.bed_count_add != 0) {
            var bed =this.findInBeds(this.state.bed_category);
            console.log(bed);
            if(bed == undefined){
                this.state.beds.push({category: this.state.bed_category, count: this.state.bed_count_add});
            }else{
                bed.count=parseInt(this.state.bed_count_add,10)+parseInt(bed.count,10);;
            }


        }
        this.setState({
            beds:this.state.beds
        });

        console.log(this.state.beds);
    };

    removeFromBedArray = (key) => {
        const index =  this.findInBedsIndex(key);

        if (index !==-1){
            this.state.beds.splice(index,1);
            this.setState({
                beds:this.state.beds
            });
        }

    };

    getBedTable = () => {
        console.log('ttt');
        const HTMLarray = [];
        let index = 1;

        for (let bed of this.state.beds) {
            console.log('///??');
            HTMLarray.push(
                <tr className="beds-table-row">
                    <td className="beds-num-column">{index}</td>
                    <td className="beds-category-column">{bed.category}</td>
                    <td className="beds-count-column">{bed.count}</td>
                    <td className="beds-remove-column"><div  className="item-remove-button" onClick={() => this.removeFromBedArray(bed.category)} >
                        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.78 469.79">

                            <path className="cls-1" d="M285.37,234.69l174-174a35.55,35.55,0,0,0-50.28-50.28l-174,174-174-174A35.55,35.55,0,0,0,10.81,60.7l174,174L10.42,409.09A35.55,35.55,0,1,0,60.7,459.36L235.09,285l174,174a35.55,35.55,0,0,0,50.28-50.28Z"
                                  transform="translate(0 0)" />
                        </svg>
                    </div></td>
                </tr>
            );
            index++;
        }

        return HTMLarray;
    };

    handleChange = event => {

        console.log([event.target.name] + ' ' + event.target.value);

        this.setState({[event.target.name]: event.target.value});


    };



    render() {
        const {classes} = this.props;

        return (

            <div className="settings-sub">
                <form action="">
                    <div className="setting-head">Ward Information</div>

                    <div className="settings-item">
                        <div className="setting-item-label">Ward Name</div>
                        <input type="text" name="ward_name" onChange={this.handleChange}/>
                    </div>


                    <div className="settings-item">
                        <div className="setting-item-label">Ward Descrption</div>
                        <input type="text" name="ward_description" onChange={this.handleChange}/>

                    </div>
                    <div className="settings-items">

                            <span className="gender-group">
                                <div className="setting-item-label">Ward Type</div>
                                <span>
                                <span><input type="radio" name="gender" value="male" id="maleR"
                                             onChange={this.handleChange}/> <label
                                    htmlFor="maleR">Male</label></span>
                                <span><input type="radio" name="gender" value="female" id="femaleR"
                                             onChange={this.handleChange}/><label
                                    htmlFor="femaleR">Female</label></span>
                                </span>
                            </span>
                        <div>
                            <div className="setting-item-label">Ward Category</div>
                            <select className="combo" name="ward_category" onChange={this.handleChange}>
                                <option>xxx1</option>
                                <option>xxx2</option>
                                <option>xxx3</option>
                            </select>
                        </div>
                    </div>

                    <div className="setting-head add-margin">Bed Information</div>

                    <div className="settings-items">

                        <div>
                            <div className="setting-item-label">Bed Category</div>
                            <select className="combo" name="bed_category" onChange={this.handleChange}>
                                <option>xxx1</option>
                                <option>xxx2</option>
                                <option>xxx3</option>
                            </select>
                        </div>
                        <div>
                            <div className="setting-item-label">Bed Count</div>
                            <input type="number" name="bed_count_add" min="1" defaultValue={1}
                                   onChange={this.handleChange}/>
                        </div>
                        <div>
                            <button type="button" name="add_bed" className="bed-add-button"
                                    onClick={this.addToBedArray}>Add Bed
                            </button>
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
                            {this.getBedTable()}
                        </table>


                    </div>


                    <button type="button" name="ward_save" className="staff-button">Save Details</button>
                </form>
            </div>

        );
    }
}


export default AddWard;