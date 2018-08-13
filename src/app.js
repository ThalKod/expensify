import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { startSetExpenses } from "./actions/expenses";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "../src/store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/initialize';
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
import { firebase } from "./firebase/firebase";


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasrendered = false;
const renderApp = () => {
    if(!hasrendered){
        ReactDOM.render(jsx, document.getElementById("app"));
        hasrendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname === "/"){
                history.push("/dashboard");
            }
        });
    }else{
        renderApp();
        history.push("/");
    }
});


