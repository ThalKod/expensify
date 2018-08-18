import React from "react";
import { connect } from "react-redux";
import { startLoginGoogle, startLoginGithub } from "../actions/auth";

export class LoginPage extends React.Component {

    render(){
        const { startLoginGoogle, startLoginGithub } = this.props;

        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <p>Manage your expenses...</p>
                    <button className="button button--login" onClick={startLoginGoogle}>Login with Google</button>
                    <button className="button button--login" onClick={startLoginGithub}>Login with Github</button>
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch)=>({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginGithub: () => dispatch(startLoginGithub()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);