"use client";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { createCourseAction } from "../actions";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";

const createCourseFormsSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export function CreateCourseForm({
  revalidatePagePath,
  className,
}: {
  className?: string;
  revalidatePagePath: string;
}) {
  const [isCreateTransition, setCreateTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(createCourseFormsSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const onSubmit = (data: CreateCourseListElementCommand) => {
    setCreateTransition(async () => {
      createCourseAction(data, revalidatePagePath);
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(className, "space-y-8")}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCreateTransition}>
          Add
        </Button>
      </form>
    </Form>
  );
}
