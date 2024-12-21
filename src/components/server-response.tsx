"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { SkeletonCard } from "./skeleton-card";
import useRequestManagerStore from "~/store/request-manager";
import React from "react";

const ServerResponse = () => {
  const { isLoading, getLatestResponse } = useRequestManagerStore();

  return (
    <React.Fragment>
      {!isLoading ? (
        <React.Fragment>
          <Card className="w-[950px] p-8">
            <CardHeader>
              <CardTitle>Response</CardTitle>
              <CardDescription className="select-none font-mono text-green-500">
                GET
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                {getLatestResponse() !== undefined ? (
                  <>{JSON.stringify(getLatestResponse())}</>
                ) : (
                  <></>
                )}
              </div>
            </CardContent>
            {/* <CardFooter className="select-none text-sm font-normal text-gray-200/50">
              {`200 ms`}
            </CardFooter> */}
          </Card>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <SkeletonCard />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ServerResponse;
