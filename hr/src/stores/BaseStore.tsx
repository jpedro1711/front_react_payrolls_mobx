import { createContext, useContext } from "react";
import UserStore from "./UserStore";
import AlertStore from "./AlertStore";
import LoadingStore from "./LoadingStore";
import PayrollStore from "./PayrollStore";
import ModalStore from "./ModalStore";

interface BaseStore {
    userStore: UserStore;
    alertStore: AlertStore;
    loadingStore: LoadingStore;
    payrollStore: PayrollStore;
    modalStore: ModalStore
}

const alertStore = new AlertStore();
const loadingStore = new LoadingStore();
const modalStore = new ModalStore();
const userStore = new UserStore(loadingStore, alertStore);
const payrollStore = new PayrollStore(loadingStore, alertStore);

export const BaseStore: BaseStore = {
    userStore,
    alertStore,
    loadingStore,
    payrollStore,
    modalStore
};

export const storeContext = createContext(BaseStore);

export default function useStores() {
    return useContext(storeContext);
}