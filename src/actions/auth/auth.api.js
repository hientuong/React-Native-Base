import axios from 'axios'
import config from '../../utils/config'
import { handleTokenErrors } from '../error/error.service'

class AuthApi {
    static login(email, password) {
        return axios.post(`${config.url}/users/signin?email=${email}&password=${password}`)
            .then(response => response.data)
            // .then(handleTokenErrors)
            .catch(error => {
                throw error
            })
    }
}
export default AuthApi