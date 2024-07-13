import { createContext, useContext } from "react";
import UserStore from "./UserStore";
import AlertStore from "./AlertStore";
import LoadingStore from "./LoadingStore";

interface BaseStore {
    userStore: UserStore;
    alertStore: AlertStore;
    loadingStore: LoadingStore
}

const alertStore = new AlertStore();
const loadingStore = new LoadingStore();

const userStore = new UserStore(loadingStore, alertStore);

export const BaseStore: BaseStore = {
    userStore,
    alertStore,
    loadingStore,
};

export const storeContext = createContext(BaseStore);

export default function useStores() {
    return useContext(storeContext);
}