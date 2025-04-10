import {
  Calendar,
  ThumbsUp,
  ShoppingCart,
  Eye,
  Clock,
  User,
  Store,
  CheckCircle,
} from "lucide-react";
import boutique from "../donnees/boutique.json";
import Image from "next/image";

const Boutique_detail = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Main Info */}
      <div className="space-y-6">
        {/* Boutique Image */}
        <div className="aspect-square w-3/4 mx-auto bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800"
            alt={boutique.nom}
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-sm font-medium text-gray-900 mb-3">
          &Eacute;tat de la Boutique
        </h3>
        {/* Etats de la boutique */}
        <div className="flex flex-wrap gap-3">
          <div
            className={`w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full ${boutique.iscert ? " bg-blue-50" : " bg-gray-100"
              }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${boutique.iscert ? " bg-blue-500" : " bg-gray-400"
                }`}
            ></div>
            <span
              className={`text-sm font-medium ${boutique.iscert ? " text-blue-700" : " text-gray-600"
                }`}
            >
              Certifiée
            </span>
          </div>
          <div
            className={`w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full ${boutique.isboosted ? " bg-green-50" : " bg-gray-100"
              }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${boutique.isboosted ? " bg-green-500" : " bg-gray-400"
                }`}
            ></div>
            <span
              className={`text-sm font-medium ${boutique.isboosted ? " text-green-700" : " text-gray-600"
                }`}
            >
              Boostée
            </span>
          </div>
          <div
            className={`w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full ${boutique.isPromoted ? " bg-purple-50" : " bg-gray-100"
              }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${boutique.isPromoted ? " bg-purple-500" : " bg-gray-400"
                }`}
            ></div>
            <span
              className={`text-sm font-medium ${boutique.isPromoted ? " text-purple-700" : " text-gray-600"
                }`}
            >
              Promue
            </span>
          </div>
        </div>
      </div>

      {/* Right Column - Details */}
      <div className="space-y-5">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Store className="h-6 w-6 text-[var(--laala-color)]" />
            <h2 className="text-xl font-medium text-gray-900">
              {boutique.nom}
            </h2>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <User className="h-5 w-5" />
            <span>{boutique.proprietaire}</span>
          </div>
          <p className="text-gray-600">{boutique.desc}</p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-wrap justify-between p-2 rounded-lg">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-md shadow-sm hover:bg-[var(--laala-color)]/10 transition-colors">
            <Eye className="h-4 w-4 text-[var(--laala-color)]" />
            <span className="text-sm font-medium text-gray-700">
              {boutique.nbrConsultes}
            </span>
            <span className="text-xs text-[var(--laala-color)]">vues</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-md shadow-sm hover:bg-[var(--laala-color)]/10 transition-colors">
            <ShoppingCart className="h-4 w-4 text-[var(--laala-color)]" />
            <span className="text-sm font-medium text-gray-700">
              {boutique.nbrArticle}
            </span>
            <span className="text-xs text-[var(--laala-color)]">articles</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-md shadow-sm hover:bg-[var(--laala-color)]/10 transition-colors">
            <ThumbsUp className="h-4 w-4 text-[var(--laala-color)]" />
            <span className="text-sm font-medium text-gray-700">
              {boutique.likes}
            </span>
            <span className="text-xs text-[var(--laala-color)]">
              j&apos; aime
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-md shadow-sm hover:bg-[var(--laala-color)]/10 transition-colors">
            <Calendar className="h-4 w-4 text-[var(--laala-color)]" />
            <span className="text-sm font-medium text-gray-700">
              {boutique.date}
            </span>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-900">Services</h3>
          <div className="flex flex-wrap gap-3">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${boutique.gererSAV
                ? " bg-green-50 text-green-700"
                : " bg-gray-100 text-gray-600"
                }`}
            >
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Service Apr&egrave;s-Vente</span>
            </div>
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${boutique.isLoyerPaid
                ? " bg-green-50 text-green-700"
                : " bg-gray-100 text-gray-600"
                }`}
            >
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Loyer à Jour</span>
            </div>
          </div>
        </div>

        {/* Horaires */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-900">
            Horaires d&apos; ouverture
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {boutique.horaires.map((horaire, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-md"
              >
                <span className="text-sm text-gray-600">{horaire.jour}</span>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[var(--laala-color)]" />
                  <span className="text-sm text-gray-700">
                    {horaire.start === 0 && horaire.end === 0
                      ? " Fermé"
                      : `${horaire.start}h - ${horaire.end}h`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boutique_detail;
