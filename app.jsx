/* HT Estética Automotiva — Landing */
const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Icon set ---------- */
const Ico = {
  Menu: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  Close: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>,
  Whats: (p) => <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.2c-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.3 4.7 2.6 1.1 3.1.9 3.7.8.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>,
  Arrow: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  Plus: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  Check: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>,
  Star: (p) => <svg {...p} viewBox="0 0 24 24"><path d="M12 2l3 7 7.5.7-5.7 5 1.7 7.3L12 18l-6.5 4 1.7-7.3-5.7-5L9 9z"/></svg>,
  Play: (p) => <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg>,
  Shield: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>,
  Wrench: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 00-5.4 5.4l-6.3 6.3 2 2 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2-2 2.5-2.5z"/></svg>,
  Sparkle: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/><path d="M19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1z"/></svg>,
  Droplet: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c4 5 7 8.5 7 12a7 7 0 01-14 0c0-3.5 3-7 7-12z"/></svg>,
  Car: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15l2-6a3 3 0 013-2h8a3 3 0 013 2l2 6v4h-3v-2H6v2H3z"/><circle cx="7" cy="16" r="1.5"/><circle cx="17" cy="16" r="1.5"/></svg>,
  Mail: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>,
  Insta: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
  Pin: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  Clock: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  Speed: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18a8 8 0 1116 0"/><path d="M12 18l4-6"/><circle cx="12" cy="18" r="1.5" fill="currentColor"/></svg>,
  Award: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/></svg>,
  Chevron: (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>,
};

/* ---------- Brand Logo ---------- */
function Logo({ size = 15 }) {
  return (
    <div className="logo">
      <div className="logo-mark">HT</div>
      <div className="logo-text" style={{ fontSize: size }}>
        <span className="or">HT</span>{" "}
        <span className="bl">Estética</span>{" "}
        <span className="or">Automotiva</span>
      </div>
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <Logo />
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <a href={window.waLink()} target="_blank" rel="noreferrer" className="nav-cta">
              <Ico.Whats style={{ width: 14, height: 14 }} /> Orçamento
            </a>
          </div>
          <button className="burger" onClick={() => setOpen(!open)}>
            {open ? <Ico.Close /> : <Ico.Menu />}
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <div style={{ marginTop: 24 }}>
          <a href={window.waLink()} target="_blank" rel="noreferrer" className="btn btn-primary" style={{width:"100%",justifyContent:"center"}}>
            <Ico.Whats style={{width:16,height:16}}/> Solicitar Orçamento
          </a>
        </div>
      </div>
    </>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot"></span>
          Atendimento a domicílio · Sorocaba e região
        </div>
        <div className="hero-grid">
          <div>
            <h1 className="h1 title-font">
              Cuide do <span className="accent">chega</span><br />
              antes de <span className="stroke">você</span><span style={{display:"inline-block",width:"0.3em"}}></span>!
            </h1>
            <p className="hero-sub">
              Polimento que transforma, presença que impõe respeito.
              Técnica premium, produtos profissionais e o cuidado de quem trata cada carro como único.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={window.waLink()} target="_blank" rel="noreferrer">
                <Ico.Whats style={{width:16,height:16}}/> Solicitar Orçamento Gratuito
              </a>
              <a className="btn btn-ghost" href="#servicos">
                Conhecer Serviços <Ico.Arrow style={{width:16,height:16}}/>
              </a>
            </div>

            <div className="stat-strip">
              <div className="stat">
                <div className="stat-num">+70<span className="u">★</span></div>
                <div className="stat-lbl">Carros atendidos</div>
              </div>
              <div className="stat">
                <div className="stat-num">4.9<span className="u">/5</span></div>
                <div className="stat-lbl">Satisfação</div>
              </div>
              <div className="stat">
                <div className="stat-num">100<span className="u">%</span></div>
                <div className="stat-lbl">A domicílio</div>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-corners"></div>
            <div className="hero-tag tl">◉ REC · 4K</div>
            <div className="hero-tag tr">HT · 001</div>
            <div className="hero-tag bl">POLIMENTO / DETAILING</div>
            <div className="hero-tag br">SOROCABA–SP</div>
            <div className="hero-media-inner">
              <div className="car-placeholder">
                [ vídeo do antes/depois · placeholder ]
              </div>
            </div>
            <button className="play-btn" aria-label="Play video">
              <span className="play-pulse"></span>
              <Ico.Play />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services (4 pillars) ---------- */
function Pillars() {
  const items = [
    { n: "01", ico: <Ico.Wrench />, t: "Correção de Riscos", d: "Elimina arranhões, manchas e imperfeições profundas usando técnicas de corte profissional." },
    { n: "02", ico: <Ico.Sparkle />, t: "Aplicação de Polimento", d: "Refinamento da superfície para restaurar o brilho original e uniformizar a pintura." },
    { n: "03", ico: <Ico.Shield />, t: "Proteção e Selagem", d: "Camada protetora contra raios UV, chuva ácida e poluentes atmosféricos." },
    { n: "04", ico: <Ico.Car />, t: "Resultado Final", d: "Brilho profundo e duradouro com proteção garantida por meses." },
  ];
  return (
    <section className="section" id="processo">
      <div className="container">
        <div className="reveal">
          <div className="sec-eyebrow">Nosso processo</div>
          <h2 className="sec-title title-font">
            Não se trata apenas de limpar,<br/>
            mas de <span className="o">restaurar e proteger</span>.
          </h2>
          <p className="sec-sub">Utilizamos produtos e técnicas de ponta para um resultado superior e duradouro. Cada etapa é executada com atenção e paciência.</p>
        </div>
        <div className="services stagger reveal">
          {items.map((it) => (
            <div className="svc" key={it.n}>
              <div className="svc-num">// {it.n}</div>
              <div className="svc-ico">{it.ico}</div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
              <div className="svc-line"></div>
            </div>
          ))}
        </div>

        <BeforeAfter />
      </div>
    </section>
  );
}

/* ---------- Before / After carousel ---------- */
const BA_SLIDES = [
  { label: "Polimento completo",   before: "OPACO",   after: "BRILHO",   car: "Honda Civic — preto" },
  { label: "Correção de riscos",    before: "ARRANHADO", after: "ESPELHADO", car: "VW Jetta — prata" },
  { label: "Vitrificação",          before: "FOSCO",   after: "CRISTAL",  car: "Toyota Corolla — branco" },
  { label: "Revitalização de faróis", before: "AMARELADO", after: "NOVO",  car: "Chevrolet Onix" },
];
function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);
  const total = BA_SLIDES.length;
  const cur = BA_SLIDES[idx];
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
    setPos(Math.max(4, Math.min(96, (x / r.width) * 100)));
  };
  const start = () => {
    const mv = (e) => move(e);
    const up = () => {
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("touchmove", mv);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
    window.addEventListener("mousemove", mv);
    window.addEventListener("touchmove", mv);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
  };
  return (
    <div className="reveal" style={{ marginTop: 80 }}>
      <div className="divider" style={{display:"flex",alignItems:"center",gap:16}}>
        <span>ANTES × DEPOIS / Arraste para comparar</span>
        <span style={{flex:1,height:1,background:"linear-gradient(90deg,var(--line),transparent)"}}></span>
        <span style={{fontFamily:"'JetBrains Mono',monospace",color:"var(--orange)"}}>
          {String(idx+1).padStart(2,"0")} / {String(total).padStart(2,"0")}
        </span>
      </div>
      <div className="ba" ref={ref} onMouseDown={start} onTouchStart={start}>
        <div className="ba-layer ba-before">
          <div className="ba-shine-text">{cur.before}</div>
        </div>
        <div className="ba-layer ba-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <div className="ba-shine-text" style={{ color: "rgba(255,106,26,.2)" }}>{cur.after}</div>
        </div>
        <div className="ba-label ba-before-lbl">Antes</div>
        <div className="ba-label ba-after-lbl">Depois</div>
        <div className="ba-caption">
          <div className="ba-cap-title">{cur.label}</div>
          <div className="ba-cap-sub">{cur.car}</div>
        </div>
        <div className="ba-handle" style={{ left: `${pos}%` }}></div>
        <div className="ba-knob" style={{ left: `${pos}%` }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/></svg>
        </div>
        <button className="ba-nav prev" onClick={(e)=>{e.stopPropagation();setIdx((idx-1+total)%total);setPos(50)}} aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
        </button>
        <button className="ba-nav next" onClick={(e)=>{e.stopPropagation();setIdx((idx+1)%total);setPos(50)}} aria-label="Próximo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
        </button>
      </div>
      <div className="ba-dots">
        {BA_SLIDES.map((_,i)=>(
          <button key={i} className={`ba-dot ${i===idx?"on":""}`} onClick={()=>{setIdx(i);setPos(50)}} aria-label={`Ir para foto ${i+1}`}/>
        ))}
      </div>
    </div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section className="section" id="sobre" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="about">
          <div className="reveal">
            <div className="about-media">
              <div className="about-frame">
                <div className="about-person">
                  <div style={{textAlign:"center"}}>
                    <div style={{
                      width:80,height:80,borderRadius:"50%",margin:"0 auto 12px",
                      background:"linear-gradient(135deg,#ff6a1a,#d94e00)",
                      display:"grid",placeItems:"center",
                      fontFamily:"Orbitron",fontWeight:800,fontSize:28,color:"#fff",
                      boxShadow:"0 20px 40px -10px rgba(255,106,26,.5)"
                    }}>HT</div>
                    <div className="pmark">[ foto do Henrique ]</div>
                  </div>
                </div>
              </div>
              <div className="cert-card">
                <div className="cert-img"></div>
                <div className="cert-label">Certificado Profissional</div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="sec-eyebrow">Quem está por trás</div>
            <h2 className="title-font">
              Mais do que polir, é <span className="o">restaurar a história</span>.
            </h2>
            <p>
              Meu nome é <b>Henrique</b>, eu fundei este serviço movido por uma paixão genuína por
              automóveis e um respeito profundo pelo trabalho bem feito.
            </p>
            <p>
              O seu veículo é muito mais que um meio de transporte — <b>ele é testemunha das suas conquistas</b>.
              Por isso, meu compromisso não é simplesmente em polir, mas honrar essa história com o cuidado que ela merece.
            </p>
            <p>
              Mesmo sendo novo no mercado, trago algo que vale mais que anos de experiência:
              <span className="hi"> dedicação minuciosa</span> e <span className="hi">honestidade total</span> com cada cliente.
            </p>
            <div className="about-quote">
              Aqui, o seu carro não é "mais um". Ele é o mais importante.
            </div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <a className="btn btn-primary" href={window.waLink("Olá Henrique, quero solicitar um orçamento.")} target="_blank" rel="noreferrer">
                <Ico.Whats style={{width:16,height:16}}/> Solicitar orçamento
              </a>
              <a className="btn btn-ghost" href="#servicos">
                Ver serviços <Ico.Arrow style={{width:16,height:16}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Wash / Serviços ---------- */
function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <div className="reveal" style={{textAlign:"center"}}>
          <div className="sec-eyebrow" style={{justifyContent:"center",display:"inline-flex"}}>Pacotes</div>
          <h2 className="sec-title title-font">Nossos <span className="o">Serviços</span></h2>
          <p className="sec-sub" style={{margin:"0 auto"}}>Escolha o cuidado ideal. Transparência total no que está incluso.</p>
        </div>
        <div className="wash-wrap reveal">
          <div className="wash">
            <div className="wash-ico"><Ico.Droplet /></div>
            <h3 className="title-font">Lavagem Simples</h3>
            <div className="wash-price">
              <span className="p">sob consulta</span>
              <span className="l">· atendimento a domicílio</span>
            </div>
            <ul>
              <li><Ico.Check /><span><b>Limpeza interna simples</b> — aspiração e higienização</span></li>
              <li><Ico.Check /><span><b>Lavagem externa completa</b> com shampoo neutro</span></li>
              <li><Ico.Check /><span><b>Pretinho nos pneus</b> e finalização</span></li>
            </ul>
            <a href={window.waLink("Olá! Gostaria de orçamento para a Lavagem Simples.")} target="_blank" rel="noreferrer" className="wash-btn ghost">
              Solicitar <Ico.Arrow style={{width:14,height:14}}/>
            </a>
          </div>

          <div className="wash featured">
            <div className="wash-badge">Mais pedido</div>
            <div className="wash-ico"><Ico.Sparkle /></div>
            <h3 className="title-font">Lavagem Completa</h3>
            <div className="wash-price">
              <span className="p">sob consulta</span>
              <span className="l">· pacote premium</span>
            </div>
            <ul>
              <li><Ico.Check /><span><b>Limpeza interna</b> profunda com produtos específicos</span></li>
              <li><Ico.Check /><span><b>Lavagem externa completa</b> + descontaminação</span></li>
              <li><Ico.Check /><span><b>Enceramento completo da lataria</b> com brilho duradouro</span></li>
              <li><Ico.Check /><span><b>Revitalização</b> de plásticos e pretinho nos pneus</span></li>
            </ul>
            <a href={window.waLink("Olá! Gostaria de orçamento para a Lavagem Completa.")} target="_blank" rel="noreferrer" className="wash-btn">
              Solicitar orçamento <Ico.Arrow style={{width:14,height:14}}/>
            </a>
          </div>
        </div>

        <div className="cta-band reveal">
          <div>
            <h3 className="title-font">Não sabe qual serviço escolher?</h3>
            <p>Envie uma foto do seu carro no WhatsApp — eu analiso e recomendo o ideal pra você.</p>
          </div>
          <a className="btn btn-whats" href={window.waLink("Olá Henrique! Gostaria de entender qual serviço é ideal para meu carro.")} target="_blank" rel="noreferrer">
            <Ico.Whats style={{width:18,height:18}}/> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testis() {
  const data = [
    { name: "Carlos M.", role: "Volkswagen Jetta", text: "Trabalho impecável! Meu carro parece ter saído da concessionária. Recomendo demais!" },
    { name: "Maria G.", role: "Honda Civic", text: "Adorei o resultado final do meu carro. Atendimento excelente e muito atencioso." },
    { name: "Arthur B.", role: "Toyota Corolla", text: "O Henrique ressuscitou o brilho do meu carro, que trabalho incrível!" },
    { name: "Bia H.", role: "Jeep Compass", text: "Adorei o resultado do meu carro, com certeza vou contratá-lo novamente!" },
    { name: "Rafael P.", role: "Chevrolet Onix", text: "Profissionalismo do começo ao fim. A cor do meu preto voltou a ser preta de verdade." },
    { name: "Lívia S.", role: "Hyundai HB20", text: "Melhor custo-benefício da região. Super atencioso e pontual. Sumiram os riscos!" },
  ];
  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <div className="reveal" style={{textAlign:"center"}}>
          <div className="sec-eyebrow" style={{display:"inline-flex",justifyContent:"center"}}>Depoimentos</div>
          <h2 className="sec-title title-font">O que nossos <span className="o">clientes dizem</span></h2>
          <p className="sec-sub" style={{margin:"0 auto"}}>Avaliações reais de quem já confiou o carro com a gente.</p>
        </div>
        <div className="testis reveal">
          {data.map((t, i) => (
            <div className="testi" key={i}>
              <div className="testi-quote">"</div>
              <div className="testi-stars">
                {Array.from({length:5}).map((_,j)=><Ico.Star key={j}/>)}
              </div>
              <p>"{t.text}"</p>
              <div className="testi-who">
                <div className="testi-av">{t.name[0]}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "Quanto tempo leva para fazer o polimento?", a: "O polimento técnico leva em média de 4 a 8 horas, dependendo do estado da pintura. Lavagens completas levam cerca de 1h30 a 2h. Todo o serviço é feito com calma, sem pressa — qualidade exige tempo." },
    { q: "O polimento tira riscos de chave e arranhões?", a: "Riscos superficiais (que não prenderam a unha) saem completamente. Riscos profundos podem ser atenuados — eu avalio caso a caso e te falo com honestidade o que é possível atingir antes de começar o trabalho." },
    { q: "Quanto tempo dura o resultado?", a: "Com enceramento profissional, o brilho dura cerca de 30 a 45 dias de proteção ativa. Com selantes e coatings (serviços premium), essa durabilidade se estende por muitos meses." },
    { q: "Atende em condomínio? Preciso de autorização?", a: "Sim, atendemos em condomínios. Recomendo que você avise a portaria e, se necessário, solicite autorização à administração. Levamos toda a estrutura: água, energia, produtos e equipamentos." },
    { q: "Gasta muita água e energia, já que é em casa?", a: "Não. Utilizamos técnicas de lavagem a seco e a baixo consumo quando necessário. Em média, gastamos menos de 30 litros de água por veículo — bem menos que uma lavagem tradicional." },
    { q: "Quais regiões atendem?", a: "Atendemos Sorocaba e cidades vizinhas. Para regiões mais distantes, consulte a disponibilidade e pode haver uma pequena taxa de deslocamento." },
  ];
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="reveal" style={{textAlign:"center"}}>
          <div className="sec-eyebrow" style={{display:"inline-flex",justifyContent:"center"}}>Perguntas</div>
          <h2 className="sec-title title-font"><span className="o">Dúvidas</span> Frequentes</h2>
          <p className="sec-sub" style={{margin:"0 auto"}}>Tire suas principais dúvidas antes mesmo de pedir orçamento.</p>
        </div>
        <div className="faq reveal">
          {items.map((it,i) => (
            <details className="faq-item" key={i}>
              <summary className="faq-q">
                <span>{it.q}</span>
                <span className="faq-plus"><Ico.Plus /></span>
              </summary>
              <div className="faq-a">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section className="section" id="contato" style={{ paddingBottom: 80 }}>
      <div className="container">
        <div className="reveal" style={{textAlign:"center"}}>
          <div className="sec-eyebrow" style={{display:"inline-flex",justifyContent:"center"}}>Contato</div>
          <h2 className="sec-title title-font">Pronto para um <span className="o">brilho</span><br/>que vem até você?</h2>
          <p className="sec-sub" style={{margin:"0 auto"}}>Atendimento a domicílio em Sorocaba e região. Resposta em minutos no WhatsApp.</p>
        </div>

        <div className="contact-single">
          <div className="contact-card reveal">
            <div className="divider">CANAIS DIRETOS</div>

            <a className="contact-row" href={window.waLink()} target="_blank" rel="noreferrer">
              <div className="contact-ico wa"><Ico.Whats /></div>
              <div style={{flex:1}}>
                <div className="contact-lbl">WhatsApp</div>
                <div className="contact-val">(15) 9 ____-____</div>
              </div>
              <Ico.Arrow style={{width:18,height:18,color:"var(--fg-mute)"}}/>
            </a>

            <a className="contact-row" href="mailto:tedescohenrique@hotmail.com">
              <div className="contact-ico em"><Ico.Mail /></div>
              <div style={{flex:1}}>
                <div className="contact-lbl">E-mail</div>
                <div className="contact-val">tedescohenrique@hotmail.com</div>
              </div>
              <Ico.Arrow style={{width:18,height:18,color:"var(--fg-mute)"}}/>
            </a>

            <a className="contact-row" href="https://www.instagram.com/ht.esteticaautomotiva" target="_blank" rel="noreferrer">
              <div className="contact-ico ig"><Ico.Insta /></div>
              <div style={{flex:1}}>
                <div className="contact-lbl">Instagram</div>
                <div className="contact-val">@ht.esteticaautomotiva</div>
              </div>
              <Ico.Arrow style={{width:18,height:18,color:"var(--fg-mute)"}}/>
            </a>

            <div className="contact-row">
              <div className="contact-ico loc"><Ico.Pin /></div>
              <div style={{flex:1}}>
                <div className="contact-lbl">Atendimento</div>
                <div className="contact-val">Sorocaba e região · a domicílio</div>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-ico loc"><Ico.Clock /></div>
              <div style={{flex:1}}>
                <div className="contact-lbl">Horário</div>
                <div className="contact-val">Seg — Sáb · 08h às 18h</div>
              </div>
            </div>

            <div style={{marginTop:22}}>
              <a className="btn btn-whats" href={window.waLink()} target="_blank" rel="noreferrer" style={{width:"100%",justifyContent:"center"}}>
                <Ico.Whats style={{width:18,height:18}}/> Chamar no WhatsApp agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot">
            <div className="foot-brand">
              <span className="or">HT</span>{" "}
              <span className="bl">Estética</span>{" "}
              <span className="or">Automotiva</span>
            </div>
            <p className="foot-desc">
              Detalhamento automotivo com paixão e técnica. Atendimento a domicílio em Sorocaba e região.
            </p>
            <div className="foot-socials">
              <a href="https://www.instagram.com/ht.esteticaautomotiva" target="_blank" rel="noreferrer" aria-label="Instagram"><Ico.Insta /></a>
              <a href={window.waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Ico.Whats /></a>
              <a href="mailto:tedescohenrique@hotmail.com" aria-label="Email"><Ico.Mail /></a>
            </div>
          </div>
          <div className="foot">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="foot">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#servicos">Lavagem Simples</a></li>
              <li><a href="#servicos">Lavagem Completa</a></li>
              <li><a href="#processo">Polimento</a></li>
              <li><a href="#processo">Proteção e Selagem</a></li>
            </ul>
          </div>
          <div className="foot">
            <h4>Atendimento</h4>
            <ul>
              <li>Sorocaba — SP</li>
              <li>Seg–Sáb · 08h às 18h</li>
              <li>A domicílio</li>
              <li>Resposta em minutos</li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 HT Estética Automotiva. Todos os direitos reservados.</div>
          <div style={{fontFamily:"'JetBrains Mono',monospace"}}>SOROCABA–SP · BRASIL</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Tweaks panel ---------- */
function TweaksPanel({ on, tweaks, setTweaks }) {
  const setT = (key, val) => {
    const next = { ...tweaks, [key]: val };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: val } }, "*");
  };
  const Row = ({ label, keyName, options }) => (
    <>
      <label>{label}</label>
      <div className="tweak-opts">
        {options.map((o) => (
          <button
            key={o.val}
            className={tweaks[keyName] === o.val ? "on" : ""}
            onClick={() => setT(keyName, o.val)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </>
  );
  return (
    <div className={`tweaks ${on ? "on" : ""}`}>
      <h4>Tweaks</h4>
      <Row label="Fonte dos títulos" keyName="font" options={[
        {val:"pirate",label:"Orbitron (tech)"},
        {val:"racing",label:"Racing Sans One"},
        {val:"bebas",label:"Bebas Neue"},
        {val:"teko",label:"Teko"},
      ]}/>
      <Row label="Atmosfera (brilho)" keyName="atmos" options={[
        {val:"on",label:"Ativa"},
        {val:"off",label:"Plana"},
      ]}/>
      <Row label="Paleta" keyName="palette" options={[
        {val:"orange",label:"Laranja HT"},
        {val:"amber",label:"Âmbar"},
        {val:"red",label:"Vermelho"},
      ]}/>
      <p style={{fontSize:11,color:"var(--fg-mute)",marginTop:16,lineHeight:1.5}}>
        As alterações são salvas automaticamente. Ative/desative pelo botão "Tweaks" na barra do topo.
      </p>
    </div>
  );
}

/* ---------- Apply tweaks to CSS vars ---------- */
function applyTweaks(t) {
  const root = document.documentElement;
  const fontMap = {
    pirate: "'Orbitron'",
    racing: "'Racing Sans One'",
    bebas: "'Bebas Neue'",
    teko: "'Teko'",
  };
  const trackingMap = { pirate: ".02em", racing: ".01em", bebas: ".04em", teko: ".02em" };
  const caseMap = { pirate: "none", racing: "none", bebas: "uppercase", teko: "none" };
  root.style.setProperty("--title-font", fontMap[t.font] || fontMap.pirate);
  root.style.setProperty("--title-tracking", trackingMap[t.font] || ".02em");
  root.style.setProperty("--title-case", caseMap[t.font] || "none");
  root.style.setProperty("--atmos-opacity", t.atmos === "off" ? "0" : "1");

  const palettes = {
    orange: { a: "#ff6a1a", b: "#ff8c3a", c: "#d94e00" },
    amber:  { a: "#fbbf24", b: "#fcd34d", c: "#d97706" },
    red:    { a: "#ef4444", b: "#f87171", c: "#b91c1c" },
  };
  const p = palettes[t.palette] || palettes.orange;
  root.style.setProperty("--orange", p.a);
  root.style.setProperty("--orange-2", p.b);
  root.style.setProperty("--orange-deep", p.c);
}

/* ---------- App ---------- */
function App() {
  const [tweaks, setTweaks] = useState(window.TWEAKS || { font: "pirate", atmos: "on", palette: "orange" });
  const [tweakOn, setTweakOn] = useState(false);

  useEffect(() => {
    applyTweaks(tweaks);
  }, [tweaks]);

  useEffect(() => {
    // Scroll reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal, .stagger").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setTweakOn(true);
      if (e.data.type === "__deactivate_edit_mode") setTweakOn(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <Pillars />
      <About />
      <Services />
      <Testis />
      <FAQ />
      <Contact />
      <Footer />

      <a href={window.waLink()} target="_blank" rel="noreferrer" className="float-wa" aria-label="WhatsApp">
        <Ico.Whats />
      </a>

      <TweaksPanel on={tweakOn} tweaks={tweaks} setTweaks={setTweaks} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
