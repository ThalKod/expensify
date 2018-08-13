import { login, logout } from "../../actions/auth";

test("should setup login action", ()=>{
    const action = login("29930KKSJAKA");
    expect(action).toEqual({
        type: "LOGIN",
        uid: "29930KKSJAKA"
    });
}); 

test("should setup logout action", ()=>{
    const action = logout();
    expect(action).toEqual({
        type: "LOGOUT",
    });
}); 