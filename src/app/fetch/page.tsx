import ServerResponse from "~/components/server-response";
import RequestImport from "./_components/request-input";

const FetchPage = () => {
  return (
    <div className="flex flex-col gap-4 p-9">
      <RequestImport />
      <div>
        <ServerResponse />
      </div>
    </div>
  );
};

export default FetchPage;
