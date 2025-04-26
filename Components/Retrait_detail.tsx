import retrait from '../donnees/retrait.json'
import { User, Wallet } from "lucide-react"

const Retrait_detail = () => {
    return (
        <div className="rounded-2xl flex items-center bg-[var(--bg-light)] p-2 sm:p-4 md:p-6">
            <div className="w-full">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-[var(--gap-small)] px-2 mb-3 sm:mb-6">
                    <Wallet className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--laala-color)]" />
                    Détails du retrait
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    <div className="common-card p-4 sm:p-6 lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-gray-500 text-sm sm:text-base">ID Retrait:</span>
                                    <span className="text-sm md:text-base lg:text-lg font-mono bg-[var(--bg-hover)] px-2 py-0.5 rounded break-all">
                                        #{retrait.id}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-500">Nom complet</p>
                                        <p className="font-medium text-sm sm:text-base">{retrait.nom}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-500">Date et heure</p>
                                    <p className="font-medium text-sm sm:text-base">{retrait.date} à {retrait.heure}</p>
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-500">Téléphone</p>
                                    <p className="font-medium text-sm sm:text-base">{retrait.tel}</p>
                                </div>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-500">Montant</p>
                                    <p className="text-xl sm:text-2xl font-semibold text-[var(--laala-color)]">
                                        {retrait.montant.toLocaleString()} FCFA
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Statut</p>
                                    <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${retrait.istraite
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {retrait.istraite ? 'Traité' : 'En attente'}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Type de retrait</p>
                                    <div className="flex flex-wrap gap-2">
                                        {retrait.iskouri && (
                                            <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 border border-blue-300 shadow-sm">
                                                Kouri
                                            </span>
                                        )}
                                        {retrait.ismobilem && (
                                            <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 border border-blue-300 shadow-sm">
                                                Mobile Money
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Retrait_detail