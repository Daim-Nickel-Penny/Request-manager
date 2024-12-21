"use client";

import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { z } from "zod";
import { type RequestInput } from "~/types/request-input";
import { v4 as uuidv4 } from "uuid";

const RequestImport = () => {
  const [requestData, setRequestData] = useState<Partial<RequestInput>>({});

  const RequestInputSchema = z.object({
    id: z.string(),
    requestId: z.string(),
    httpMethod: z.enum(["GET", "POST", "DELETE", "PUT"]),
    url: z.string().url(),
    requestedAt: z.date(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tempData: RequestInput = {
      id: uuidv4(),
      requestId: uuidv4().substring(5),
      httpMethod: "GET",
      url: requestData.url ?? "",
      requestedAt: new Date(),
    };

    const parse = RequestInputSchema.safeParse(tempData);

    console.log(parse);
  };

  return (
    <React.Fragment>
      <Label htmlFor="requestInput" className="text-xl font-bold">
        Endpoint
      </Label>

      <Input
        id="requestInput"
        className="relative w-1/2"
        type="url"
        placeholder="localhost:3000..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setRequestData((prev) => {
            const reqData = { ...prev, url: value };

            return reqData;
          });
        }}
      />

      <Button
        className="w-20"
        variant="outline"
        onClick={(e: React.FormEvent) => handleSubmit(e)}
      >
        Send
      </Button>
    </React.Fragment>
  );
};

export default RequestImport;
