"use client"

import { saveContact } from "@/lib/actions";
import { useActionState } from "react";

export default function CreateForm() {
    const [state, formAction] = useActionState(saveContact, null)
  return (
    <form action={formAction}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900"
        >
          Nama Lengkap
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nama lengkap..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-900"
        >
          Nomor WhatsApp
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Nomor Telfon..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
        />
      </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center"
        >
          Save
        </button>
    </form>
  );
}
