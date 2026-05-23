import ServiceCard from "./ServiceCard";

export default function ServicesPage() {
  return (
    <section
      id="service-section"
      className="container mx-auto px-6 pt-10 md:pt-24 pb-8 md:pb-18"
    >
      <h1 className="text-center text-[40px] sm:text-5xl md:text-7xl font-bold tracking-tight leading-[120%] mb-4 select-none">
        Un <span className="text-brand-gradient">teléfono</span>, para todos tus{" "}
        <span className="text-brand-gradient">problemas</span>
      </h1>

      <div className="mt-[60px] flex flex-col items-center justify-center gap-8 md:px-4">
        <ServiceCard
          title="01. Sitios que Convierten"
          image="/Studio-Display.png"
        >
          <div>
            <h3 className="font-bold text-white mb-1">
              Tiendanube, Shopify o WooCommerce
            </h3>
            <p>
              Implementamos las plataforma líderes a nivel mundial para
              desarrollar tu sitio eCommerce.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Tasa de Conversión</h3>
            <p>
              Desarrollamos tu sitio con los recursos necesarios para una tasa
              de conversión{" "}
              <strong className="text-white font-bold">saludable</strong>.
            </p>
          </div>
        </ServiceCard>

        <ServiceCard
          title="02. Anuncios que Venden"
          image="/Frame 2147236710.png"
        >
          <p>
            Diseñamos anuncios acordes a los últimos requerimientos de los
            canales digitales fundados en la psicología del consumo.
          </p>
          <div>
            <h3 className="font-bold mb-1">Performance Branding</h3>
            <p>
              Posicionamos tu marca y aceleramos la venta a través de campañas
              publicitarias en Google, Facebook e Instagram.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Owned Media</h3>
            <p>
              Fidelizamos y generamos relaciones con tu audiencia mediante
              estrategias de Email, SMS y Loyalty Marketing.
            </p>
          </div>
        </ServiceCard>

        <ServiceCard
          title="03. Generación de Contenido"
          image="/iPhone 15 Pro.png"
        >
          <p>
            Producimos el volumen de contenido que el algoritmo exige, con el
            cuidado que tu marca demanda.
          </p>
          <div>
            <h3 className="font-bold mb-1">Campañas editoriales </h3>
            <p>
              Construimos piezas editoriales que sostienen el posicionamiento de
              marca en cada touchpoint digital, más allá del feed publicitario.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-1">
              UGC y cortos publicitarios, powered by AI{" "}
            </h3>
            <p>
              Producimos videos UGC, spots verticales y creatividades
              publicitarias a escala. Inteligencia artificial para iterar
              rápido, dirección creativa para no perder marca.
            </p>
          </div>
        </ServiceCard>

        <ServiceCard
          title="04. Chatbots con Inteligencia Artificial"
          image="/image 7.png"
          leftSectionClassName="md:!w-[67%]"
          rightSectionClassName="!w-[50%] mx-auto md:mx-0 md:!w-[33%]"
        >
          <p>
            Desarrollamos nuestra propia plataforma de chatbots con IA,
            integrada con WhatsApp, Facebook, Instagram y Email, para potenciar
            cada punto de contacto de tu marca.
          </p>
          <div>
            <h3 className="font-bold mb-1"> Atención omnicanal 24/7 </h3>
            <p>
              Unificamos la conversación en un solo flujo, sin importar por
              dónde te escriba el cliente.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Conversaciones que venden</h3>
            <p>
              Calificamos leads, recomendamos productos y cerramos ventas dentro
              del mismo chat. Sin fricción, sin esperas, sin saturar al equipo
              comercial.
            </p>
          </div>
        </ServiceCard>

        <ServiceCard
          title="05. Desarrollo de Software a Medida"
          image="/Mac Studio.png"
        >
          <p>
            Cuando ninguna herramienta del mercado se adapta a la operación de
            tu empresa, la construimos nosotros.
          </p>
          <div>
            <h3 className="font-bold mb-1">
              Plataformas internas y dashboards
            </h3>
            <p>
              Desarrollamos software, integraciones con tu ERP y herramientas
              internas que automatizan la operación y desbloquean decisiones
              basadas en datos reales.
            </p>
          </div>
        </ServiceCard>
      </div>
    </section>
  );
}
