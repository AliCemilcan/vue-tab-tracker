import Api from './api'

//export an object which has register method 
export default {
    register(credentials) {
        return Api().post('register', credentials)
    }
}

// AuthenticationService.register({email:'test@gmail', password:'123'})