import CustomImage from "@/components/CustomImage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { File, Loader, Recycle, Trash2 } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FieldError } from "react-hook-form";

export function SupportDocumentUploadButton({
  fieldError,
  trash,
  onChange,
  ...props
}: {
  trash?: boolean;
  fieldError?: FieldError | undefined;
  onChange: (e: File) => void;
}) {
  interface FileWithPath extends File {
    path?: string;
  }

  interface OnDropCallback {
    (acceptedFiles: FileWithPath[]): void;
  }
  const [isUploading, setIsUploading] = useState(false);
  const [image, setImage] = useState<File>();

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);

    try {
      if (file) {
        onChange(file);
        setImage(file);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };
  const onDrop: OnDropCallback = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      acceptedFiles.forEach((file: FileWithPath) => {
        const reader = new FileReader();
        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
          console.log(file);
          handleFileUpload(file);
        };
        reader.readAsArrayBuffer(file);
      });
    },
    []
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      className={cn(
        fieldError ? " border-red-500" : " border-[#D0D5DD] py-8 ",
        " overflow-hidden rounded-3xl grid gap-2 w-fit border border-dashed"
      )}
    >
      <div
        {...getRootProps()}
        className="items-center justify-center flex h-28 dark:bg-background rounded-xl md:px-16 px-5"
      >
        <input {...getInputProps()} />
        <div className="grid space-y-2">
          <div className=" items-center flex gap-2 justify-center flex-col">
            {isUploading ? (
              <Loader className="size-5 animate-spin text-primary" />
            ) : (
              <>
                <CustomImage
                  src={"/upload.svg"}
                  alt=""
                  className="size-8 text-primary"
                />
              </>
            )}
            {isUploading ? (
              <p className=" text-sm">Uploading...</p>
            ) : (
              <p className={cn(" text-sm truncate")}>
                {image ? (
                  image?.name
                ) : (
                  <div className=" w-fit space-y-5 flex-col flex items-center justify-center">
                    <div className=" flex-col flex items-center">
                      <span className=" text-sm text-[#98A2B3]">
                        <span className=" text-[#175CFF]">Click to upload</span>{" "}
                        or drag and drop
                      </span>
                      <span className="text-sm text-[#98A2B3]">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant={"outline"}
                      className=" border border-[#175CFF] text-[#175CFF]"
                      size={"sm"}
                    >
                      Browse Files
                    </Button>
                  </div>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}