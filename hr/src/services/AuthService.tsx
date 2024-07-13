import ApiClient from "./api/ApiClient";
import IAuthService from "./interfaces/IAuthService";
import IAuthRequest from "./requests/IAuthRequest";
import ILoadingStore from "../stores/interfaces/ILoadingStore";
import IAlertStore from "../stores/interfaces/IAlertStore";

export default class AuthService implements IAuthService {
    private loadingStore: ILoadingStore;
    private alertStore: IAlertStore;

    constructor(loadingStore: ILoadingStore, alertStore: IAlertStore) {
        this.loadingStore = loadingStore;
        this.alertStore = alertStore;
    }

    async login(request: IAuthRequest) {
        this.loadingStore.setLoading(true);
        try {
            const result = await ApiClient.post('/Auth/login', request);
            this.alertStore.setAlert('Login realizado com sucesso', true);
            return result.data;
        } catch (error: any) {
            this.alertStore.setAlert('Erro de login', false);
            return error.response;
        } finally {
            this.loadingStore.setLoading(false);
        }
    }

    async register(request: IAuthRequest) {
        this.loadingStore.setLoading(true);
        try {
            const result = await ApiClient.post('/Auth/register', request);
            this.alertStore.setAlert('Cadastro realizado com sucesso', true);
            return result.data;
        } catch (error: any) {
            this.alertStore.setAlert('Erro de cadastro', false);
            return error.response;
        } finally {
            this.loadingStore.setLoading(false);
        }
    }

    async getUserInfo() {
        try {
            const result = await ApiClient.get('/Auth/GetCurrentUser');
            return result.data;
        } catch (error: any) {
            this.alertStore.setAlert('Erro ao buscar dados do usuário', false);
        }
    }
}
