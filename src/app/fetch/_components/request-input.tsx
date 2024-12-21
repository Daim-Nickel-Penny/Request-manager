import React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
const RequestImport = () => {
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
      />

      <Button className="w-20" variant="outline">
        Send
      </Button>
    </React.Fragment>
  );
};

export default RequestImport;
