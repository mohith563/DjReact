import * as actionTypes from "./actionType"
import axios from "axios"

export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type:actionTypes.AUTH_SUCCESS,
        token:token
    }
}

export const authFail = error => {
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    }
}

export const checkAuthTimeOut = expirationDate => {
    return dispatch => { 
        setTimeout(() => {
            dispatch(logout())
        }, expirationDate*1000)
    }
}

export const logout = () => {
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('user')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authLogin = (username,password) => {
    return dispatch => {
        dispatch(authStart())
        axios.post("http://127.0.0.1:8000/rest-auth/login/",{
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key
            const expirationDate = new Date(new Date().getTime()+3600*1000)
            localStorage.setItem('expirationDate',expirationDate)
            localStorage.setItem('token',token)
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeOut(3600))
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (username,email,password1,password2) => {
    return dispatch => {
        dispatch(authStart())
        axios.post("http://127.0.0.1:8000/rest-auth/registration/",{
            username: username,
            email:email,
            password1:password1,
            password2:password2
        })
        .then(res => {
            const token = res.data.key
            const expirationDate = new Date(new Date().getTime()+3600*1000)
            localStorage.setItem('expirationDate',expirationDate)
            localStorage.setItem('token',token)
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeOut(3600))
        })
        .catch(err => {
            console.log(err)
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(localStorage.getItem('token') === undefined){
            dispatch(logout())
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationDate<=new Date()){
                dispatch(logout())
            }else{
                dispatch(authSuccess(token))
                dispatch(checkAuthTimeOut((expirationDate.getTime()-new Date().getTime())/1000))
            }
        }
    }
}