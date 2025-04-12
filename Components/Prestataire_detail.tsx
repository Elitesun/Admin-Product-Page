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

const Prestataire_detail = () => {
  return (
    <div className="rounded-2xl flex items-center bg-[var(--bg-light)] p-0 sm:p-4">
      <div className="w-full">
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6">
          {/* Left column - Details Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Store className="text-[var(--laala-color)]" size={24} />
              Details
            </h2>
            <div className="space-y-4">
              <div>
                <span className="text-gray-600">Type</span>
                <p className="font-medium">{prestataire.type}</p>
              </div>
              <div>
                <span className="text-gray-600">Description</span>
                <p className="font-medium">{prestataire.desc}</p>
              </div>
              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <Award className="text-[var(--laala-color)]" size={20} />
                  <span className="text-gray-600">
                    {prestataire.iscert
                      ? "Certifi&eacute;"
                      : "Non Certifi&eacute;"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="text-[var(--laala-color)]" size={20} />
                  <span
                    className={`${prestataire.islivreur
                        ? " text-[var(--laala-color)]"
                        : " text-gray-600"
                      }`}
                  >
                    {prestataire.islivreur ? "Livreur" : " Non Livreur"}
                  </span>
                </div>
              </div>
              {/* Updated Stats Info */}
              <div className="flex flex-wrap gap-3 mt-6">
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
            {/* Changed from lg:space-y-6 */}
            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
              {" "}
              {/* Changed from mb-6 */}
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="text-[var(--laala-color)]" size={24} />
                Location
              </h2>
              <p className="text-gray-600">Non sp&eacute;cifi&eacute;e</p>
            </div>
            {/* Reviews Card - moved from bottom */}
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
          <div className="bg-white rounded-2xl p-6 shadow-sm col-span-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="text-[var(--laala-color)]" size={24} />
              Business Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className="flex items-center justify-between py-2 border-b border-gray-100"
                >
                  <span className="text-gray-600">{day}</span>
                  <span className="font-medium">Not specified</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Prestataire_detail;
