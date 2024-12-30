import { getContacts } from "@/lib/data"
import { formatDate } from "@/utils/utils"

export default async function ContactTable() {
    const contacts = await getContacts()
  return (
    <table className="w-full text-left text-gray-500">
        <thead className="text-sm text-gray-700 bg-gray-50">
            <tr className="uppercase">
                <td className="py-3 px-6">#</td>
                <td className="py-3 px-6">Nama Lengkap</td>
                <td className="py-3 px-6">Nomor WhatsApp</td>
                <td className="py-3 px-6">Created At</td>
                <td className="py-3 px-6 text-center">Actions</td>
            </tr>
        </thead>
        <tbody>
            {contacts.map((contact, index)=> (
                <tr key={contact.id} className="bg-white border-b">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{contact.name}</td>
                    <td className="py-3 px-6">{contact.phone}</td>
                    <td className="py-3 px-6">{formatDate(contact.created_at.toString())}</td>
                    <td></td>
                </tr>
            ))}  
        </tbody>
    </table>
  )
}