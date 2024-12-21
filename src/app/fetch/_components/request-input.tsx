"use client";

import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { z } from "zod";
import { type RequestInput } from "~/types/request-input";
import { v4 as uuidv4 } from "uuid";
import useRequestManagerStore from "~/store/request-manager";
import { type ServerResponseType } from "~/types/server-response-type";

const RequestInputSchema = z.object({
  id: z.string(),
  requestId: z.string(),
  httpMethod: z.enum(["GET", "POST", "DELETE", "PUT"]),
  url: z.string().url(),
  requestedAt: z.date(),
});

const RequestImport = () => {
  const { setIsLoading, addRequest, addServerResponse } =
    useRequestManagerStore();

  const [requestData, setRequestData] = useState<Partial<RequestInput>>({});

  const handleSubmit = async (e: React.FormEvent | React.KeyboardEvent) => {
    try {
      e.preventDefault();
      setIsLoading();
      const reqId = uuidv4().substring(5);
      const tempData: RequestInput = {
        id: uuidv4(),
        requestId: reqId,
        httpMethod: "GET",
        url: requestData.url ?? "",
        requestedAt: new Date(),
      };

      const parse = RequestInputSchema.safeParse(tempData);

      if (parse.success) {
        const response = await fetch(parse.data.url);
        const data: string = JSON.stringify(await response.json());

        const tempServerResonse: ServerResponseType = {
          id: uuidv4(),
          requestId: reqId,
          response: data,
        };

        addRequest(tempData);

        addServerResponse(tempServerResonse);
      } else {
        const message = parse.error.message;
        throw new Error(message);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading();
    }
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
        onKeyDown={async (e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            await handleSubmit(e);
          }
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
