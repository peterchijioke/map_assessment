import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";

interface Props extends AlertDialogProps {
  children: ReactNode;
  onConfirm: () => void;
}

export function ConfirmationModal({ children, onConfirm, ...props }: Props) {
  return (
    <AlertDialog {...props}>
      {children}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmation</AlertDialogTitle>
          <AlertDialogDescription>
            {
              "You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?"
            }
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            type="button"
            variant={"outline"}
            onClick={() => {
              props.onOpenChange && props.onOpenChange(!props.open);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            type="button"
            className=" bg-[#175CFF] text-white hover:bg-[#175CFF] hover:text-white"
          >
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
