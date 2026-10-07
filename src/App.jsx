import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Instagram, Menu, MessageCircle, X } from "lucide-react";

const whatsapp = "https://api.whatsapp.com/send?phone=5531975673895";
const instagram = "https://www.instagram.com/jullietepsi/";

const reflections = [
  ["acolhimento", "Está tudo bem chorar", "por situações que você achou que já havia superado."],
  ["recomeços", "Recomeçar não é uma sentença de fracasso", "é um ato de coragem."],
  ["possibilidades", "Construa possibilidades, não expectativas.", "Respeite seus nãos. Permita viver; não somente sobreviver."]
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .58, delay, ease: [.22,1,.36,1] }}>{children}</motion.div>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const close = () => window.innerWidth > 760 && setMenu(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return <>
    <header className="site-header">
      <a className="brand" href="#inicio"><strong>Julliete</strong><span>Psicóloga · CRP 04/54451</span></a>
      <nav className={menu ? "nav open" : "nav"}>
        <a href="#psicoterapia" onClick={()=>setMenu(false)}>Psicoterapia</a>
        <a href="#gestalt" onClick={()=>setMenu(false)}>Gestalt-terapia</a>
        <a href="#esporte" onClick={()=>setMenu(false)}>Esporte</a>
        <a href="#sobre" onClick={()=>setMenu(false)}>Quem sou eu</a>
        <a className="nav-contact" href={whatsapp} target="_blank" rel="noreferrer">Conversar <ArrowRight size={14}/></a>
      </nav>
      <button className="menu-button" onClick={()=>setMenu(!menu)} aria-label={menu ? "Fechar menu" : "Abrir menu"}>{menu ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="inicio">
        <Reveal className="hero-copy">
          <p className="eyebrow">Psicologia clínica · Gestalt-terapia</p>
          <h1>Um espaço para existir com mais <em>consciência, cuidado e liberdade.</em></h1>
          <p className="lead">Nem sempre é preciso chegar com tudo organizado. A psicoterapia pode ser um espaço para olhar com mais calma para o que você vive, sente e escolhe.</p>
          <div className="hero-actions">
            <a className="button" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Vamos conversar</a>
            <a className="quiet-link" href="#psicoterapia">Conheça o trabalho <ArrowRight size={15}/></a>
          </div>
        </Reveal>
        <Reveal className="hero-art" delay={.08}>
          <div className="hero-photo">
            <img src="/img/julliete-perfil.jpg" alt="Julliete Psicóloga" />
          </div>
          <div className="hero-note"><span>presença</span><span>escuta</span><span>encontro</span></div>
        </Reveal>
      </section>

      <section className="intro" id="psicoterapia">
        <Reveal className="intro-title">
          <p className="eyebrow">Psicoterapia</p>
          <h2>Você não precisa chegar sabendo <em>explicar tudo.</em></h2>
        </Reveal>
        <Reveal className="intro-copy">
          <p>Há momentos em que algo incomoda e ainda não encontramos palavras. Outros em que queremos compreender melhor nossa história, nossos limites e a forma como nos relacionamos conosco e com o mundo.</p>
          <p>A psicoterapia não oferece uma fórmula pronta sobre como viver. É um encontro de escuta e construção conjunta, com tempo e respeito à sua experiência.</p>
        </Reveal>
      </section>

      <section className="statement">
        <Reveal>
          <span>acolhimento</span>
          <blockquote>“O psicoterapeuta não é aquele que cura, e sim aquele que cuida — e, quando as pessoas se sentem cuidadas, abrem o caminho para sua própria mudança.”</blockquote>
          <cite>Ribeiro, 2001</cite>
        </Reveal>
      </section>

      <section className="approach" id="gestalt">
        <Reveal className="approach-title">
          <p className="eyebrow">Gestalt-terapia</p>
          <h2>Você é mais do que aquilo que está <em>sentindo agora.</em></h2>
        </Reveal>
        <Reveal className="approach-copy">
          <p>Na Gestalt-terapia, a pessoa é compreendida em sua totalidade: sua história, seu contexto, suas relações e aquilo que acontece no presente.</p>
          <p>O processo abre espaço para perceber como você se relaciona consigo, com outras pessoas e com o mundo — ampliando consciência e possibilidades de escolha.</p>
          <blockquote>“Você é você, e eu sou eu.” <cite>— Fritz Perls</cite></blockquote>
        </Reveal>
      </section>

      <section className="reflections">
        <Reveal className="reflections-head"><p className="eyebrow">Para guardar por perto</p><h2>Algumas palavras também podem ser <em>um começo.</em></h2></Reveal>
        <div className="reflection-grid">
          {reflections.map(([mark,title,text],i)=><Reveal className="reflection-card" delay={i*.05} key={title}><span>{mark}</span><h3>{title}</h3><p>{text}</p><small>@jullietepsi</small></Reveal>)}
        </div>
      </section>

      <section className="sport" id="esporte">
        <Reveal className="sport-graphic"><span>corpo</span><strong>movimento</strong><span>presença</span></Reveal>
        <Reveal className="sport-copy">
          <p className="eyebrow">Psicologia & esporte</p>
          <h2>Duas partes de uma mesma <em>trajetória.</em></h2>
          <p>O esporte faz parte da minha vida desde a infância. No fim de 2023, esse vínculo ganhou uma nova direção profissional com o início da minha pós-graduação em Psicologia do Esporte pelo Futebol Interativo.</p>
          <p>Essa formação aproxima a experiência com o esporte e o olhar construído na psicologia.</p>
        </Reveal>
      </section>

      <section className="about" id="sobre">
        <Reveal className="about-art"><img src="/img/julliete-quem-sou-eu.jpg" alt="Arte Quem sou eu de Julliete Psicóloga" /></Reveal>
        <Reveal className="about-copy">
          <p className="eyebrow">Quem sou eu</p>
          <h2>Ei, eu sou a <em>Julliete.</em></h2>
          <p>Sou psicóloga clínica, formada pela FUMEC e especialista em Psicologia Clínica: Gestalt-terapia e Análise Existencial.</p>
          <p>Minha formação em Gestalt-terapia começou em 2020, no Instituto Carioca de Gestalt Terapia. Em 2021, iniciei minha especialização na UFMG e, em 2022, tornei-me especialista.</p>
          <p>Busco, com meu trabalho, auxiliar quem me procura a caminhar pela própria vida de forma mais consciente e amorosa consigo.</p>
          <div className="credential">Psicóloga · CRP 04/54451</div>
        </Reveal>
      </section>

      <section className="contact">
        <Reveal>
          <p className="eyebrow">Primeiro contato</p>
          <h2>Talvez começar seja <em>simplesmente conversar.</em></h2>
          <p>Se fizer sentido conhecer melhor o meu trabalho, podemos começar por uma conversa.</p>
          <div className="contact-actions">
            <a className="button light" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Conversar pelo WhatsApp</a>
            <a className="quiet-link light-link" href={instagram} target="_blank" rel="noreferrer"><Instagram size={17}/> @jullietepsi</a>
          </div>
        </Reveal>
      </section>
    </main>

    <footer>
      <div className="footer-brand"><strong>Julliete</strong><span>Psicóloga · CRP 04/54451</span></div>
      <div className="footer-links"><a href={instagram} target="_blank" rel="noreferrer">Instagram</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
      <small>© {new Date().getFullYear()} Julliete Psicóloga</small>
    </footer>
  </>;
}