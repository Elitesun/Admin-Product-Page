
import article from "../../donnees/article.json"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <header>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-light text-gray-900">
            Détails du Produit
          </h1>
          <p className="mt-1 text-sm text-gray-500">ID: {article.id}</p>
        </div>
      </div>
      <section>{children}</section>
    </header>
  );
}
