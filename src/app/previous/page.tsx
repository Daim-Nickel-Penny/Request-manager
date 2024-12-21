"use client";

import ServerResponse from "~/components/server-response";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";
import useRequestManagerStore from "~/store/request-manager";
const PreviousPage = () => {
  const { getPreviousData } = useRequestManagerStore();
  const previousData = getPreviousData(); // Invoke the function to get the data

  return (
    <div className="flex flex-col gap-4 p-9">
      <Accordion type="multiple">
        {previousData.length > 0 ? (
          <>
            {previousData.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>
                  <p className="flex gap-1">
                    <Badge
                      variant="outline"
                      className="font-mono text-green-500"
                    >
                      GET
                    </Badge>
                    <span className="text-gray-400">Request for</span>
                    <span className="font-mono text-blue-400">
                      {item.request.url}
                    </span>
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <pre className="overflow-x-auto rounded-lg bg-white/10 p-4 text-white">
                    <code className="whitespace-pre-wrap">
                      {item.response.response}
                    </code>
                  </pre>
                </AccordionContent>
              </AccordionItem>
            ))}
          </>
        ) : (
          <>No Requests were made</>
        )}
      </Accordion>
    </div>
  );
};

export default PreviousPage;
