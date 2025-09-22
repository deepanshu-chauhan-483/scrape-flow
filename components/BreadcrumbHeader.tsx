"use client"

import React from 'react'
import { Link } from 'lucide-react'
import{
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation'

const BreadcrumbHeader = () => {
  const pathName = usePathname();
  const paths = pathName ==="/"?[""]:pathName?.split("/");
  return (
    <div className='flex items-center flex-start'>
      <Breadcrumb>
      <BreadcrumbList>
      {paths.map((path,index)=>(
        <React.Fragment key={index}>
          <BreadcrumbItem>
          <BreadcrumbLink className='capitalize text-black' href={`/${path}`}>
            {path === "" ? "home":path}
          </BreadcrumbLink>
          </BreadcrumbItem>
        </React.Fragment>

      ))}
      </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbHeader