import { z } from "zod";

const itemSchema = z.object({
  item: z.string().nonempty("Item is required"),
  variant: z.string().nonempty("Variant is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  price: z.number().min(0, "Price must be a positive number"),
  expectedDeliveryDate: z.string().nonempty("Expected delivery date is required"),
  amount: z.number().min(0, "Amount must be a positive number"),
});

const requestForQuoteSchema = z.object({
  rfqNumber: z.string().nonempty("RFQ number is required"),
  title: z.string().nonempty("Title is required"),
  department: z.string().nonempty("Department is required"),
  expectedDeliveryDate: z.string().nonempty("Expected delivery date is required"),
  items: z.array(itemSchema).nonempty("At least one item is required"),
});

export type RequestForQuote = z.infer<typeof requestForQuoteSchema>;
export type Item = z.infer<typeof itemSchema>;
export default requestForQuoteSchema;