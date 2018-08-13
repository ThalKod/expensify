import authReducers from "../../reducers/auth";

test("should set uid for login", ()=>{
    const action = {
        type: "LOGIN",
        uid: "339483JJSDNASJASALM"
    };

    const data = authReducers(undefined, action);

    expect(data).toEqual({ uid: action.uid });
});

test("should clear uid for logout", ()=>{
    const action = {
        type: "LOGOUT",
    };

    const data = authReducers(undefined, action);

    expect(data).toEqual({});
});