import IRegisterCheckinOrCheckoutRequest from "../requests/IRegisterCheckinOrCheckoutRequest"

export default interface IPayrollService {
    getPayrolls(employeeName: string): any
    saveNew(employeeName: IRegisterCheckinOrCheckoutRequest): any
}