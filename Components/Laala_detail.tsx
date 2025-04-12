import { Calendar } from "lucide-react";
import laala from "@/donnees/laala.json";
import Image from "next/image";
const Laala_detail = () => {
  return (
    <div className="rounded-2xl flex items-center bg-[var(--bg-light)] p-0 sm:p-4">
      <div className="w-full">
        <div className="common-card p-3 sm:p-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-3 sm:p-6">
              {/* Content Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h2 className="text-xl font-semibold text-gray-900">{laala.nom}</h2>
                    <span className={`px-2 py-1 text-xs rounded-full ${laala.encours
                      ? ' bg-green-100 text-green-800'
                      : ' bg-gray-100 text-gray-800'
                      }`}>
                      {laala.encours ? ' Active' : ' Inactive'}
                    </span>
                    {laala.isSignaler && (
                      <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                        Signal&eacute;
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {laala.date}
                    </span>
                    <span>ID: {laala.id}</span>
                    <span>{laala.type}</span>
                  </div>
                </div>
              </div>

              {/* Content Preview */}
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Content Preview"
                  width={1350}
                  height={759}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Creator Info & Stats */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Creator"
                        width={256}
                        height={256}
                        className="w-full h-full rounded-full border-2 border-[var(--laala-color)] border-opacity-20 object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{laala.nomCrea}</p>
                      <p className="text-sm text-gray-500">ID Createur: 906TG</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
                    <div className="px-2 py-1 sm:p-0">
                      <p className="text-xl sm:text-2xl font-semibold text-gray-900">{laala.vues}</p>
                      <p className="text-xs sm:text-sm text-gray-500">Vues</p>
                    </div>
                    <div className="px-2 py-1 sm:p-0">
                      <p className="text-xl sm:text-2xl font-semibold text-gray-900">{laala.likes}</p>
                      <p className="text-xs sm:text-sm text-gray-500">J&apos;aime</p>
                    </div>
                    <div className="px-2 py-1 sm:p-0">
                      <p className="text-xl sm:text-2xl font-semibold text-gray-900">{laala.nbrEmoji}</p>
                      <p className="text-xs sm:text-sm text-gray-500">Emojis</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Actions */}
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-wrap gap-3">
                      <button className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                        Voir Commentaires
                      </button>
                      <button className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                        Rapports
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laala_detail;