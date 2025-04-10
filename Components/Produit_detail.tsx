import { Calendar, ThumbsUp, ShoppingCart, Eye } from "lucide-react";
import article from "../donnees/article.json"
import Image from "next/image";
const Product_detail = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Image */}
      <div className="space-y-6">
        {/* Product Image */}
        <div className="aspect-square w-3/4 mx-auto bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800"
            alt={article.nom}
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">&Eacute;tat du Produit</h3>
        {/* Etats du produit */}
        <div className="flex flex-wrap gap-3">
          <div className={`w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full ${article.isNouveau ? ' bg-[#FE5733]/10' : ' bg-gray-100'}`}>
            <div className={`w-2 h-2 rounded-full ${article.isNouveau ? ' bg-[#FE5733]' : ' bg-gray-400'}`}></div>
            <span className={`text-sm font-medium ${article.isNouveau ? ' text-[#FE5733]' : ' text-gray-600'}`}>Nouveau</span>
          </div>
          <div className={`w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full ${article.isRecommand ? ' bg-green-50' : ' bg-gray-100'}`}>
            <div className={`w-2 h-2 rounded-full ${article.isRecommand ? ' bg-green-500' : ' bg-gray-400'}`}></div>
            <span className={`text-sm font-medium ${article.isRecommand ? ' text-green-700' : ' text-gray-600'}`}>Recommandé</span>
          </div>
          <div className={`w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full ${article.isboosted ? ' bg-green-50' : ' bg-gray-100'}`}>
            <div className={`w-2 h-2 rounded-full ${article.isboosted ? ' bg-green-500' : ' bg-gray-400'}`}></div>
            <span className={`text-sm font-medium ${article.isboosted ? ' text-green-700' : ' text-gray-600'}`}>Boosté</span>
          </div>
          <div className={`w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full ${article.alaune ? ' bg-green-50' : ' bg-gray-100'}`}>
            <div className={`w-2 h-2 rounded-full ${article.alaune ? ' bg-green-500' : ' bg-gray-400'}`}></div>
            <span className={`text-sm font-medium ${article.alaune ? ' text-green-700' : ' text-gray-600'}`}>&Agrave; la une</span>
          </div>
        </div>

      </div>

      {/* Right Column - Details */}
      <div className="space-y-5">
        <div>
          <h2 className="text-xl font-medium text-gray-900">{article.nom}</h2>
          <p className="mt-3 text-gray-600">{article.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Prix</div>
            <div className="text-lg font-medium text-gray-900">{article.prix.toLocaleString()} FCFA</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Catégorie</div>
            <div className="text-lg font-medium text-gray-900">{article.categorie}</div>
          </div>
        </div>

        {/* cards details */}
        <div className="flex flex-wrap justify-between p-2 rounded-lg">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-md shadow-sm hover:bg-[#FE5733]/10 transition-colors">
            <Eye className="h-4 w-4 text-[#FE5733]" />
            <span className="text-sm font-medium text-gray-700">{article.nbrConsultes}</span>
            <span className="text-xs text-[#FE5733]">vues</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-md shadow-sm hover:bg-[#FE5733]/10 transition-colors">
            <ShoppingCart className="h-4 w-4 text-[#FE5733]" />
            <span className="text-sm font-medium text-gray-700">{article.nbrAchats}</span>
            <span className="text-xs text-[#FE5733]">achats</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-md shadow-sm hover:bg-[#FE5733]/10 transition-colors">
            <ThumbsUp className="h-4 w-4 text-[#FE5733]" />
            <span className="text-sm font-medium text-gray-700">{article.likes}</span>
            <span className="text-xs text-[#FE5733]">j&apos; aime</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-md shadow-sm hover:bg-[#FE5733]/10 transition-colors">
            <Calendar className="h-4 w-4 text-[#FE5733]" />
            <span className="text-sm font-medium text-gray-700">{`${article.jour}/${article.mois}/${article.annee}`}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product_detail;