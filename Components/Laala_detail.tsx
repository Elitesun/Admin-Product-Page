
import { BsCalendar } from "react-icons/bs";
import laala from "@/donnees/laala.json";
import Image from "next/image";
const Laala_detail = () => {
    return (
             <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            {/* Content Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-semibold text-gray-900">{laala.nom}</h2>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    laala.encours 
                      ? ' bg-green-100 text-green-800'  
                      : ' bg-gray-100 text-gray-800' 
                  }`}>
                    {laala.encours ? ' Active'  : ' Inactive' }
                  </span>
                  {laala.isSignaler && (
                    <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                      Signal&eacute;
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <BsCalendar className="w-4 h-4 mr-1" />
                    {laala.date}
                  </span>
                  <span>ID: {laala.id}</span>
                  <span>{laala.type}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Suspendre
                </button>
                <button className="px-4 py-2 bg-[var(--laala-color)] text-white rounded-lg hover:bg-opacity-90 transition-colors">
                  Supprimer
                </button>
              </div>
            </div>

            {/* Content Preview */}
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6 relative">
              <Image
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Content Preview"
                width={1350}
                height={759}
                className="w-full h-full object-cover rounded-lg"
              />
              {laala.chooselive && (
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black bg-opacity-50 px-3 py-1 rounded-full">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--laala-color)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--laala-color)]"></span>
                  </span>
                  <span className="text-white text-sm font-medium">Live</span>
                </div>
              )}
            </div>

            {/* Creator Info & Stats */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Creator"
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-[var(--laala-color)] border-opacity-20"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{laala.nomCrea}</p>
                    <p className="text-sm text-gray-500">ID Createur: 906TG</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-2xl font-semibold text-gray-900">{laala.vues}</p>
                    <p className="text-sm text-gray-500">Vues</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-gray-900">{laala.likes}</p>
                    <p className="text-sm text-gray-500">J&apos;aime</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-gray-900">{laala.nbrEmoji}</p>
                    <p className="text-sm text-gray-500">Emojis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Actions */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                      Voir Commentaires
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                       Rapports
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Laala_detail;