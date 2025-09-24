"use client";

import { LucideIcon } from "lucide-react";
import { DialogHeader, DialogTitle } from "../components/ui/dialog";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

interface Props{
  title?:string;
  subTitle?:string;
  icon?: LucideIcon;
  
  iconClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}

function CustomDialogHeader({ title, subTitle, icon, iconClassName, titleClassName, subTitleClassName }: Props) {
  const Icon=icon;
  const Title=title;
  const SubTitle=subTitle;  
  return (
    <DialogHeader className="py-6">
      <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2">
          {Icon && (
            <Icon 
            size={30}
            className={cn("stroke-primary",iconClassName)}
            />
          )}
          {Title && (
            <p className={cn("text-xl text-primary",titleClassName)}>{Title}</p>
          )}
          {SubTitle && (
            <p className={cn("text-sm text-muted-foreground",subTitleClassName)}>{SubTitle}</p>
          )}
        </div>
      </DialogTitle>
     <Separator />
    </DialogHeader>
  )
}

export default CustomDialogHeader