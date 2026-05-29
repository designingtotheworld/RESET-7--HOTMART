/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CountdownTimer } from './components/CountdownTimer';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  XCircle, 
  Sparkles, 
  Trash2, 
  Coffee, 
  Home, 
  LayoutGrid,
  RotateCcw,
  Quote,
  Gift,
  FileText,
  Moon
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zen-line">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-brand-red transition-colors"
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="pb-6 text-gray-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const DayCard = ({ day, title, description, icon: Icon }: { day: number; title: string; description: string; icon: any }) => {
  const isEven = day % 2 === 0;
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`${isEven ? 'bg-gray-100' : 'bg-white'} p-8 border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all`}
    >
      <div className="w-12 h-12 bg-black/5 text-ink/60 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Día {day}</span>
      <h3 className="text-xl font-semibold mb-3 text-ink">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white bg-white text-ink">
      {/* 1. HERO SECTION */}
      <header className="section-spacing zen-container text-center">
        <motion.div {...fadeInUp}>
          <div className="flex justify-center mb-10">
            <img 
              src="https://i.postimg.cc/t4ZStRtb/LOGO.png" 
              alt="Logo Kaisen Mind" 
              className="h-32 md:h-48 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-ink">
            El método japonés de 7 días para ordenar tu casa y resetear tu mente
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-gray-600 mb-6 max-w-3xl mx-auto">
            RESET 7 elimina el caos visual sin agotamiento ni reglas extremas.
          </h2>
          <p className="text-lg md:text-xl font-medium text-brand-red mb-10 tracking-tight italic">
            “El desorden no solo ocupa espacio. También ocupa tu energía.”
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <a 
              href="#pricing"
              className="inline-block bg-white text-black border border-black px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Empezar RESET 7 hoy
            </a>
            <p className="text-sm text-gray-400 font-medium italic">Descarga inmediata. Puedes empezar hoy.</p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="relative w-full max-w-4xl mx-auto my-12"
            >
              <img 
                src="https://i.imgur.com/sakHXc5.jpeg" 
                alt="La transformación real de RESET 7 - Escritorio" 
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent rounded-2xl"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-8 max-w-lg mx-auto px-4"
            >
              <img 
                src="https://i.imgur.com/PBpcKGu.png" 
                alt="Portada RESET 7" 
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-lg transform hover:rotate-1 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* 2. INTRO / PROBLEMA */}
      <section className="bg-zen-gray section-spacing">
        <div className="zen-container max-w-4xl">
          <motion.div {...fadeInUp} className="text-center space-y-8">
            <div className="flex flex-col items-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-red/10 rounded-full blur-xl scale-125"></div>
                <img 
                  src="https://i.imgur.com/Pmh11C4.png" 
                  alt="Matt Sato" 
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="mt-4 text-xs font-bold tracking-widest uppercase text-brand-red">Presentado por Matt Sato</p>
            </div>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              Sé exactamente lo que sientes porque yo estuve ahí. Prometes que el próximo fin de semana "por fin" vas a ordenar el caos, pero el lunes llega y nada ha cambiado.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed italic">
              Sientes una punzada de culpa cada vez que miras esa mesa saturada o el rincón que prefieres ignorar. Sientes vergüenza si alguien llega sin avisar, y tu casa, lugar que debería ser tu refugio, hoy refleja tu agotamiento mental. Sientes que todo te cuesta más cuando tu espacio está cargado.
            </p>
            <div className="py-10 border-y border-zen-line">
              <h3 className="text-3xl md:text-4xl font-bold text-ink mb-4">No necesitas más fuerza de voluntad. Necesitas estructura.</h3>
              
              <p className="text-lg text-brand-red font-semibold mb-8">Cuando desarrollé RESET 7 entendí algo incómodo: la mayoría no fracasa por falta de disciplina, fracasa por saturación.</p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              RESET 7 no es minimalismo extremo, ni el método KonMari, ni una limpieza profunda de un fin de semana. No te pido tirar todo y empezar de cero. Este es un sistema <span className="text-ink font-bold uppercase tracking-tight">progresivo, psicológico y energético</span> diseñado para personas agotadas, basado en micro-acciones diarias que funcionan.
            </p>
          </motion.div>
        </div>
      </section>


      {/* 5. EL MECANISMO */}
      <section className="section-spacing zen-container">
        <div className="grid md:grid-cols-3 gap-12 text-center mb-20">
          <motion.div {...fadeInUp} className="space-y-4">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto text-brand-red">
              <LayoutGrid className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Progresivo y Psicológico</h3>
            <p className="text-gray-600">A diferencia de KonMari o el minimalismo extremo, aquí no tiramos todo de golpe. Trabajamos el desapego por áreas, respetando tu energía.</p>
          </motion.div>
          <motion.div {...fadeInUp} className="space-y-4">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto text-brand-red">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Micro-Acciones Diarias</h3>
            <p className="text-gray-600">No es "ordenar un fin de semana". Es un sistema basado en 15-20 minutos que reprograma cómo habitas tu espacio sin agotarte.</p>
          </motion.div>
          <motion.div {...fadeInUp} className="space-y-4">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto text-brand-red">
              <RotateCcw className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Resiliente al Caos</h3>
            <p className="text-gray-600">El desorden vuelve cuando no hay ritual. El Ritual Semanal es el "seguro de vida" de RESET 7 que evita cualquier recaída futura.</p>
          </motion.div>
        </div>
      </section>

      {/* 4. ESTRUCTURA DE LOS 7 DÍAS */}
      <section className="bg-ink text-white section-spacing">
        <div className="zen-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">La Experiencia RESET 7</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Una hoja de ruta clara para transformar tu hogar en una semana.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DayCard day={1} title="Purificación (Baño)" description="Reinicia el oasis de tu hogar. Pasos concretos para eliminar lo innecesario y ganar claridad matinal." icon={Sparkles} />
            <DayCard day={2} title="Desapego (Armario)" description="Libera el peso de lo que ya no usas. Un sistema de descarte consciente que aligera tu mente." icon={Trash2} />
            <DayCard day={3} title="Nutrición (Cocina / Heladera)" description="Orden profundo en superficies y refrigerador. Un flujo eficiente para nutrirte sin estrés." icon={Coffee} />
            <DayCard day={4} title="Conexión (Sala / Living)" description="Crea un ambiente de calma para compartir. Elimina el ruido visual de tu centro de descanso." icon={Home} />
            <DayCard day={5} title="Foco (Mesa / Escritorio)" description="Despeja tu zona de trabajo y documentos. Productividad inmediata a través del orden físico." icon={FileText} />
            <DayCard day={6} title="Santuario (Dormitorio)" description="Transforma tu descanso. Un espacio libre de distracciones diseñado exclusivamente para tu recuperación." icon={Moon} />
            <DayCard day={7} title="Integración (Ritual Semanal)" description="El sistema definitivo para que el orden sea permanente. Tu plan anti-recaída y ritual de mantenimiento." icon={RotateCcw} />
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://pay.hotmart.com/J105154525S"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black border border-black px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Acceder a RESET 7
            </a>
            <p className="mt-4 text-xs text-gray-500 italic">Descarga inmediata. Puedes empezar hoy.</p>
          </div>
        </div>

      </section>

      {/* 8. BONUS: RESET VISUAL + BONUS #2 */}
      <section className="bg-white pt-24 pb-0 border-t border-zen-line overflow-hidden">
        <div className="zen-container max-w-4xl text-center mb-16">
          <motion.div {...fadeInUp}>
            <div className="inline-block bg-brand-red/10 text-brand-red px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              BONUS EXCLUSIVO
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-ink leading-tight">
              🎯 BONUS: RESET VISUAL
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-left mb-12">
              <p>
                Sube una foto de tu espacio actual → El <strong>Prompt Maestro</strong> avanzado para ChatGPT analiza TODO lo que satura tu mente visualmente → Te devuelve una imagen del MISMO espacio, pero optimizado, ordenado y visualmente liviano.
              </p>
              <p className="font-bold text-brand-red">
                Valor individual: $47 | GRATIS hoy con RESET 7
              </p>
            </div>

            <motion.div {...fadeInUp} className="mb-12">
              <p className="text-xl md:text-2xl font-bold text-ink mb-6">MIRA CÓMO VA A QUEDAR TU ESPACIO ANTES DE EMPEZAR A ORDENARLO.</p>
              <img 
                src="https://i.imgur.com/sakHXc5.jpeg" 
                alt="La transformación real de RESET 7 - Cocina" 
                className="w-full h-auto object-cover rounded-2xl shadow-2xl mb-6"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://i.imgur.com/tJWcTqP.png" 
                alt="La transformación real de RESET 7 - Cocina" 
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="zen-container max-w-4xl text-center mb-16 mt-32">
          <motion.div {...fadeInUp}>
            <div className="inline-block bg-brand-red/10 text-brand-red px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              NUEVO BONUS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-ink leading-tight">
              🏷️ BONUS #2: ETIQUETAS IMPRIMIBLES PARA ESPECIAS
            </h2>

            <div className="mb-10 space-y-8">
              <img src="https://i.imgur.com/Zp0Q7q5.png" alt="Etiquetas Especias 1" className="w-full rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://i.imgur.com/U5nLY3j.png" alt="Etiquetas Especias 2" className="w-full rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-left">
              <p>
                Eleva el orden de tu cocina. Recibe una colección completa de <strong>Etiquetas de Autor</strong> en alta resolución, listas para imprimir y organizar toda tu despensa con estilo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. QUÉ INCLUYE & QUÉ VERÁS POR DENTRO */}
      <section className="section-spacing zen-container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-8">Qué recibes al acceder a RESET 7:</h2>
            <ul className="space-y-6 mb-12">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-red/10 p-1 rounded-full"><Check className="w-4 h-4 text-brand-red" /></div>
                <div>
                  <p className="text-xl font-bold">Audio-Story Exclusiva de Matt Sato</p>
                  <p className="text-gray-600">Audio para conectar con la frecuencia del orden japonés y preparar tu mentalidad.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-red/10 p-1 rounded-full"><Check className="w-4 h-4 text-brand-red" /></div>
                <div>
                  <p className="text-xl font-bold">Guía PDF RESET 7</p>
                  <p className="text-gray-600">El método completo, paso a paso, con checklists de acción directa.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-red/10 p-1 rounded-full"><Check className="w-4 h-4 text-brand-red" /></div>
                <div>
                  <p className="text-xl font-bold text-brand-red">+ BONUS: Prompt Maestro RESET VISUAL</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-red/10 p-1 rounded-full"><Check className="w-4 h-4 text-brand-red" /></div>
                <div>
                  <p className="text-xl font-bold text-brand-red">+ BONUS: Etiquetas Imprimibles para Especias</p>
                </div>
              </li>
            </ul>

            <div className="bg-zen-gray p-8 rounded-3xl border border-zen-line">
              <h3 className="text-2xl font-bold mb-4">Qué verás por dentro</h3>
              <p className="text-gray-600 leading-relaxed">
                RESET 7 no es un curso denso. Es una experiencia visual: páginas claras, checklists de acción directa, pasos numerados y cierres definidos. El estilo gráfico está pensado para que tu mente descanse mientras aplicas el método. No prometemos fotos de revista, prometemos un sistema que funciona.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-8">
            <div className="bg-ink text-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Cómo se usa RESET 7</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">0</div>
                  <p className="text-gray-300"><span className="font-bold text-white">El Origen:</span> Escuchas la Audio-Story de Matt Sato para meterte en la frecuencia del orden japonés.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <p className="text-gray-300"><span className="font-bold text-white">Acción 1-7:</span> Sigues la guía visual y completas los checklists diarios área por área.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">∞</div>
                  <p className="text-gray-300"><span className="font-bold text-white">Mantenimiento:</span> Aplicas el ritual semanal para que el orden se quede contigo.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 w-full"
        >
            <a 
              href="https://pay.hotmart.com/J105154525S"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-red/10 group block"
            >
              <img 
                src="https://i.imgur.com/tJWcTqP.png" 
                alt="ASISTENTE VIRTUAL RESET VISUAL Full Preview" 
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-[2000ms]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl animate-bounce z-10">
                ACTIVA TU PROMPT PARA VISUALIZAR TU NUEVO AMBIENTE.
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </a>
        </motion.div>
      </section>

      {/* MID PAGE PRICING CTA */}
      <section className="bg-ink text-white py-16 text-center">
        <div className="zen-container">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">RESETEA LA ENERGIA DE TU ESPACIO por solo $19.000 ARS</h3>
          <p className="mb-8 text-gray-400">Audio-Story, PDF Guía, Prompt IA y Etiquetas para Especias: todo incluido.</p>
          <a 
            href="https://pay.hotmart.com/J105154525S"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
          >
            Acceder a RESET 7 ahora
          </a>
        </div>
      </section>

      {/* 6. TESTIMONIOS */}
      <section className="bg-zen-gray section-spacing">
        <div className="zen-container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold">Lo que dicen quienes ya reiniciaron su hogar</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Lo que me convenció fue el RESET VISUAL. Ver mi espacio procesado y descrito con una claridad absoluta, me hizo entender que el problema no era mi casa, sino que mi mente no tenía un mapa visual del orden. RESET 7 me dio ese mapa.",
                author: "María C."
              },
              {
                text: "RESET 7 cambió mi relación con mi casa. Ya no es una carga, es mi refugio. El ritual semanal de mantenimiento es la pieza del rompecabezas que siempre me había faltado.",
                author: "Andrés L."
              },
              {
                text: "Increíble cómo mi mente se calmó al ordenar solo el armario el segundo día. El método de 20 minutos realmente funciona para los que no tenemos tiempo y vivimos a mil.",
                author: "Cecilia R."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-zen-line shadow-sm text-gray-600 flex flex-col justify-between">
                <div>
                  <Quote className="w-8 h-8 text-brand-red/20 mb-4" />
                  <p className="italic mb-6">"{testimonial.text}"</p>
                </div>
                <p className="text-ink font-bold text-sm">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PARA QUIÉN ES / NO ES */}
      <section className="section-spacing zen-container">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold mb-8 text-ink">RESET 7 es para ti si:</h2>
            <ul className="space-y-4">
              {[
                "Tienes poco tiempo y necesitas pasos concretos.",
                "Sientes tu mente saturada por el ruido visual.",
                "Has intentado ordenar antes pero siempre recaes.",
                "Buscas un hogar más liviano, con calma y claridad.",
                "Quieres un sistema simple, no reglas rígidas."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-brand-red mt-1 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold mb-8 text-gray-400">No es para ti si:</h2>
            <ul className="space-y-4">
              {[
                "Buscas soluciones mágicas sin actuar.",
                "Prefieres métodos rígidos y extremos.",
                "No estás dispuesto/a a dedicar 15-20 min al día.",
                "Buscas un curso teórico extenso en lugar de acción."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <XCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 9. PRICING & VALUE BREAKDOWN */}
      <section id="pricing" className="bg-ink text-white section-spacing relative overflow-hidden">
        <div className="zen-container max-w-4xl text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">Recupera el control por menos de lo que cuesta una comida rápida.</h2>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl mb-12">
              <div className="space-y-4 mb-10 text-left max-w-md mx-auto">
                <div className="flex justify-between text-gray-400">
                  <span>RESET 7 (Método completo)</span>
                  <span>USD 36</span>
                </div>
                <div className="flex justify-between text-brand-red font-bold">
                  <span>ASISTENTE VIRTUAL RESET VISUAL (IA)</span>
                  <span>USD 25</span>
                </div>
                <div className="flex justify-between text-brand-red font-bold">
                  <span>ETIQUETAS PARA ESPECIAS</span>
                  <span>USD 29</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>7 Checklists de acción</span>
                  <span>USD 7</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Ritual de mantenimiento permanente</span>
                  <span>USD 12</span>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between font-bold text-xl">
                  <span>VALOR TOTAL</span>
                  <span className="line-through text-gray-500">USD 109</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <CountdownTimer />
                <p className="text-brand-red font-bold tracking-widest uppercase mb-2">PRECIO DE LANZAMIENTO</p>
                <div className="text-7xl md:text-8xl font-bold text-white mb-4">$19.000 <span className="text-2xl text-gray-400">ARS</span></div>
                <p className="text-gray-400">Ahorro: USD 126</p>
                <p className="text-gray-400 text-sm italic mt-2">Solo por tiempo limitado.</p>
              </div>
              
              <a 
                href="https://pay.hotmart.com/J105154525S"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black border border-black px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                Acceder a RESET 7
              </a>
              <p className="mt-6 text-sm text-gray-400 italic">Descarga inmediata. Puedes empezar hoy.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-red" /> Garantía de 7 días</span>
              <span className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-red" /> Pago 100% Seguro</span>
              <span className="flex items-center gap-2"><RotateCcw className="w-5 h-5 text-brand-red" /> Acceso de por vida</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section-spacing zen-container">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-2">
            <FAQItem 
              question="¿Cómo funciona el RESET VISUAL?" 
              answer="Es una guía de prompts de IA avanzada para ChatGPT o similares. Subes la foto, el sistema guía a la IA para analizar tu espacio y te sugiere cómo optimizarlo, ordenarlo y hacerlo visualmente más liviano. Incluye las instrucciones exactas paso a paso." 
            />
            <FAQItem 
              question="¿Realmente no tengo tiempo?" 
              answer="RESET 7 está diseñado para personas ocupadas. Cada intervención diaria toma entre 15 y 30 minutos. El sistema se integra en tu rutina, no la detiene." 
            />
            <FAQItem 
              question="¿Me abruma empezar por dónde?" 
              answer="Ese es el poder del sistema. No tienes que decidir nada. Solo sigue el orden de los días. Vamos área por área, con pasos tan simples que el progreso se siente natural." 
            />
            <FAQItem 
              question="¿Ya intenté mil veces y siempre vuelvo al caos?" 
              answer="La mayoría de los métodos olvidan el cierre y el mantenimiento. RESET 7 incluye un ritual semanal diseñado específicamente para que el orden sea sostenible sin esfuerzo." 
            />
            <FAQItem 
              question="¿Soy una persona desordenada por naturaleza?" 
              answer="El orden no es un rasgo de personalidad, es una habilidad que se apoya en un sistema. Si sigues la estructura, el resultado llegará independientemente de tu pasado." 
            />
            <FAQItem 
              question="¿Mi casa es muy pequeña, sirve igual?" 
              answer="En espacios pequeños el orden es aún más vital. RESET 7 te ayuda a ganar amplitud visual y reducir la saturación, haciendo que tu hogar se sienta más grande y liviano." 
            />
            <FAQItem 
              question="¿Vivo con otras personas que no colaboran?" 
              answer="El sistema se enfoca en tu gestión y en cómo organizar las áreas comunes de forma armónica, reduciendo la fricción diaria sin necesidad de imponer reglas rígidas a los demás." 
            />
            <FAQItem 
              question="¿Es un método rígido y minimalista extremo?" 
              answer="Al contrario, es una estructura flexible. No te pedimos que tires todo, sino que reinicies la energía de tus espacios para que funcionen para ti, no en tu contra." 
            />
          </div>
        </motion.div>
      </section>

      {/* 10. GARANTÍA */}
      <section className="bg-zen-gray section-spacing">
        <div className="zen-container max-w-4xl">
          <motion.div 
            {...fadeInUp}
            className="bg-white p-10 md:p-16 rounded-3xl border border-zen-line flex flex-col md:flex-row items-center gap-10 shadow-sm"
          >
            <div className="w-24 h-24 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-12 h-12 text-brand-red" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Tu tranquilidad es lo primero</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Prueba RESET 7 durante 7 días. Si aplicas el sistema y sientes que no te ha aportado la calma y el orden que buscabas, escríbenos y te devolveremos el 100% de tu inversión. Sin preguntas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="section-spacing zen-container text-center">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <div className="mb-16 p-8 bg-zen-gray rounded-3xl border border-zen-line text-gray-700">
            <p className="text-xl leading-relaxed mb-4">
              Imagina despertar un lunes.
            </p>
            <p className="text-xl leading-relaxed mb-4">
              Caminas por tu casa. Nada te grita. Nada te pesa.
            </p>
            <p className="text-xl leading-relaxed">
              Respiras. Y por primera vez en semanas, sientes claridad.
            </p>
          </div>
          <h2 className="text-4xl font-bold mb-8">Tu espacio cambia. Tu mente le sigue.</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Elimina el caos mental hoy mismo. RESET 7 es la herramienta que necesitas para recuperar el control de tu refugio.
          </p>
          <a 
            href="https://pay.hotmart.com/J105154525S"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black border border-black px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            SÍ, QUIERO RECUPERAR MI CLARIDAD
          </a>
          <p className="mt-6 text-sm text-gray-400 italic">Acceso inmediato. Comienza la transformación ahora.</p>
          
          <div className="mt-24 pt-12 border-t border-zen-line flex flex-col items-center">
            <img 
              src="https://i.postimg.cc/t4ZStRtb/LOGO.png" 
              alt="Logo Kaisen Mind" 
              className="h-24 md:h-32 object-contain mb-6"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      {/* SCROLL CUE */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="bg-black text-white p-2 rounded-full shadow-xl"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-gray-400 border-t border-zen-line">
        <p>© {new Date().getFullYear()} KAISEN MIND. Todos los derechos reservados.</p>
        <p className="mt-2">Sistema RESET 7 • Orden y Claridad Mental.</p>
      </footer>
    </div>
  );
}
