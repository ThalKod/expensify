import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export class LoginPage extends React.Component {

    render(){
        const { startLogin } = this.props;

        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <p>Manage your expenses...</p>
                    <button className="button button--login" onClick={startLogin}>Login with Google</button>
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch)=>({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);