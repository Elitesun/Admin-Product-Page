import React from 'react';
import retrait from '../donnees/retrait.json';

const Retrait_detail = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <button style={{ marginBottom: '20px', background: 'none', border: 'none', color: '#007BFF', cursor: 'pointer' }} onClick={() => window.history.back()}>
                &larr; Retour
            </button>
            <h1>Détails du retrait</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <div>
                    <p><strong>ID:</strong> {retrait.id}</p>
                    <p><strong>Nom complet:</strong> {retrait.nom}</p>
                    <p><strong>Date et heure:</strong> {retrait.date} à {retrait.heure}</p>
                    <p><strong>Téléphone:</strong> {retrait.tel}</p>
                </div>
                <div>
                    <p><strong>Montant:</strong> {retrait.montant.toLocaleString()} FCFA</p>
                    <p><strong>Statut:</strong> <span style={{ padding: '5px 10px', background: '#FFC107', borderRadius: '5px', color: '#000' }}>
                        {retrait.istraite ? 'Traité' : 'En attente'}
                    </span></p>
                    <p><strong>Type:</strong> {retrait.iskouri && retrait.ismobilem ? (
                        <>
                            <span style={{ marginRight: '10px', padding: '5px 10px', border: '1px solid #000', borderRadius: '5px' }}>Kouri</span>
                            <span style={{ marginRight: '10px', padding: '5px 10px', border: '1px solid #000', borderRadius: '5px' }}>Mobile Money</span>
                        </>
                    ) : retrait.iskouri ? (
                        <span style={{ marginRight: '10px', padding: '5px 10px', border: '1px solid #000', borderRadius: '5px' }}>Kouri</span>
                    ) : retrait.ismobilem ? (
                        <span style={{ marginRight: '10px', padding: '5px 10px', border: '1px solid #000', borderRadius: '5px' }}>Mobile Money</span>
                    ) : 'N/A'}</p>
                </div>
            </div>
            <button style={{ marginTop: '20px', background: '#FF5722', color: '#FFF', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                Traiter le retrait
            </button>
        </div>
    );
};

export default Retrait_detail;