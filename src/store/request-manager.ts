import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type RequestInput } from "~/types/request-input";
import { type ServerResponseType } from "~/types/server-response-type";

type PreviousData = {
  request: RequestInput;
  response: ServerResponseType;
};

interface RequestManagerStore {
  isLoading: boolean;
  requestsList: RequestInput[];
  serverResponseList: ServerResponseType[];
  setIsLoading: () => void;
  getResponseForReq: (reqId: string) => RequestInput | undefined;
  addRequest: (req: RequestInput) => void;
  addServerResponse: (res: ServerResponseType) => void;
  getLatestResponse: () => ServerResponseType | undefined;
  getPreviousData: () => PreviousData[] | [];
}

const useRequestManagerStore = create<RequestManagerStore>()(
  persist(
    (set, get) => ({
      isLoading: false,
      requestsList: [],
      serverResponseList: [],

      setIsLoading: () => {
        set((state) => ({
          isLoading: !state.isLoading,
        }));
      },

      getResponseForReq: (reqId: string) => {
        const foundData = get().requestsList.find(
          (item: RequestInput) => item.requestId === reqId,
        );
        return foundData;
      },

      getLatestResponse: () => {
        const data = get().serverResponseList;
        if (!data) {
          return undefined;
        }
        return data[data.length - 1];
      },

      addRequest: (req: RequestInput) => {
        set((state) => ({
          ...state,
          requestsList: [...state.requestsList, req],
        }));
      },

      addServerResponse: (res: ServerResponseType) => {
        set((state) => ({
          ...state,
          serverResponseList: [...state.serverResponseList, res],
        }));
      },

      getPreviousData: () => {
        const allReq = get().requestsList;
        const allRes = get().serverResponseList;

        const previousData: PreviousData[] = allReq
          .map((req, index) => {
            const response = allRes[index];
            if (response) {
              return {
                request: req,
                response: response,
              };
            }
            return null;
          })
          .filter((item) => item !== null) as PreviousData[];

        return previousData;
      },
    }),
    {
      name: "request-manager-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useRequestManagerStore;
