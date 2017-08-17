import * as React from "react";
import { connect } from "react-redux";
import { appActions } from "./actions";
import { FormattedMessage } from "react-intl";

interface Appprops {
    appInit: Function;
}

class App extends React.Component<any, {}> {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.appInit(true);
    }
    render() {
        return (
            <div>
                <p> HELOO</p>
                <FormattedMessage id={"app.status"} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    appInit: (value: boolean) => dispatch(new appActions.appInit(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
