import { Mic2 } from "lucide-react"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // fa = FontAwesome

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mic2 className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold">L&L Voice And Music</span>
            </div>
            <p className="text-gray-400">
              Transformando eventos em experiências inesquecíveis.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 (11) 99389-0639</li>
              <li>✉️ llvoiceandmusic@gmail.com</li>
              <li>📍 Jundiaí - SP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Veja mais em:</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/llvoiceandmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/message/W4UWN2PT5HQVO1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all"
                aria-label="Whatsapp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 L&L Voice And Music. Todos os direitos reservados.</p>
          <p>CNPJ: 22.742.955/0001-57</p>
        </div>
      </div>
    </footer>
  );
}
