import React from 'react';
import { CheckCircle2, Star, Users, Award } from 'lucide-react';

const stats = [
  { label: 'ደስተኛ ደንበኞች', value: '2,500+', icon: Users },
  { label: 'ዓመታት ልምድ', value: '10+', icon: Star },
  { label: 'የተጠገኑ ዕቃዎች', value: '5,000+', icon: Award },
];

const features = [
  'በመላው ከተማ አገልግሎት እንሰጣለን',
  'ባለሙያዎቻችን በሰልጠና የበቁ ናቸው',
  'ኦሪጅናል መለዋወጫዎችን እንጠቀማለን',
  'ለእያንዳንዱ ስራ የጽሁፍ ዋስትና እንሰጣለን',
  'ተመጣጣኝ እና ግልጽ ዋጋ',
  'በቀጠሮ ሰዓት እናከብራለን',
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-400 text-black relative overflow-hidden">
      {/* Abstract Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ለምን እኛን ይመርጣሉ?</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              ከ10 ዓመታት በላይ በዘለቀው ልምዳችን በርካታ ደንበኞችን በታማኝነት እና በጥራት አገልግለናል። የእኛ ዋና ዓላማ የእርስዎን የቤት ውስጥ ኑሮ ቀላል ማድረግ ነው።
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
              <img
                src="/images/image4.png"
                alt="Our professional team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xl italic font-medium text-white mb-2">
                  "ጥራት እና ታማኝነት መለያችን ነው!"
                </p>
                <p className="text-blue-400 font-bold">— ቡድናችን</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;