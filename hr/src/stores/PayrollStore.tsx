import { action, observable } from "mobx";
import PayrollService from "../services/PayrollService";
import IRegisterCheckinOrCheckoutRequest from "../services/requests/IRegisterCheckinOrCheckoutRequest";
import IAlertStore from "./interfaces/IAlertStore";
import ILoadingStore from "./interfaces/ILoadingStore";
import Payroll from "./models/Payroll";
import IPaginationOptions from "../services/interfaces/IPaginationOptions";

export default class PayrollStore {
  @observable accessor payrolls: Array<Payroll> = [];
  @observable accessor paginationOptions: IPaginationOptions | null = null;

  payrollService: PayrollService;

  constructor(loadingStore: ILoadingStore, alertStore: IAlertStore) {
    this.payrollService = new PayrollService(loadingStore, alertStore);
  }

  @action setPayrolls(payrolls: Array<Payroll>) {
    this.payrolls = payrolls;
  }

  @action setPaginationOptions(options: IPaginationOptions) {
    this.paginationOptions = options;
  }

  async getPayrolls(employeeName: string, pageNumber: number, pageSize: number) {
    const result = await this.payrollService.getPayrolls(employeeName, pageNumber, pageSize);

    this.setPayrolls(result.data);
    this.setPaginationOptions({
      pageNumber: result.pageNumber,
      pageSize: result.pageSize,
      totalItems: result.totalItems,
      totalPages: result.totalPages
    });

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
      var result = await this.getPayrolls(employeeName, this.paginationOptions?.pageNumber || 1, this.paginationOptions?.pageSize || 10);
      this.setPayrolls(result)
    }
  }
}
