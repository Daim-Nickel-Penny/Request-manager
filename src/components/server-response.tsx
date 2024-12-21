import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { SkeletonCard } from "./skeleton-card";

const ServerResponse = () => {
  return (
    <Card className="w-[950px] p-8">
      <CardHeader>
        <CardTitle>Response</CardTitle>
        <CardDescription className="select-none font-mono text-green-500">
          GET
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          {`
[
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ]
            `}
        </div>
      </CardContent>
      <CardFooter className="select-none text-sm font-normal text-gray-200/50">
        {`200 ms`}
      </CardFooter>
      {/* <SkeletonCard /> */}
    </Card>
  );
};

export default ServerResponse;
