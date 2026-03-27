import React from 'react';
import { toast } from 'sonner';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('መልዕክትዎ ደርሶናል፤ በቅርቡ እናገኝዎታለን!');
    (e.target as HTMLFormElement).reset();
  };

  // Since specific 'Dembesko' might not be indexed perfectly in all map providers, 
  // we use a search query approach for the iframe to ensure it centers on Adwa.
  const searchQuery = "Adwa Dembesko, Tigray, Ethiopia";
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(searchQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ያግኙን</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              ለማንኛውም ጥያቄ ወይም የጥገና አገልግሎት ለማግኘት ከታች ያለውን ቅጽ ይጠቀሙ ወይም በስልክ መስመሮቻችን ይደውሉልን።
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100 mb-12">
            {/* Contact Info */}
            <div className="bg-blue-600 p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">የመገናኛ መረጃ</h3>
              <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                ጥያቄ ካለዎት ወይም የጥገና አገልግሎት የሚፈልጉ ከሆነ ከታች ባለው ቅጽ ይላኩልን ወይም በቀጥታ ይደውሉልን።
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1 font-medium">በስልክ ይደውሉ</p>
                    <p className="text-xl font-bold">+251 956 53 59 99</p>
                    <p className="text-xl font-bold">+251 914 27 62 56</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1 font-medium">በኢሜይል ይጻፉልን</p>
                    <p className="text-lg font-bold">hadushmamu@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1 font-medium">አድራሻችን</p>
                    <p className="text-lg font-bold"> ደምበስኮ ኣድዋ ፣ ትግራይ ኢትዮጵያ</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-blue-200 text-sm">የስራ ሰዓት፡ ከሰኞ - ቅዳሜ (2:00 - 12:00)</p>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">ሙሉ ስም</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="ስምዎን ያስገቡ"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">ስልክ ቁጥር</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="09..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">የዕቃው ዓይነት</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
                    <option>ፍሪጅ</option>
                    <option>የልብስ ማጠቢያ ማሽን</option>
                    <option>ቲቪ</option>
                    <option>ሌላ</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">መልዕክት</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="ስለ ብልሽቱ አጭር ማብራሪያ ይጻፉ..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-100"
                >
                  መልዕክት ላክ <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative group">
             <div className="absolute inset-0 bg-slate-200 animate-pulse -z-10" />
             <iframe
                title="Location Map"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-sm pointer-events-none group-hover:translate-y-[-10px] transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">የጥገና ማዕከላችን</h4>
                    <p className="text-xs text-slate-500">አድዋ ደምበስኮ፣ ትግራይ ኢትዮጵያ</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;