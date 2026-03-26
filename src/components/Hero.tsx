import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image1.png"
          alt="Electronics Repair background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 md:via-white/80 md:to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
              ባለሙያ እና የታመነ ጥገና
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              የእርስዎ የቤት ዕቃዎች ተበላሽተዋል? <br />
              <span className="text-blue-600 underline decoration-blue-200">እኛ በፍጥነት</span> እንጠግናለን!
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              ፍሪጅ፣ የልብስ ማጠቢያ ማሽን እና ሌሎች የቤት ውስጥ ኤሌክትሮኒክስ ዕቃዎችን በቤቶ መጥተን በጥራት እና በታማኝነት እንጠግናለን።
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 text-center"
              >
                አገልግሎት ይጠይቁ
              </a>
              <a
                href="tel:+251911000000"
                className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-all text-center"
              >
                በስልክ ያግኙን
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">6 ወር ዋስትና</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Zap className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">ፈጣን አገልግሎት</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">24/7 እገዛ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;