"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import attachment, { Attachment } from "@/lib/attachment.zod";
import { SupportDocumentUploadButton } from "./SupportDocumentUploadButton";
import { SectionEnum } from "./RequestQuoteSections";

const RequestForQuoteAttachmentForm = () => {
  const form = useForm<Attachment>({
    resolver: zodResolver(attachment),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: Attachment) => {
    console.log(data);
  };
  const route = useRouter();
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6 my-8">
        <div className=" grid grid-cols-2 gap-5 ">
          <FormField
            control={control}
            name="paymentTerms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Terms</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      form.setValue("paymentTerms", String(value));
                    }}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Payment Terms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Net 30</SelectLabel>
                        <SelectItem value="apple">Net 30</SelectItem>
                        <SelectItem value="banana">Net 30</SelectItem>
                        <SelectItem value="blueberry">Net 30</SelectItem>
                        <SelectItem value="grapes">Net 30</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                {errors.paymentTerms && (
                  <FormMessage>{errors.paymentTerms.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="deliverySchedule"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery Schedule</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      form.setValue("deliverySchedule", String(value));
                    }}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Delivery Schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select</SelectLabel>
                        <SelectItem value="apple">
                          Immediate delivery
                        </SelectItem>
                        <SelectItem value="banana">
                          Immediate delivery
                        </SelectItem>
                        <SelectItem value="blueberry">
                          Immediate delivery
                        </SelectItem>
                        <SelectItem value="grapes">
                          Immediate delivery
                        </SelectItem>
                        <SelectItem value="pineapple">
                          Immediate delivery
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                {errors.deliverySchedule && (
                  <FormMessage>{errors.deliverySchedule.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
        </div>
        <div className=" grid grid-cols-2 gap-5 ">
          <FormField
            control={control}
            name="shippingMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Method</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      form.setValue("shippingMethod", String(value));
                    }}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Delivery Schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select</SelectLabel>
                        <SelectItem value="apple">Courier Services</SelectItem>
                        <SelectItem value="banana">Courier Services</SelectItem>
                        <SelectItem value="blueberry">
                          Courier Services
                        </SelectItem>
                        <SelectItem value="grapes">Courier Services</SelectItem>
                        <SelectItem value="pineapple">
                          Courier Services
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                {errors.shippingMethod && (
                  <FormMessage>{errors.shippingMethod.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="leadTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lead time</FormLabel>
                <FormControl>
                  <div className="flex flex-row h-12 px-1 rounded-md border items-center w-full gap-2 ">
                    <Input
                      placeholder="10"
                      className="  flex-1 border-none shadow-none focus-visible:ring-transparent outline-none"
                      {...field}
                    />
                    <select className=" rounded-2xl p-1 bg-[#F7F9FC] outline-none focus-visible:ring-transparent">
                      <option value="option1">Days</option>
                      <option value="option2">Week</option>
                      <option value="option3">Month</option>
                    </select>
                  </div>
                </FormControl>
                {errors.leadTime && (
                  <FormMessage>{errors.leadTime.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
        </div>

        <div className=" h-[1px] bg-slate-300" />

        <div className="py-5 grid">
          <span className="font-semibold text-lg">Attachments</span>
          <span className=" text-sm text-[#98A2B3]">
            Attach all necessary files or documents
          </span>
        </div>
        <div>
          <FormField
            control={control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Method</FormLabel>
                <FormControl>
                  <SupportDocumentUploadButton
                    onChange={(value) => {
                      form.setValue("image", String(value));
                    }}
                  />
                </FormControl>
                {errors.image && (
                  <FormMessage>{errors.image.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
        </div>
        <div className=" h-[1px] bg-slate-300" />

        <div className="w-full flex flex-row items-center justify-start md:justify-end space-x-1 md:space-x-4">
          <Button
            onClick={() => route.push(`/quotes?current=${SectionEnum.Form1}`)}
            variant={"outline"}
            type="button"
          >
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
            onClick={() => {
              route.push(`/quotes?current=${SectionEnum.Form3}`);
            }}
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

export default RequestForQuoteAttachmentForm;
