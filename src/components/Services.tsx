import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, WashingMachine, Monitor, Settings } from 'lucide-react';

const services = [
  {
    title: 'የፍሪጅ ጥገና',
    description: 'ሁሉንም አይነት የቤት ውስጥ እና የንግድ ፍሪጆችን በቤቶ መጥተን እንጠግናለን። የቀዝቃዛ ጋዝ መሙላት፣ ሞተር ጥገና እና ሌሎችንም እንሰራለን።',
    icon: Snowflake,
    image: '/images/image1.png',
    color: 'blue'
  },
  {
    title: 'የልብስ ማጠቢያ ማሽን ጥገና',
    description: 'አውቶማቲክ እና ሰሚ-አውቶማቲክ የልብስ ማጠቢያ ማሽኖችን እናጠግናለን። ማጠብ ወይም ማድረቅ ላቆሙ ማሽኖች መፍትሄ አለን።',
    icon: WashingMachine,
    image: '/images/image2.png',
    color: 'indigo'
  },
  {
    title: 'የኤሌክትሮኒክስ ጥገና',
    description: 'ቲቪ፣ ማይክሮዌቭ፣ ምድጃ እና ሌሎች የቤት ውስጥ ኤሌክትሮኒክስ ዕቃዎችን በባለሙያ እና በጥራት እንጠግናለን።',
    icon: Monitor,
    image: '/images/image3.png',
    color: 'emerald'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">የምንሰጣቸው አገልግሎቶች</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg">
            ለእያንዳንዱ የቤት ውስጥ ቁሳቁስ የተካኑ ባለሙያዎች እና ዘመናዊ መሣሪያዎች አሉን። በሥራችን እንኮራለን!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                  ዝርዝር ይመልከቱ <Settings className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;