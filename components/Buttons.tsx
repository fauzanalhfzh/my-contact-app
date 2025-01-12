import { deleteContact } from "@/lib/actions";
import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

export function CreateButton() {
  return (
    <Link
      href={"/contacts/create"}
      className="inline-flex items-center space-x-1 text-white bg-blue-700 px-5 py-[9px] text-sm rounded-sm hover:bg-blue-800"
    >
      <IoAddSharp size={20} />
      Create
    </Link>
  );
}

export function DeleteButton({ id }: { id: number }) {
  const DeleteContactById = deleteContact.bind(null, id)

  return (
    <form action={DeleteContactById}>
      <button className="rounded-md border p-1 hover:bg-gray-100">
        <IoTrashOutline size={20} />
      </button>
    </form>
  )
}

export function EditButton () {
  return (
    <Link href={"/contacts/edit"} className="rounded-md border p-1 hover:bg-gray-100">
      <IoPencil size={20} />
    </Link>
  )
}