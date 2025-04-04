import { AiOutlineEye } from ' react-icons/ai' ;
import { LuChartNoAxesColumn } from ' react-icons/lu' ;
import { BiMessageRounded } from ' react-icons/bi' ;
import laala from "@/données/laala.json";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <header className="min-h-screen bg-gray-50">
            {/* Statistic */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Vues Total</p>
                <p className="text-2xl font-semibold text-gray-900">{laala.vues}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <AiOutlineEye className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Engagement</p>
                <p className="text-2xl font-semibold text-gray-900">50%</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <LuChartNoAxesColumn className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Commentaires</p>
                <p className="text-2xl font-semibold text-gray-900">{laala.commentaires.length}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <BiMessageRounded className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
        <section>
            {children}
        </section>
        </header>
    );
}