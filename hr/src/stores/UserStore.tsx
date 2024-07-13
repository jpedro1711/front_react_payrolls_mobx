import User from './models/User';
import IAuthService from '../services/interfaces/IAuthService';
import AuthService from '../services/AuthService';
import { makeAutoObservable } from "mobx"
import IAuthRequest from '../services/requests/IAuthRequest';
import ILoadingStore from './interfaces/ILoadingStore';
import IAlertStore from './interfaces/IAlertStore';

export default class UserStore  {
  user: User | null = null;
  userToken: string | null = null;
  isLogged: boolean | null = null;
    
  authService: IAuthService;

  constructor(loadingStore: ILoadingStore, alertStore: IAlertStore) {
    this.authService = new AuthService(loadingStore, alertStore);
    const userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage) {
        this.isLogged = true
        this.user = JSON.parse(userLocalStorage)
    }
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  setIsAuthenticated(state: boolean) {
    this.isLogged = state;
  }

  getToken() {
    return this.userToken
  }

  getIsLogged() {
    return this.isLogged
  }

  async login(req: IAuthRequest) {
    const response = await this.authService.login(req)
    if (response.status != 400) {
        this.userToken = response.token;
        this.setIsAuthenticated(true)
        await this.getUserInfo() 
    }   
  }

  async register(req: IAuthRequest) {
    await this.authService.register(req)
  }

  async getUserInfo() {
    const user =  await this.authService.getUserInfo();
    this.setUser(user)
  }

  logout() {
    localStorage.removeItem('user');
    this.user = null;
    this.userToken = null,
    this.isLogged = null
  }
}