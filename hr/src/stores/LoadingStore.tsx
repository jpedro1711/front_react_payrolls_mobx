import { makeAutoObservable } from "mobx";

export default class LoadingStore {
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setLoading(loading: boolean) {
        this.isLoading = loading;
    }
}

