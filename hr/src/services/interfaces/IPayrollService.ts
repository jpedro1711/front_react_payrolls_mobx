import IRegisterCheckinOrCheckoutRequest from "../requests/IRegisterCheckinOrCheckoutRequest"

export default interface IPayrollService {
    getPayrolls(employeeName: string, pageNumber: number, pageSize: number): any
    saveNew(employeeName: IRegisterCheckinOrCheckoutRequest): any
    calculatePayroll(employeeName: string, year: number, month: number): any
}