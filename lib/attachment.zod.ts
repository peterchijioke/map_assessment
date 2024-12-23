import { z } from "zod";



const attachment = z.object({
  paymentTerms: z.string().nonempty("RFQ number is required"),
  title: z.string().nonempty("Title is required"),
  shippingMethod: z.string().nonempty("Department is required"),
  deliverySchedule: z.string().nonempty("Delivery Schedule date is required"),
  leadTime: z.string().nonempty("Lead Time is required"),
  image:z.string().nonempty("Upload is required"),
});

export type Attachment = z.infer<typeof attachment>;
export default attachment;