import IAuthRequest from "../requests/IAuthRequest";

export default interface IAuthService {
    login(request: IAuthRequest): any
    register(request: IAuthRequest): any
    getUserInfo(): any
}