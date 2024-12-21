import ServerResponse from "~/components/server-response";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const PreviousPage = () => {
  return (
    <div className="flex flex-col gap-4 p-9">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <ServerResponse />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PreviousPage;
