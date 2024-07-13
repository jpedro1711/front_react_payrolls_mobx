import { createContext, useContext } from "react";
import UserStore from "./UserStore";
import AlertStore from "./AlertStore";
import LoadingStore from "./LoadingStore";
import PayrollStore from "./PayrollStore";

interface BaseStore {
    userStore: UserStore;
    alertStore: AlertStore;
    loadingStore: LoadingStore;
    payrollStore: PayrollStore
}

const alertStore = new AlertStore();
const loadingStore = new LoadingStore();

const userStore = new UserStore(loadingStore, alertStore);
const payrollStore = new PayrollStore(loadingStore, alertStore);

export const BaseStore: BaseStore = {
    userStore,
    alertStore,
    loadingStore,
    payrollStore
};

export const storeContext = createContext(BaseStore);

export default function useStores() {
    return useContext(storeContext);
}