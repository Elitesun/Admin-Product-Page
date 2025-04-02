import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import article from "../../données/article.json"
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <header>
             <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-light text-gray-900">
          Détails du Produit
        </h1>
        <p className="mt-1 text-sm text-gray-500">ID: {article.id}</p>
      </div>
      <div className="flex gap-3">
        <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2 cursor-pointer">
          <FaRegEdit className="h-4 w-4" />
          Modifier
        </button>
        <button className="px-3 py-1.5 text-sm text-red-600 hover:text-red-700 flex items-center gap-2 cursor-pointer">
          <FaRegTrashAlt className="h-4 w-4" />
          Supprimer
        </button>
      </div>
    </div>
        <section>{children}</section>
        </header>
    );
}
