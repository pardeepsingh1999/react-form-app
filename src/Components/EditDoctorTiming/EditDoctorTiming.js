import React, { Component } from 'react'
import { Button } from 'reactstrap';

import classes from './EditDoctorTiming.module.css';
// import { makeGetRequest } from '../../http/http-service';

export default class EditDoctorTiming extends Component {

    state = {

    }

    _handleAddTimingdd = () => {
        console.log('work')
    }

    render() {
    
        return (
            <div className="container">
                <h3 className={classes.HeaderText}>Edit Work Timings</h3>
                <hr />

                <div className={classes.doctorTimingForm}>
                    <div>
                        <label className={classes.childDays}>
                            Monday
                        </label>
                        <Button onClick={this._handleAddTimingdd}
                        className={[classes.addTimeBtn,'float-right'].join(' ')}>
                            <i className="fas fa-plus"></i>
                        </Button>
                        <hr />
                    </div>
                    
                    <div>
                        <label className={classes.childDays}>
                            Tuesday
                        </label>
                        <Button onClick={this._handleAddTimingdd} 
                        className={[classes.addTimeBtn,'float-right'].join(' ')}>
                            <i className="fas fa-plus"></i>
                        </Button>
                        <hr />
                    </div>
                    
                    <div>
                        <label className={classes.childDays}>
                            Wednesday
                        </label>
                        <Button onClick={this._handleAddTimingdd} 
                        className={[classes.addTimeBtn,'float-right'].join(' ')}>
                            <i className="fas fa-plus"></i>
                        </Button>
                        <hr />
                    </div>

                    <div>
                        <label className={classes.childDays}>
                            Thursday
                        </label>
                        <Button onClick={this._handleAddTimingdd} 
                        className={[classes.addTimeBtn,'float-right'].join(' ')}>
                            <i className="fas fa-plus"></i>
                        </Button>
                        <hr />
                    </div>
                    
                    <div>
                        <label className={classes.childDays}>
                            Friday
                        </label>
                        <Button onClick={this._handleAddTimingdd} 
                        className={[classes.addTimeBtn,'float-right'].join(' ')}>
                            <i className="fas fa-plus"></i>
                        </Button>
                        <hr />
                    </div>               

                    <div>
                        <label className={classes.childDays}>
                            Saturday
                        </label>
                        <Button onClick={this._handleAddTimingdd} 
                        className={[classes.addTimeBtn,'float-right'].join(' ')}>
                            <i className="fas fa-plus"></i>
                        </Button>
                        <hr />
                    </div>               
                    
                    <div>
                        <label className={classes.childDays}>
                            Sunday
                        </label>
                        <Button onClick={this._handleAddTimingdd} 
                        className={[classes.addTimeBtn,'float-right'].join(' ')}>
                            <i className="fas fa-plus"></i>
                        </Button>
                        <hr />
                    </div>
                
                </div>
            </div>
        )
    }
}
