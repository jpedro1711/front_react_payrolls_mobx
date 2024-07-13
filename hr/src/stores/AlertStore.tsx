import { makeAutoObservable } from "mobx";

export default class AlertStore {
    message: string | null = null;
    open = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAlert(message: string) {
        this.open = true;
        this.message = message;
    }

    clearAlert() {
        this.open = false;
        this.message = null;
    }
}
