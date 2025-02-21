// app/layout.js
 // Asegúrate de tener los componentes correctos
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import './globals.css';


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Landing Page</title>
      </head>
      <body>
        <Header />  {/* Componente Header */}
        
        
          {children}  {/* Aquí se renderiza el contenido de las páginas */}
        
        <Footer />  {/* Componente Footer */}
      </body>
    </html>
  );
}


