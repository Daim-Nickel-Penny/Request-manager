import { create } from "zustand";

import { type RequestInput } from "~/types/request-input";
import { type ServerResponseType } from "~/types/server-response-type";

interface RequestManagerStore {
  requestsList: RequestInput[];
  serverResponseList: ServerResponseType[];
  getResponseForReq: (reqId: string) => RequestInput | undefined;
  addRequest: (req: RequestInput) => void;
}

const useRequestManagerStore = create<RequestManagerStore>((set, get) => ({
  requestsList: [],
  serverResponseList: [],

  getResponseForReq: (reqId: string) => {
    const foundData = get().requestsList.find(
      (item: RequestInput) => item.requestId === reqId,
    );

    return foundData;
  },

  addRequest: (req: RequestInput) => {
    set((state) => ({
      ...state,
      requestsList: [...state.requestsList, req],
    }));
  },
}));

export default useRequestManagerStore;
