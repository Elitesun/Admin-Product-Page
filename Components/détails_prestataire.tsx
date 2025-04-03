import { BiMapPin, BiStar, BiLike, BiShow, BiDollar, BiCalendar, BiCertification, BiStore, BiChevronRight } from 'react-icons/bi'
import { MdDeliveryDining } from "react-icons/md";
import prestataire from "../données/prestataire.json"
const Prestataire_detail = () => {
    return (
       <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Business Details Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm col-span-full lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BiStore className="text-orange-500" size={24} />
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
                <BiCertification className="text-orange-500" size={20} />
                <span className="text-gray-600">{prestataire.iscert ? "Certifié" : "Non Certifié"}</span>
              </div>
              <div className="flex items-center gap-2">
                <MdDeliveryDining className="text-orange-500" size={20} />
                <span className={`${prestataire.islivreur ? 'text-orange-500' : 'text-gray-600'}`}>
                  {prestataire.islivreur ? 'Livreur' : 'Non Livreur'}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Stats Cards */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <div className="grid grid-cols-1 gap-4">
            {/* Likes Stats */}
            <div className="flex gap-4 items-center p-3 bg-white/10 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <BiLike size={20} />
                <span className="text-2xl font-bold">{prestataire.nbrlikes}</span>
              </div>
              <p className="text-orange-100 text-sm">Total Likes</p>
            </div>

            {/* Views Stats */}
            <div className="flex gap-4 items-center p-3 bg-white/10 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <BiShow size={20} />
                <span className="text-2xl font-bold">{prestataire.nbrviews}</span>
              </div>
              <p className="text-orange-100 text-sm">Profile Views</p>
            </div>

            {/* Revenue Stats */}
            <div className="flex gap-4 items-center p-3 bg-white/10 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <BiDollar size={20} />
                <span className="text-2xl font-bold">5</span>
              </div>
              <p className="text-orange-100 text-sm">Total Revenue</p>
            </div>
          </div>
        </div>

         {/* Schedule Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm col-span-full lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BiCalendar className="text-orange-500" size={24} />
            Business Hours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day) => (
              <div key={day} className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">{day}</span>
                <span className="font-medium">Not specified</span>
              </div>
            ))}
          </div>
        </div>
        {/* Location Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BiMapPin className="text-orange-500" size={24} />
            Location
          </h2>
          <p className="text-gray-600">Non spécifiée</p>
        </div>

         {/* Reviews Card */}
         <div className="bg-white rounded-2xl p-6 shadow-sm col-span-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <BiStar className="text-orange-500" size={24} />
              Customer Reviews
            </h2>
            <button className="text-orange-500 flex items-center gap-1 hover:text-orange-600">
              View all <BiChevronRight size={16} />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <BiStar
                  key={star}
                  size={20}
                  className={star <= 3 ? "text-orange-500" : "text-gray-300"}
                  fill={star <= 3 ? "currentColor" : "none"}
                />
              ))}
            </div>
            <span className="text-gray-600">0 reviews</span>
          </div>
        </div>
       </main>
    );
}

export default Prestataire_detail;