"use client";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import requestForQuoteSchema, { RequestForQuote } from "@/lib/quote.zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@radix-ui/react-separator";
import { Trash, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const RequestForQuoteForm = () => {
  const form = useForm<RequestForQuote>({
    resolver: zodResolver(requestForQuoteSchema),
    defaultValues: {
      rfqNumber: "",
      title: "",
      department: "",
      expectedDeliveryDate: "",
      items: [
        {
          item: "",
          variant: "",
          quantity: 1,
          price: 0,
          expectedDeliveryDate: "",
          amount: 0,
        },
        {
          item: "",
          variant: "",
          quantity: 1,
          price: 0,
          expectedDeliveryDate: "",
          amount: 0,
        },
        {
          item: "",
          variant: "",
          quantity: 1,
          price: 0,
          expectedDeliveryDate: "",
          amount: 0,
        },
        {
          item: "",
          variant: "",
          quantity: 1,
          price: 0,
          expectedDeliveryDate: "",
          amount: 0,
        },
      ],
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = (data: RequestForQuote) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6 my-8">
        <div className=" grid grid-cols-2 gap-5 ">
          <FormField
            control={control}
            name="rfqNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RFQ Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="RFQ-10234"
                    className=" bg-[#F0F2F5] h-12"
                    {...field}
                  />
                </FormControl>
                {errors.rfqNumber && (
                  <FormMessage>{errors.rfqNumber.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Request for Equipments"
                    className=" bg-[#F0F2F5] h-12"
                    {...field}
                  />
                </FormControl>
                {errors.title && (
                  <FormMessage>{errors.title.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
        </div>
        <div className=" grid grid-cols-2 gap-5 ">
          <FormField
            control={control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <Input
                    className=" bg-[#F0F2F5] h-12"
                    placeholder="Maternity"
                    {...field}
                  />
                </FormControl>
                {errors.department && (
                  <FormMessage>{errors.department.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="expectedDeliveryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected Delivery Date</FormLabel>
                <FormControl>
                  <Input
                    className=" bg-[#F0F2F5] h-12"
                    type="date"
                    {...field}
                  />
                </FormControl>
                {errors.expectedDeliveryDate && (
                  <FormMessage>
                    {errors.expectedDeliveryDate.message}
                  </FormMessage>
                )}
                <span className=" text-sm text-[#667185]">
                  Calculated based on lead time and issue date
                </span>
              </FormItem>
            )}
          />
        </div>

        <div className=" h-[1px] bg-slate-300" />

        <div className="py-5">
          <span className="font-semibold text-lg">Add Items</span>
          <table className="min-w-full divide-y  mt-4 space-y-4">
            <thead className="bg-[#F7F9FC] ">
              <tr className="py-4">
                <th className=" text-sm text-[#667185] py-4 border-b-0">
                  Item
                </th>
                <th className=" text-sm text-[#667185]">Variant</th>
                <th className=" text-sm text-[#667185]">Quantity</th>
                <th className=" text-sm text-[#667185]">Price</th>
                <th className=" text-sm text-[#667185]">
                  Expected Delivery Date
                </th>
                <th className=" text-sm text-[#667185]">Amount</th>
                <th className=" text-sm"></th>
              </tr>
            </thead>
            <tbody className=" space-y-4">
              {fields.map((field, index) => (
                <tr key={field.id} className="">
                  <td className=" p-2">
                    <FormField
                      control={control}
                      name={`items.${index}.item`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select>
                              <SelectTrigger
                                // disabled
                                className="h-12 bg-muted focus-visible:ring-transparent outline-none border  border-[#F7F9FC] rounded-lg shadow"
                              >
                                <SelectValue placeholder="Oxygen Concentrator" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Oxygen Concentrator</SelectLabel>
                                  <SelectItem value="apple">
                                    Oxygen Concentrator
                                  </SelectItem>
                                  <SelectItem value="banana">
                                    Oxygen Concentrator
                                  </SelectItem>
                                  <SelectItem value="blueberry">
                                    Oxygen Concentrator
                                  </SelectItem>
                                  <SelectItem value="grapes">
                                    Oxygen Concentrator
                                  </SelectItem>
                                  <SelectItem value="pineapple">
                                    Oxygen Concentrator
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          {/* {errors.items?.[index]?.item && (
                            <FormMessage>
                              {errors.items[index].item.message}
                            </FormMessage>
                          )} */}
                        </FormItem>
                      )}
                    />
                  </td>
                  <td className="p-2">
                    <FormField
                      control={control}
                      name={`items.${index}.variant`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            {/* <Input
                              className="h-12 focus-visible:ring-transparent outline-none border  border-[#F7F9FC] rounded-lg shadow"
                              {...field}
                            /> */}

                            <Select>
                              <SelectTrigger
                                // disabled
                                className="h-12 bg-muted focus-visible:ring-transparent outline-none border  border-[#F7F9FC] rounded-lg shadow"
                              >
                                <SelectValue placeholder="Oxygen Concentrator" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Oxygen Concentrator</SelectLabel>
                                  <SelectItem value="apple">
                                    Oxygen Concentrator
                                  </SelectItem>
                                  <SelectItem value="banana">
                                    Oxygen Concentrator
                                  </SelectItem>
                                  <SelectItem value="blueberry">
                                    Oxygen Concentrator
                                  </SelectItem>
                                  <SelectItem value="grapes">
                                    Oxygen Concentrator
                                  </SelectItem>
                                  <SelectItem value="pineapple">
                                    Oxygen Concentrator
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          {/* {errors.items?.[index]?.variant && (
                            <FormMessage>
                              {errors.items[index].variant.message}
                            </FormMessage>
                          )} */}
                        </FormItem>
                      )}
                    />
                  </td>
                  <td className="p-2">
                    <FormField
                      control={control}
                      name={`items.${index}.quantity`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className=" w-full flex flex-row h-12 items-center border  border-[#F7F9FC] rounded-lg shadow">
                              <Input
                                disabled
                                className=" focus-visible:ring-transparent w-full outline-none flex-wrap border-none shadow-none"
                                type="number"
                                {...field}
                                value={"100"}
                              />
                              <span className=" mr-3  rounded-3xl p-1 w-fit text-xs bg-[#F7F9FC] ">
                                Pack
                              </span>
                            </div>
                          </FormControl>
                          {/* {errors.items?.[index]?.quantity && (
                            <FormMessage>
                              {errors.items[index].quantity.message}
                            </FormMessage>
                          )} */}
                        </FormItem>
                      )}
                    />
                  </td>
                  <td className="p-2">
                    <FormField
                      control={control}
                      name={`items.${index}.price`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              disabled
                              className="h-12 text-black focus-visible:ring-transparent outline-none border  border-[#F7F9FC] rounded-lg shadow"
                              value={"$1200.00"}
                            />
                          </FormControl>
                          {/* {errors.items?.[index]?.price && (
                            <FormMessage>
                              {errors.items[index].price.message}
                            </FormMessage>
                          )} */}
                        </FormItem>
                      )}
                    />
                  </td>
                  <td className="p-2">
                    <FormField
                      control={control}
                      name={`items.${index}.expectedDeliveryDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="h-12 focus-visible:ring-transparent outline-none border  border-[#F7F9FC] rounded-lg shadow"
                              type="date"
                              {...field}
                            />
                          </FormControl>
                          {/* {errors.items?.[index]?.expectedDeliveryDate && (
                            <FormMessage>
                              {errors.items[index].expectedDeliveryDate.message}
                            </FormMessage>
                          )} */}
                        </FormItem>
                      )}
                    />
                  </td>
                  <td className="p-2">
                    <FormField
                      control={control}
                      name={`items.${index}.amount`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              disabled
                              className="h-12 text-black focus-visible:ring-transparent outline-none border  border-[#F7F9FC] rounded-lg shadow"
                              // {...field}

                              value={"$1200.00"}
                            />
                          </FormControl>
                          {/* {errors.items?.[index]?.amount && (
                            <FormMessage>
                              {errors.items[index].amount.message}
                            </FormMessage>
                          )} */}
                        </FormItem>
                      )}
                    />
                  </td>
                  <td className="p-2">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => remove(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=" h-[1px] bg-slate-300" />
        <div className=" w-full flex justify-end gap-14">
          <span className=" text-[#475367] text-sm font-semibold">
            Sub Total
          </span>
          <span className=" text-sm text-[#475367]">$1200.00</span>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className=" grid gap-2 ">
            <span>Note</span>
            <Textarea placeholder="Enter note here" />
            <div className=" w-full flex justify-end">
              <span className=" text-xs">0/200</span>
            </div>
          </div>
        </div>

        <div className=" h-[1px] bg-slate-300" />

        <div className="w-full flex flex-row items-center justify-end gap-5">
          <Button variant={"outline"} type="button">
            Cancel
          </Button>
          <Button
            variant={"outline"}
            type="submit"
            className=" border border-[#175CFF] text-[#175CFF] hover:text-[#175CFF]"
          >
            Save as draft
          </Button>
          <Button
            className=" bg-[#175CFF] text-white hover:text-white"
            variant={"outline"}
            type="button"
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RequestForQuoteForm;
