import Image from "next/image";
import prestataire from "../../donnees/prestataire.json"
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
        <header>
             <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{prestataire.nom}</h1>
            <div className="flex items-center space-x-4 mt-3">
                  <Image
                    src="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3"
                    alt="Creator"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-orange-200"
                  />
                  <div>
                  <p className="text-gray-600 mt-1">Gerer par {prestataire.proprio}</p>
                    <p className="text-sm text-gray-500">ID Createur: {prestataire.id}</p>
                  </div>
                </div>
           
          </div>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            {prestataire.isdesactive ? "Desactive" : "Active"}
          </span>
        </div>
      </div>
            <main>
            {children}
            </main>
        </header>
        </div>
    );
}