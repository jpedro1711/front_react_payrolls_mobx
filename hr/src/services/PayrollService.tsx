import IAlertStore from "../stores/interfaces/IAlertStore";
import ILoadingStore from "../stores/interfaces/ILoadingStore";
import ApiClient from "./api/ApiClient";
import IPayrollService from "./interfaces/IPayrollService";
import IRegisterCheckinOrCheckoutRequest from "./requests/IRegisterCheckinOrCheckoutRequest";

export default class PayrollService implements IPayrollService {
    private loadingStore: ILoadingStore;
    private alertStore: IAlertStore;

    constructor(loadingStore: ILoadingStore, alertStore: IAlertStore) {
        this.loadingStore = loadingStore;
        this.alertStore = alertStore;
    }

    async getPayrolls(employeeName: string) {
        this.loadingStore.setLoading(true);
        try {
            const result = await ApiClient.get('/Employee/get-payrolls?EmployeeUniqueName=' + employeeName);
            return result.data;
        } catch (error: any) {
            this.alertStore.setAlert('Erro ao buscar payrolls do funcionário', false);
            console.log(error)
            return error.response;
        } finally {
            this.loadingStore.setLoading(false);
        }
    }

    async saveNew(request: IRegisterCheckinOrCheckoutRequest) {
        this.loadingStore.setLoading(true);
        try {
            const result = await ApiClient.post('/Employee/',  request);
            return result.data;
        } catch (error: any) {
            this.alertStore.setAlert('Erro ao buscar payrolls do funcionário', false);
            console.log(error)
            return error.response;
        } finally {
            this.loadingStore.setLoading(false);
        }
    }
    
}