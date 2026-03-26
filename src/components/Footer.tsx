import React from 'react';
import { Globe, Link, MessageSquare, PhoneCall } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <PhoneCall className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                ጥገና <span className="text-blue-600">ማእከል</span>
              </span>
            </div>
            <p className="text-lg text-white font-bold max-w-sm mb-6 leading-relaxed">
              እኛ በኤሌክትሮኒክስ ጥገና ዘርፍ የታመነ እና ፈጣን አገልግሎት የምንሰጥ ድርጅት ነን። የደንበኞቻችን እርካታ ለኛ ቅድሚያ የምንሰጠው ጉዳይ ነው።
            </p>
            <div className="flex gap-4">
              {[Globe, Link, MessageSquare].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-black hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm font-bold text-lg"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">ሊንኮች</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white font-bold text-lg hover:text-blue-400 transition-colors">መነሻ</a></li>
              <li><a href="#services" className="text-white font-bold text-lg hover:text-blue-400 transition-colors">አገልግሎቶች</a></li>
              <li><a href="#about" className="text-white font-bold text-lg hover:text-blue-400 transition-colors">ስለ እኛ</a></li>
              <li><a href="#contact" className="text-white font-bold text-lg hover:text-blue-400 transition-colors">እውቂያ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">ስራ ሰዓት</h4>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-white font-bold text-lg">ከሰኞ - አርብ:</span>
                <span className="font-medium">2:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white font-bold text-lg">ቅዳሜ:</span>
                <span className="font-medium">2:00 - 10:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white font-bold text-lg">እሁድ:</span>
                <span className="font-medium">ዝግ ነው</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-white font-bold text-lg text-center md:text-left">
            © {new Date().getFullYear()} ጥገና ማእከል. መብቱ በህግ የተጠበቀ ነው።
          </p>
          <div className="flex gap-6 text-lg text-white font-bold">
            <a href="#" className="hover:text-blue-400 transition-colors">የግል ፖሊሲ</a>
            <a href="#" className="hover:text-blue-400 transition-colors">ደንቦች እና ሁኔታዎች</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;