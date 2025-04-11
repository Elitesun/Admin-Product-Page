import commande from "../donnees/commande.json"
import { ClipboardList, User, Store, Package, Truck } from "lucide-react"
import Image from "next/image"

const Commande_detail = () => {
    const totalAmount = commande.prixcmd + commande.prixlivraison;

    return (
        <div className="rounded-2xl flex items-center bg-[var(--bg-light)] p-[var(--card-padding)]">
            <div className="w-full max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-[var(--gap-small)] mb-8">
                    <ClipboardList className="w-7 h-7 text-[var(--laala-color)]" />
                    Détails de la Commande
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="common-card overflow-hidden flex flex-col md:flex-row">
                            <div className="w-full md:w-2/5">
                                <Image
                                    src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800"
                                    alt={commande.article}
                                    width={800}
                                    height={600}
                                    className="h-full w-full object-cover"
                                    priority
                                />
                            </div>
                            <div className="w-full md:w-3/5 p-4">
                                <div className="mb-4">
                                    <h2 className="text-xl font-semibold text-gray-900">{commande.article}</h2>
                                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${commande.isfinish ? 'bg-green-100 text-green-800' :
                                        commande.isreject ? 'bg-red-100 text-red-800' :
                                            'bg-[var(--bg-hover)] text-[var(--laala-color)]'}`}>
                                        {commande.isfinish ? 'Terminée' : commande.isreject ? 'Rejetée' : 'En attente'}
                                    </span>
                                </div>

                                <div className="space-y-2 text-sm mb-4">
                                    <div>
                                        <span className="text-gray-500">ID Commande:</span>
                                        <span className="ml-2 font-mono bg-[var(--bg-hover)] px-2 py-0.5 rounded">#{commande.id}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Date:</span>
                                        <span className="ml-2">{commande.date}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Heure:</span>
                                        <span className="ml-2">{commande.heure}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Mode de paiement:</span>
                                        <span className="ml-2">{commande.paybycard ? 'Carte' : 'Espèces'}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Type de livraison:</span>
                                        <span className="ml-2">{commande.type}</span>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h3 className="text-sm font-medium text-gray-700 mb-2">Détails de la commande</h3>
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="text-sm text-gray-600">Prix unitaire</p>
                                            <p className="text-lg font-semibold text-[var(--laala-color)]">{commande.prixunit} FCFA</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-600">Quantité</p>
                                            <p className="text-lg font-semibold">× {commande.nbrarticle}</p>
                                        </div>
                                    </div>
                                    <div className="pt-3 border-t border-gray-200">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-gray-600">Sous-total:</span>
                                            <span className="font-medium">{commande.prixcmd} FCFA</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-gray-600">Frais de livraison:</span>
                                            <span className="font-medium">{commande.prixlivraison} FCFA</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                                            <span className="text-sm font-medium">Total:</span>
                                            <span className="text-lg font-semibold text-[var(--laala-color)]">{totalAmount} FCFA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="common-card p-4">
                            <h3 className="section-title mb-3">
                                <User className="w-5 h-5 text-[var(--laala-color)]" />
                                Informations Client
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-start">
                                    <span className="text-gray-500 w-24">Nom</span>
                                    <span>{commande.client}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-24">Téléphone</span>
                                    <span>{commande.tel}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-gray-500 w-24">Adresse</span>
                                    <span className="flex-1">{commande.adresseclient}</span>
                                </div>
                            </div>
                        </div>

                        <div className="common-card p-4">
                            <h3 className="section-title mb-3">
                                <Store className="w-5 h-5 text-[var(--laala-color)]" />
                                Informations Boutique
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-start">
                                    <span className="text-gray-500 w-24">Nom</span>
                                    <span>{commande.boutique}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-24">Téléphone</span>
                                    <span>{commande.telboutique}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-gray-500 w-24">Adresse</span>
                                    <span className="flex-1">{commande.adresseboutique}</span>
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