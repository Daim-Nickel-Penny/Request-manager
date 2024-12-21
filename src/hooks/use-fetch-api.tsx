import { useQuery } from "@tanstack/react-query";

const fetchWrapper = async (url: string) => {
  const res = await fetch(url);
  const data: unknown = await res.json();
  return data;
};

function useFetchApi({ url }: { url: string | null }) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["fetch", url],
    queryFn: async () => await fetchWrapper((url = "")),
  });

  return { isLoading, data, error };
}

export default useFetchApi;
