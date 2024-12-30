import { prisma } from "@/utils/prisma";

export async function getContacts () {
    try {
        const contacts = await prisma.contact.findMany();
        return contacts;
    } catch (error) {
        throw new Error("Data gagal didapatkan")
    }
}