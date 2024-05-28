"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { CustomField } from "@/components/shared/CustomField"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
})



import React from 'react'
import { defaultValues } from "@/constants"

const TransformationForm = ({action, data = null} : TransformationFormProps) => {
  const initialValues = data && action === 'Update' ? {
    title: data?.title,
    aspectRatio: data?.aspectRatio,
    color: data?.color,
    prompt:  data?.prompt,
    publicId: data.publicId,
  }: defaultValues

 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues})

  function onSubmit(values: z.infer<typeof formSchema>) {
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <CustomField
          control={form.control}
          name="title"
          formLabel="Image Title"
          className="w-full"
          render={({ field }) => <Input {...field} className="input-field" />}
        />
      </form>
    </Form>
  )
}

export default TransformationForm