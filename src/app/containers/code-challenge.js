import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { saveData, resetValidationMessage } from '../actions';
import { validate } from '../utils/api';
import constants from '../utils/constant';

let self;

class CodeChallenge extends Component {
    constructor(props) {
        super(props);
        this.state = { isValid: false, stage1: false, stage2: '', inputText: '', stage3: '', stage4: ''};
        self = this;
    }

    onSubmitData(event) {
        event.preventDefault();
        const userData = {
            a: [],
            b: this.state.stage2,
            username: this.state.stage3,
            c: this.state.stage4
        };

        this.state.stage1_1 && userData.a.push(this.state.stage1_1);
        this.state.stage1_2 && userData.a.push(this.state.stage1_2);

        this.props.actions.saveData(userData);
    }

    onChangeInput(event) {
        const target = event.target;
        const name = target.name;

        self.setState({
            [name]: target.value
        });
    }

    confirmInputValue() {
        self.setState({stage3: self.state.inputText});
    }

    validateInputValue(e) {
        self.setState({inputText: e.target.value});
        validate(e.target.value).then(() => {
            self.setState({isValid: true});
        });
    }

    renderAlertMessage() {
        let successMsg;
        let errorMsg;
        const info =  this.props.message.info;

        if(info && info.type === constants.ERROR_MESSAGE.type) {
            errorMsg = info.message;
        } else if(info && info.type === constants.SUCCESS_MESSAGE.type) {
            successMsg = info.message;
        }

        const alertMessage = errorMsg || successMsg;
        const alertCls = classNames('alert', { 'alert-success': successMsg, 'alert-danger': errorMsg });

        return (<div className={alertCls} role="alert">{ alertMessage }</div>);
    }

    render() {
        const stage1 = this.state.stage1_1 || this.state.stage1_2;
        const stage2 = stage1 && this.state.stage2;
        const stage3 = stage2 && this.state.stage3;
        const stage4 = stage3 && this.state.stage4;
        return (
            <section className="challenge">
                <section className="challenge-form-wrapper col-sm-10 col-md-10 col-lg-8">
                    <form className="challenge-form" ref="challengeForm" onSubmit={ (event) => this.onSubmitData(event) }>
                        <div className="getting-started">
                            <h3>{constants.HEADING}</h3>
                        </div>
                        { this.renderAlertMessage() }
                        <div className="form-element row stage1 col-12">
                            <label className="col-6" htmlFor="stage1">{constants.STAGE_1}</label>
                            <div className="col-6">
                                <input className="col-6" name="stage1_1" type="checkbox" value="A1" checked={this.state.stage1_1 === 'A1'} onChange={this.onChangeInput} />
                                <input className="col-6" name="stage1_2" type="checkbox" value="A2" checked={this.state.stage1_2 === 'A2'} onChange={this.onChangeInput} />
                            </div>
                        </div>
                        {
                            stage1 &&
                            <div className="form-element row stage2 col-12">
                                <label className="col-6">{constants.STAGE_2}</label>
                                <div className="col-6">
                                    <input name="stage2" className="col-6" type="radio" value="B1" checked={this.state.stage2 === 'B1'} onChange={this.onChangeInput} />
                                    <input name="stage2" className="col-6" type="radio" value="B2" checked={this.state.stage2 === 'B2'} onChange={this.onChangeInput} />
                                </div>
                            </div>
                        }
                        {
                            stage2 &&
                            <div className="form-element row stage3 col-12">
                                <label className="col-6" htmlFor="stage3">{constants.STAGE_3}</label>
                                <div className="row col-6">
                                    <div className="col-7">
                                        <input type="text" ref="stage3" className="form-control form-control-md" id="stage3" value={this.state.inputText} required onChange={this.validateInputValue}/>
                                    </div>
                                    <div className="col-5">
                                        <button type="button" className="btn btn-primary" disabled={!this.state.isValid} onClick={this.confirmInputValue}>{constants.CONTINUE}</button>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            stage3 &&
                            <div className="form-element row stage4 col-12">
                                <label className="col-6" htmlFor="stage4">{constants.STAGE_4}</label>
                                <div className="col-6">
                                    <select name="stage4" className="form-control form-control-md col-6" ref="stage4" value={this.state.stage4} onChange={this.onChangeInput}>
                                        <option value=""></option>
                                        <option value="C1">C1</option>
                                        <option value="C2">C2</option>
                                        <option value="C3">C3</option>
                                    </select>
                                </div>
                            </div>
                        }
                        {
                            stage4 &&
                            <div className="form-element row stage5 col-12">
                                <label className="col-6" htmlFor="stage3">{constants.STAGE_5}</label>
                                <div className="row col-6">
                                    <div className="col-12">
                                        <button className="btn btn-primary col-6" type="submit">{constants.CONTINUE}</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </form>
                </section>
            </section>
        );
    }
}

CodeChallenge.propTypes = {
    message: React.PropTypes.object,
    actions: React.PropTypes.object
};

function mapStateToProps(state) {
    return {
        ...state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            saveData,
            resetValidationMessage
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeChallenge);
