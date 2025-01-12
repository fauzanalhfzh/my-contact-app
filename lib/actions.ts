"use server"

import { z } from "zod";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const contactSchema = z.object({
  name: z.string().min(3).max(30),
  phone: z.string().max(15),
});

export async function saveContact(prevState: any, formData: FormData) {
  const validateFields = contactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      Error: validateFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contact.create({
      data: {
        name: validateFields.data.name,
        phone: validateFields.data.phone,
      },
    });
  } catch (error) {
    return { message: "Gagal menyimpan data!!!" };
  }

  revalidatePath("/contacts");
  redirect("/contacts");
}

export async function deleteContact (id: number, prevState: any) {
  await prisma.contact.delete({
    where: {id}
  })
  revalidatePath("/contacts")
}