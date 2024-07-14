import { action, observable } from "mobx";
import PayrollService from "../services/PayrollService";
import IRegisterCheckinOrCheckoutRequest from "../services/requests/IRegisterCheckinOrCheckoutRequest";
import IAlertStore from "./interfaces/IAlertStore";
import ILoadingStore from "./interfaces/ILoadingStore";
import Payroll from "./models/Payroll";

export default class PayrollStore {
  @observable accessor payrolls: Array<Payroll> = [];

  payrollService: PayrollService;

  constructor(loadingStore: ILoadingStore, alertStore: IAlertStore) {
    this.payrollService = new PayrollService(loadingStore, alertStore);
  }

  @action setPayrolls(payrolls: Array<Payroll>) {
    this.payrolls = payrolls;
  }

  async getPayrolls(employeeName: string) {
    const result = await this.payrollService.getPayrolls(employeeName);
    this.setPayrolls(result);
    return result;
  }

  async calculateEmployeeSalary(employeeName: string, month: number, year: number) {
    const result = await this.payrollService.calculatePayroll(employeeName, year, month);
    return result;
  }

  @action async registerNew(employeeName: string | undefined) {
    if (employeeName) {
      var requestData: IRegisterCheckinOrCheckoutRequest = {
        employeeUniqueName: employeeName,
      };
      await this.payrollService.saveNew(requestData);
      var result = await this.getPayrolls(employeeName);
      this.setPayrolls(result)
    }
  }
}
