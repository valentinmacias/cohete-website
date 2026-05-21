import ServiceCard from "./ServiceCard";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black py-20 flex flex-col items-center justify-center gap-16 px-4">
      <ServiceCard
        number="01"
        title="Sitios que Convierten"
        rightContent={
          <div className="relative w-full aspect-[4/3] max-w-[450px]">
            <img
              src="/Studio-Display.png"
              alt="E-commerce Preview"
              className="w-full h-auto object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="font-bold text-white mb-1">
            Tiendanube, Shopify o WooCommerce
          </h3>
          <p className="text-gray-400">
            Implementamos las plataformas líderes a nivel mundial para
            desarrollar tu sitio eCommerce.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Tasa de Conversión</h3>
          <p className="text-gray-400">
            Desarrollamos tu sitio con los recursos necesarios para una tasa de
            conversión <strong className="text-white">saludable</strong>.
          </p>
        </div>
      </ServiceCard>

      <ServiceCard
        number="02"
        title="Anuncios que Venden"
        rightContent={
          <div className="flex gap-4 w-full justify-center max-w-[450px]">
            <img
              src="/Frame 2147236710.png"
              alt="Instagram Feed"
              className="w-full h-auto object-contain"
            />
          </div>
        }
      >
        <p className="text-gray-400">
          Diseñamos anuncios acordes a los últimos requerimientos de los canales
          digitales fundados en la psicología del consumo.
        </p>
        <div>
          <h3 className="font-bold text-white mb-1">Performance Branding</h3>
          <p className="text-gray-400">
            Posicionamos tu marca y aceleramos la venta a través de campañas
            publicitarias en Google, Facebook e Instagram.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Owned Media</h3>
          <p className="text-gray-400">
            Fidelizamos y generamos relaciones con tu audiencia mediante
            estrategias de Email, SMS y Loyalty Marketing.
          </p>
        </div>
      </ServiceCard>
    </div>
  );
}
