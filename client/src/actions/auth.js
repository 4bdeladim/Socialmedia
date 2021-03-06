import swal from 'sweetalert';
import * as api from '../api'
export const LoginToAccount = (username, password) => async(dispatch) => {
    try {
        dispatch({type: "LOADING"})
        const { data } = await api.login(username, password)
        dispatch({type: "LOGIN_SUCCESS", payload: data})
    } catch (error) {
        dispatch({type: "LOGIN_ERROR"})
        swal(error.response.data.msg, "", "error")
    }
}

export const RegisterAccount = (name, username, email, password) => async(dispatch) => {
    try {
        dispatch({type: "LOADING"})
        const { data } = await api.register(name, username,email, password)
        dispatch({type: "REGISTER_SUCCESS"})
        swal(data.message, "", "success")
    } catch(error) {
        dispatch({type: "REGISTER_ERROR"})
        swal(error.response.data.message, "", "error")
       
    }
}

export const AuthCheck = () => async(dispatch) => {
    try {
        dispatch({type: "LOADING"})
        const { data } = await api.auth()
        dispatch({type: "LOGIN_SUCCESS", payload: data})
    } catch (error) {
        dispatch({type: "LOGIN_ERROR"})
    }
}

export const LoginToAccountGoogle = (token) => async(dispatch) => {
    try {
        dispatch({type: "LOADING"})
        const { data } = await api.loginwithgoogle(token)
        dispatch({type: "LOGIN_SUCCESS", payload: data})
    } catch (error) {
        dispatch({type: "LOGIN_ERROR"})
        swal(error.response.data.msg, "", "error")
    }
}

export const Logout = () => async (dispatch) => {
    try {
        const { data } = await api.logout()
        dispatch({type: "LOGOUT"})
    } catch (error) {
        dispatch({type: "LOGOUT_ERROR"})
        swal("somthing went wrong", "", "error")
    }
}