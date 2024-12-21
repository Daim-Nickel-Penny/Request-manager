import { Skeleton } from "~/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[750px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[550px]" />
        <Skeleton className="h-4 w-[500px]" />
      </div>
    </div>
  );
}