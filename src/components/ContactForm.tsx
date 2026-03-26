import React from 'react';
import { toast } from 'sonner';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('መልዕክትዎ ደርሶናል። በቅርቡ እናገኝዎታለን!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            {/* Contact Info */}
            <div className="bg-blue-600 p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">ያግኙን</h2>
              <p className="text-blue-100 mb-10 text-lg">
                ጥያቄ ካለዎት ወይም የጥገና አገልግሎት የሚፈልጉ ከሆነ ከታች ባለው ቅጽ ይላኩልን ወይም በቀጥታ ይደውሉልን።
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1">በስልክ ይደውሉ</p>
                    <p className="text-xl font-bold">+251 914 27 62 56</p>
                    <p className="text-xl font-bold">+251 956 53 59 99</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1">በኢሜይል ይጻፉልን</p>
                    <p className="text-lg font-bold">hadushmamu@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1">አድራሻችን</p>
                    <p className="text-lg font-bold"> ኣድዋ ፡ ትግራይ ፣ ኢትዮጵያ</p>
                  </div>
                </div>
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
                  <label className="text-sm font-semibold text-slate-700">የዕቃው አይነት</label>
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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;