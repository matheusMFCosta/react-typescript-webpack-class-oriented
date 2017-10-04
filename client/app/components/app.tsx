import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { FormattedMessage } from "react-intl";
import { appStateTypings } from "./../../reducers/index";
import * as actions from "./../actions";
import "./style.css";

interface UserMenuProps {
    button1Status: boolean;
    button2Status: boolean;
    button3Status: boolean;
    inputValue: string;
    errorMessage: string;
    toogleButton1: Function;
    toogleButton2: Function;
    toogleButton3: Function;
    changeinput: Function;
    onForm1SaveButonPress: Function;
    rawAction: Function;
    payloadAction: Function;
    changeReducerAction: Function;
}

class UserMenu extends React.Component<UserMenuProps, {}> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className=" col-md-3 col-sm-3 col-sx-0 " />
                <div className=" col-md-6 col-sm-6 col-sx-12">
                    <div className="panel panel-default">
                        <div className="panel-heading tc">
                            <p>YRNF</p>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className=" col-md-11 col-sm-11">
                                    {/* ------------ Simple explanation -----------------*/}
                                    {/* ---- Simple toogle Button ------- */}
                                    <div className="row pl4 pt2">
                                        <button onClick={() => this.props.rawAction()} type="button" className={"btn btn-success"}>
                                            dispatch rawAction
                                        </button>
                                    </div>

                                    {/* ---- Multiple reducers ------- */}
                                    <div className="row  pl4 pt2">
                                        <button
                                            onClick={() => this.props.payloadAction("algum Valor")}
                                            type="button"
                                            className={"btn btn-success"}
                                        >
                                            dispatch payloadAction
                                        </button>
                                    </div>

                                    {/* ---- Process example  ------- */}
                                    <div className="row  pl4 pt2">
                                        <button
                                            onClick={() => this.props.changeReducerAction("algum Valor")}
                                            type="button"
                                            className={"btn btn-success"}
                                        >
                                            dispatch changeReducerAction
                                        </button>
                                    </div>
                                    <p />
                                    <hr />

                                    {/* -------------Toogle Buttons ------------- */}
                                    {/* ---- Simple toogle Button ------- */}
                                    <div className="row pl4 pt2">
                                        <button
                                            onClick={() => this.props.toogleButton1()}
                                            type="button"
                                            className={"btn " + (this.props.button1Status ? " btn-success" : " btn-warning")}
                                        >
                                            Button1
                                        </button>
                                        <span className=""> Simple toogle Button </span>
                                    </div>

                                    {/* ---- Multiple reducers ------- */}
                                    <div className="row  pl4 pt2">
                                        <button
                                            onClick={() => this.props.toogleButton2()}
                                            type="button"
                                            className={"btn " + (this.props.button2Status ? " btn-success" : " btn-warning")}
                                        >
                                            Button2
                                        </button>
                                        <span className=""> Multiple reducers</span>
                                    </div>

                                    {/* ---- Process example  ------- */}
                                    <div className="row  pl4 pt2">
                                        <button
                                            onClick={() => this.props.toogleButton3()}
                                            type="button"
                                            className={"btn " + (this.props.button3Status ? " btn-success" : " btn-warning")}
                                        >
                                            {this.props.button3Status ? "Button3" : " is Fetching for 3 seconds"}
                                        </button>
                                        <span className=""> Process</span>
                                    </div>
                                    <p />
                                    <hr />

                                    {/* ------------- FORM Example  ---------------- */}
                                    <div className="row">
                                        <p className="pl4"> Validate </p>
                                        <div className=" col-md-11 col-sm-11">
                                            <input
                                                type="text"
                                                className=" bg-light-gray w5 h3 tc"
                                                name="resource"
                                                onChange={(e: any) => this.props.changeinput(e.target.value)}
                                                value={this.props.inputValue}
                                            />
                                            <button
                                                onClick={() => this.props.onForm1SaveButonPress(this.props.inputValue)}
                                                type="button"
                                                className={"btn btn-primary ml4"}
                                            >
                                                apply
                                            </button>
                                        </div>
                                    </div>
                                    {this.props.errorMessage ? (
                                        <div className="red">
                                            <p>Error!:</p>
                                            <p>{this.props.errorMessage}</p>
                                        </div>
                                    ) : (
                                        <span />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-md-1 col-sm-0" />
            </div>
        );
    }
}

const mapStateToProps = (state: appStateTypings, ownProps) => ({
    button1Status: state.button1.buttonStatus,
    button2Status: state.button2.buttonStatus,
    button3Status: state.button3.buttonStatus,
    inputValue: state.form1.inputvalue,
    errorMessage: state.form1.errorMessage
});

const mapDispatchToProps = dispatch => ({
    rawAction: () => dispatch(new actions.rawAction()),
    payloadAction: (value: string) => dispatch(new actions.payloadAction(value)),
    changeReducerAction: (value: string) => dispatch(new actions.changeReducerAction(value)),
    toogleButton1: () => dispatch(new actions.toogleButton1()),
    toogleButton2: () => dispatch(new actions.toogleButton2()),
    toogleButton3: () => dispatch(new actions.toogleButton3()),
    changeinput: (value: string) => dispatch(new actions.changeInput(value)),
    onForm1SaveButonPress: (value: string) => dispatch(new actions.onForm1SaveButonPress(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
