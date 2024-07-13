import Employee from "./Employee"

export default interface Payroll {
    id: string
    checkin: string
    checkout: string
    employeeId: string
    employee: Employee
}