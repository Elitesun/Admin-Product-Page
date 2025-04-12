import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">Tableau de Bord Admin</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/boutique" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">Boutique</h2>
            <p className="mt-2 text-gray-600">Gérer les détails et paramètres de la boutique</p>
          </Link>

          <Link href="/produit" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">produit</h2>
            <p className="mt-2 text-gray-600">G&#233;rer les produits et l&apos;inventaire</p>
          </Link>

          <Link href="/prestataire" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">Prestataire</h2>
            <p className="mt-2 text-gray-600">Gérer les prestataires de services</p>
          </Link>

          <Link href="/laala" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">Détail Laala</h2>
            <p className="mt-2 text-gray-600">Détails du produit Laala</p>
          </Link>

          <Link href="/commande" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">Détail Commande</h2>
            <p className="mt-2 text-gray-600">Détails sur les commandes</p>
          </Link>

          <Link href="/retrait" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">Détail Retrait</h2>
            <p className="mt-2 text-gray-600">Détails sur les retraits</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
