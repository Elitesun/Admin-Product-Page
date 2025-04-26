import {
  MapPin,
  Star,
  ThumbsUp,
  Eye,
  DollarSign,
  Calendar,
  Award,
  Store,
  ChevronRight,
} from "lucide-react";
import { Truck } from "lucide-react";
import prestataire from "../donnees/prestataire.json";
import Image from "next/image";

const Prestataire_detail = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <header>
        <div className="max-w-7xl mx-auto mb-4 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{prestataire.nom}</h1>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Image
                  src="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3"
                  alt="Creator"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-orange-200"
                />
                <div>
                  <p className="text-sm sm:text-base text-gray-600">Gerer par {prestataire.proprio}</p>
                  <p className="text-xs sm:text-sm text-gray-500">ID Createur: {prestataire.id}</p>
                </div>
              </div>
            </div>
            <span className="inline-flex px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {prestataire.isdesactive ? "Desactive" : "Active"}
            </span>
          </div>
        </div>

        <div className="rounded-2xl flex items-center bg-[var(--bg-light)] p-2 sm:p-4 md:p-6">
          <div className="w-full">
            <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Left column - Details Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm lg:col-span-2">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                  <Store className="text-[var(--laala-color)] size={20} sm:size={24}" />
                  Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm sm:text-base text-gray-600">Type</span>
                    <p className="text-sm sm:text-base font-medium">{prestataire.type}</p>
                  </div>
                  <div>
                    <span className="text-sm sm:text-base text-gray-600">Description</span>
                    <p className="text-sm sm:text-base font-medium">{prestataire.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-5">
                    <div className="flex items-center gap-2">
                      <Award className="text-[var(--laala-color)] size={18} sm:size={20}" />
                      <span className="text-sm sm:text-base text-gray-600">
                        {prestataire.iscert ? "Certifié" : "Non Certifié"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="text-[var(--laala-color)] size={18} sm:size={20}" />
                      <span className={`text-sm sm:text-base ${prestataire.islivreur ? "text-[var(--laala-color)]" : "text-gray-600"}`}>
                        {prestataire.islivreur ? "Livreur" : "Non Livreur"}
                      </span>
                    </div>
                  </div>

                  {/* Stats Info */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl hover:bg-[var(--laala-color)]/5 transition-colors">
                      <ThumbsUp className="h-5 w-5 text-[var(--laala-color)]" />
                      <div className="flex flex-col items-center sm:flex-row sm:gap-2 sm:items-baseline">
                        <span className="text-base font-semibold text-gray-900">
                          {prestataire.nbrlikes}
                        </span>
                        <span className="text-xs text-[var(--laala-color)]">
                          Likes
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl hover:bg-[var(--laala-color)]/5 transition-colors">
                      <Eye className="h-5 w-5 text-[var(--laala-color)]" />
                      <div className="flex flex-col items-center sm:flex-row sm:gap-2 sm:items-baseline">
                        <span className="text-base font-semibold text-gray-900">
                          {prestataire.nbrviews}
                        </span>
                        <span className="text-xs text-[var(--laala-color)]">
                          Vues
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl hover:bg-[var(--laala-color)]/5 transition-colors">
                      <DollarSign className="h-5 w-5 text-[var(--laala-color)]" />
                      <div className="flex flex-col items-center sm:flex-row sm:gap-2 sm:items-baseline">
                        <span className="text-base font-semibold text-gray-900">
                          5
                        </span>
                        <span className="text-xs text-[var(--laala-color)]">
                          Revenue
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Location and Reviews */}
              <div className="lg:space-y-8">
                {" "}
                {/* Location Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                  {" "}
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="text-[var(--laala-color)]" size={24} />
                    Location
                  </h2>
                  <p className="text-gray-600">Non sp&eacute;cifi&eacute;e</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <Star className="text-[var(--laala-color)]" size={24} />
                      Customer Reviews
                    </h2>
                    <button className="text-[var(--laala-color)] flex items-center gap-1 hover:text-[#e54d2e]">
                      View all <ChevronRight size={16} />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={20}
                          className={
                            star <= 3
                              ? "text-[var(--laala-color)]"
                              : "text-gray-300"
                          }
                          fill={star <= 3 ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">0 reviews</span>
                  </div>
                </div>
              </div>

              {/* Full width Schedule Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm col-span-full">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="text-[var(--laala-color)] size={20} sm:size={24}" />
                  Business Hours
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    "Lundi",
                    "Mardi",
                    "Mercredi",
                    "Jeudi",
                    "Vendredi",
                    "Samedi",
                    "Dimanche",
                  ].map((day) => (
                    <div
                      key={day}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm sm:text-base text-gray-600">{day}</span>
                      <span className="text-sm sm:text-base font-medium">Not specified</span>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Prestataire_detail;
