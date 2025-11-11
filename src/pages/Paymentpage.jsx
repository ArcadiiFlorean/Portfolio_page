import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, ArrowLeft, CheckCircle2, Shield, Lock } from "lucide-react";

function PaymentPage() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // ⭐ ÎNLOCUIEȘTE cu link-ul tău Stripe Payment Link
    const paymentLink = "https://buy.stripe.com/test_YOUR_PAYMENT_LINK";
    
    window.open(paymentLink, "_blank");
    
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Background effects */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}></div>
      </div>

      <div className="fixed top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 rounded-full blur-[150px] opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AF</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Prolio
            </span>
          </Link>

          <Link to="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-all group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mb-4">
            Secure Payment
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fast, secure, and easy payment processing with{" "}
            <span className="text-green-400 font-semibold">Stripe</span> 💳
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border-2 border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Make a Payment
              </h2>
              <p className="text-gray-300 mb-8">
                Select your package or enter a custom amount
              </p>

              <form onSubmit={handlePayment} className="space-y-6">
                {/* ⭐⭐⭐ TOATE PACHETELE - ORGANIZATE ⭐⭐⭐ */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-4">
                    Select Package
                  </label>
                  
                  {/* Landing Pages */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span>🚀</span> Landing Pages
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setAmount("75")}
                        className={`p-4 border-2 rounded-lg transition-all hover:scale-105 text-left ${
                          amount === "75"
                            ? "border-green-500 bg-green-500/20"
                            : "border-gray-700 hover:border-green-500"
                        }`}
                      >
                        <div className="font-bold text-green-400 text-xl">£75</div>
                        <div className="text-sm text-white font-semibold mt-1">Starter</div>
                        <div className="text-xs text-gray-400 mt-1">Quick & Budget</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAmount("125")}
                        className={`p-4 border-2 rounded-lg transition-all hover:scale-105 text-left relative ${
                          amount === "125"
                            ? "border-green-500 bg-green-500/20"
                            : "border-gray-700 hover:border-green-500"
                        }`}
                      >
                        <span className="absolute top-2 right-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">
                          POPULAR
                        </span>
                        <div className="font-bold text-green-400 text-xl">£125</div>
                        <div className="text-sm text-white font-semibold mt-1">Standard</div>
                        <div className="text-xs text-gray-400 mt-1">Best Value</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAmount("199")}
                        className={`p-4 border-2 rounded-lg transition-all hover:scale-105 text-left ${
                          amount === "199"
                            ? "border-green-500 bg-green-500/20"
                            : "border-gray-700 hover:border-green-500"
                        }`}
                      >
                        <div className="font-bold text-green-400 text-xl">£199</div>
                        <div className="text-sm text-white font-semibold mt-1">Premium</div>
                        <div className="text-xs text-gray-400 mt-1">Max Conversion</div>
                      </button>
                    </div>
                  </div>

                  {/* Websites */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span>💼</span> Business Websites
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setAmount("249")}
                        className={`p-4 border-2 rounded-lg transition-all hover:scale-105 text-left ${
                          amount === "249"
                            ? "border-green-500 bg-green-500/20"
                            : "border-gray-700 hover:border-green-500"
                        }`}
                      >
                        <div className="font-bold text-green-400 text-xl">£249</div>
                        <div className="text-sm text-white font-semibold mt-1">Basic</div>
                        <div className="text-xs text-gray-400 mt-1">5-7 pages</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAmount("399")}
                        className={`p-4 border-2 rounded-lg transition-all hover:scale-105 text-left relative ${
                          amount === "399"
                            ? "border-green-500 bg-green-500/20"
                            : "border-gray-700 hover:border-green-500"
                        }`}
                      >
                        <span className="absolute top-2 right-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">
                          POPULAR
                        </span>
                        <div className="font-bold text-green-400 text-xl">£399</div>
                        <div className="text-sm text-white font-semibold mt-1">Business</div>
                        <div className="text-xs text-gray-400 mt-1">10-15 pages</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAmount("649")}
                        className={`p-4 border-2 rounded-lg transition-all hover:scale-105 text-left ${
                          amount === "649"
                            ? "border-green-500 bg-green-500/20"
                            : "border-gray-700 hover:border-green-500"
                        }`}
                      >
                        <div className="font-bold text-green-400 text-xl">£649</div>
                        <div className="text-sm text-white font-semibold mt-1">Enterprise</div>
                        <div className="text-xs text-gray-400 mt-1">15+ pages</div>
                      </button>
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span>✨</span> Other
                    </h4>
                    <button
                      type="button"
                      onClick={() => setAmount("custom")}
                      className={`w-full p-4 border-2 rounded-lg transition-all hover:scale-105 text-left ${
                        amount === "custom"
                          ? "border-green-500 bg-green-500/20"
                          : "border-gray-700 hover:border-green-500"
                      }`}
                    >
                      <div className="font-bold text-green-400 text-xl">Custom Amount</div>
                      <div className="text-xs text-gray-400 mt-1">Enter your own amount</div>
                    </button>
                  </div>
                </div>

                {/* Custom Amount Input */}
                {amount === "custom" && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Enter Amount (£)
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="100"
                      className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                    />
                  </div>
                )}

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Payment Description (Optional)
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="3"
                    placeholder="What is this payment for?"
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing || !amount || !email}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 font-bold text-lg rounded-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Proceed to Payment</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-400 text-center">
                  🔒 Secured by Stripe - Your payment info is safe
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Trust Badges */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-8 rounded-2xl border-2 border-green-500/50">
              <h3 className="text-xl font-bold text-green-400 mb-6">
                Why Pay with Stripe?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Secure",
                    description: "Bank-level security",
                  },
                  {
                    icon: Lock,
                    title: "Encrypted",
                    description: "256-bit SSL encryption",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Trusted",
                    description: "Used by millions worldwide",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-500/20 border-2 border-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">
                Accepted Payment Methods
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay"].map(
                  (method) => (
                    <div
                      key={method}
                      className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-gray-300"
                    >
                      {method}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Support */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">
                Need Help?
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Contact us for payment assistance
              </p>
              <Link
                to="/contact"
                className="block text-center px-4 py-2 bg-white/5 border border-gray-600 text-gray-300 rounded-lg hover:bg-white/10 transition-all"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;