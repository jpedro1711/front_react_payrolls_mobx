import { makeAutoObservable } from "mobx";

export default class AlertStore {
    message: string | null = null;
    success: boolean = false;
    open = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAlert(message: string, sucess: boolean) {
        this.success = sucess
        this.open = true;
        this.message = message;
    }

    clearAlert() {
        this.open = false;
        this.message = null;
    }
}
