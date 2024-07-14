import { makeAutoObservable } from "mobx";

export default class ModalStore {
    isOpen: boolean = false;
    title: string = ''
    message: string = ''

    constructor() {
        makeAutoObservable(this);
    }

    openModal(title: string, message: string) {
        this.title = title,
        this.message = message,
        this.isOpen = true;
    }

    closeModal() {
        this.title = '',
        this.message = '',
        this.isOpen = false;
    }
}

