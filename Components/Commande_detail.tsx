import commande from "../donnees/commande.json"
import { ClipboardList, User, Store } from "lucide-react"

const Commande_detail = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-8">
                    <ClipboardList className="w-7 h-7 text-orange-600" />
                    Gestion des Commandes
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Order Info */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden flex">
                        <div className="w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
                                alt="Papillon cendre"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-1/2 p-6">
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold text-gray-900">Papillon cendre</h2>
                                <p className="text-orange-600 font-semibold text-lg">10000 FCFA</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                                    En attente
                                </span>
                            </div>

                            <div className="space-y-3 text-sm">
                                <div>
                                    <span className="text-gray-500">ID:</span>
                                    <span className="ml-2 font-mono bg-orange-50/50 px-2 py-0.5 rounded">#2932025Cmd85333245</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Date:</span>
                                    <span className="ml-2">29-3-2025</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Heure:</span>
                                    <span className="ml-2">8:53</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Prix livraison:</span>
                                    <span className="ml-2">0 FCFA</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Type de livraison:</span>
                                    <span className="ml-2 italic text-gray-400">Non spécifié</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Information */}
                    <div className="space-y-6">
                        {/* Client Information */}
                        <div className="bg-white rounded-xl p-5">
                            <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                                <User className="w-4 h-4 text-orange-600" />
                                Informations Client
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-24">Nom</span>
                                    <span>Amegan</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-24">Téléphone</span>
                                    <span>92493943</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-24">Adresse</span>
                                    <span className="italic text-gray-400">Non spécifiée</span>
                                </div>
                            </div>
                        </div>

                        {/* Shop Information */}
                        <div className="bg-white rounded-xl p-5">
                            <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                                <Store className="w-4 h-4 text-orange-600" />
                                Informations Boutique
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-24">Nom</span>
                                    <span className="italic text-gray-400">Non spécifié</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-24">Téléphone</span>
                                    <span>96165496</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-24">Propriétaire</span>
                                    <span>Pascal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commande_detail