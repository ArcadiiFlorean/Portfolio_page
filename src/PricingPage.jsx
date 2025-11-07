import React, { useState } from 'react';
import { Check, Zap, Rocket, Crown, ArrowLeft } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Înlocuiește cu cheia ta Stripe (Publishable key)
const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');

// Pachete disponibile
const packages = [
  {
    id: 'landing',
    name: 'Landing Page',
    price: 500,
    currency: 'RON',
    icon: Zap,
    color: 'cyan',
    popular: false,
    features: [
      'Design modern și responsive',
      'Până la 5 secțiuni',
      'Formular de contact',
      'Optimizare SEO de bază',
      'Animații smooth',
      'Hosting inclus (1 an)',
      'Timp livrare: 7 zile',
      '2 revizuiri incluse'
    ]
  },
  {
    id: 'website',
    name: 'Website Complet',
    price: 1500,
    currency: 'RON',
    icon: Rocket,
    color: 'purple',
    popular: true,
    features: [
      'Design personalizat premium',
      'Până la 10 pagini',
      'Panou de administrare',
      'Blog integrat',
      'Optimizare SEO avansată',
      'Integrare Google Analytics',
      'Formular contact avansat',
      'Animații interactive',
      'Hosting inclus (1 an)',
      'SSL Certificate',
      'Timp livrare: 14 zile',
      'Revizuiri nelimitate'
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    price: 3000,
    currency: 'RON',
    icon: Crown,
    color: 'pink',
    popular: false,
    features: [
      'Tot din Website Complet +',
      'Sistem de plăți online',
      'Gestiune produse',
      'Coș de cumpărături',
      'Conturi clienți',
      'Tracking comenzi',
      'Facturare automată',
      'Integrare curier',
      'Marketing email',
      'Rapoarte vânzări',
      'Timp livrare: 21 zile',
      'Suport prioritar 6 luni'
    ]
  }
];

// Formular de plată Stripe
function CheckoutForm({ selectedPackage, onSuccess, onCancel }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 1. Creează payment intent pe backend (acest lucru trebuie făcut pe server)
      // Pentru demo, simulăm procesul
      
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
      });

      if (stripeError) {
        setError(stripeError.message);
        setLoading(false);
        return;
      }

      // 2. Trimite paymentMethod.id la backend pentru procesare
      // const response = await fetch('/api/process-payment', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     payment_method_id: paymentMethod.id,
      //     package_id: selectedPackage.id,
      //     amount: selectedPackage.price * 100, // în cenți
      //     customer_info: formData
      //   })
      // });

      // Pentru demo, simulăm succes după 2 secunde
      setTimeout(() => {
        setLoading(false);
        onSuccess({
          package: selectedPackage,
          customer: formData,
          paymentMethod: paymentMethod.id
        });
      }, 2000);

    } catch (err) {
      setError('A apărut o eroare. Te rugăm să încerci din nou.');
      setLoading(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#1f2937',
        '::placeholder': {
          color: '#9ca3af',
        },
      },
      invalid: {
        color: '#ef4444',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Informații client */}
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          Nume complet *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white 
                   focus:outline-none focus:border-cyan-500 transition-colors"
          placeholder="Ion Popescu"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white 
                   focus:outline-none focus:border-cyan-500 transition-colors"
          placeholder="ion@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          Telefon *
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white 
                   focus:outline-none focus:border-cyan-500 transition-colors"
          placeholder="+40 123 456 789"
        />
      </div>

      {/* Card details */}
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          Detalii card *
        </label>
        <div className="p-4 bg-gray-900 border-2 border-gray-700 rounded-lg focus-within:border-cyan-500 transition-colors">
          <CardElement options={cardElementOptions} />
        </div>
        <p className="mt-2 text-xs text-gray-400">
          🔒 Plata ta este securizată prin Stripe. Datele cardului sunt criptate.
        </p>
      </div>

      {error && (
        <div className="p-4 bg-red-500 bg-opacity-20 border-2 border-red-500 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="flex-1 px-6 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg font-semibold
                   hover:bg-gray-700 transition-all disabled:opacity-50"
        >
          Anulează
        </button>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold
                   hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all disabled:opacity-50
                   flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Procesare...</span>
            </>
          ) : (
            <>
              <span>Plătește {selectedPackage.price} {selectedPackage.currency}</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

// Componenta principală
function PricingPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    setShowCheckout(true);
  };

  const handlePaymentSuccess = (details) => {
    setOrderDetails(details);
    setPaymentSuccess(true);
    setShowCheckout(false);
    
    // Aici poți trimite email de confirmare, etc.
    console.log('Payment successful:', details);
  };

  const handleCancel = () => {
    setShowCheckout(false);
    setSelectedPackage(null);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-8">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Plată Reușită!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Mulțumim pentru încredere! Comanda ta a fost procesată cu succes.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border-2 border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.3)] mb-8">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Detalii comandă</h3>
            <div className="text-left space-y-3">
              <p className="text-gray-300">
                <span className="font-semibold">Pachet:</span> {orderDetails?.package.name}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Preț:</span> {orderDetails?.package.price} {orderDetails?.package.currency}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Nume:</span> {orderDetails?.customer.name}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span> {orderDetails?.customer.email}
              </p>
            </div>
          </div>

          <div className="bg-cyan-500 bg-opacity-20 border-2 border-cyan-500 rounded-lg p-6 mb-8">
            <p className="text-cyan-400 font-semibold mb-2">📧 Ce urmează?</p>
            <p className="text-gray-300 text-sm">
              Vei primi un email de confirmare în câteva minute. Te vom contacta în 24h pentru a discuta detaliile proiectului!
            </p>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 
                     rounded-lg font-bold hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Înapoi la Portfolio</span>
          </a>
        </div>
      </div>
    );
  }

  if (showCheckout && selectedPackage) {
    return (
      <div className="min-h-screen bg-gray-900 text-white px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={handleCancel}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Înapoi la pachete</span>
          </button>

          <div className="text-center mb-12">
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Finalizare Comandă
            </h1>
            <p className="text-xl text-gray-300">
              Pachet selectat: <span className="text-cyan-400 font-bold">{selectedPackage.name}</span>
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            <div className="mb-8 pb-8 border-b border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-300 text-lg">Pachet: {selectedPackage.name}</span>
                <span className="text-2xl font-bold text-cyan-400">
                  {selectedPackage.price} {selectedPackage.currency}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                TVA inclus • Plată securizată prin Stripe
              </div>
            </div>

            <Elements stripe={stripePromise}>
              <CheckoutForm
                selectedPackage={selectedPackage}
                onSuccess={handlePaymentSuccess}
                onCancel={handleCancel}
              />
            </Elements>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="fixed top-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-12 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Înapoi la Portfolio</span>
        </a>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            ALEGE PACHETUL TĂU
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Website-uri moderne, responsive și optimizate pentru performanță.
            <br />
            <span className="text-cyan-400 font-semibold">Plată securizată prin Stripe!</span> 💳
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`relative bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border-2 
                          transition-all hover:scale-105 cursor-pointer group
                          ${pkg.popular ? 'border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.4)]' : 'border-gray-700'}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold">
                      ⭐ CEL MAI POPULAR
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 bg-${pkg.color}-500 bg-opacity-20 border-2 border-${pkg.color}-500 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 text-${pkg.color}-400`} />
                </div>

                <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-cyan-400">{pkg.price}</span>
                  <span className="text-gray-400 ml-2">{pkg.currency}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPackage(pkg)}
                  className={`w-full px-6 py-4 bg-gradient-to-r from-${pkg.color}-500 to-purple-500 
                           rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] 
                           transition-all group-hover:scale-105`}
                >
                  Comandă Acum
                </button>
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="bg-cyan-500 bg-opacity-10 border-2 border-cyan-500 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">🔒 Plată 100% Securizată</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Folosim Stripe pentru procesarea plăților - unul dintre cele mai sigure sisteme de plată din lume.
            Datele tale sunt criptate și nu sunt stocate pe serverele noastre.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;