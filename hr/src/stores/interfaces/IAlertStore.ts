export default interface IAlertStore {
    setAlert(message: string, sucess: boolean): any,
    clearAlert(): any
}