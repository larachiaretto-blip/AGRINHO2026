/* ==========================================================================
   CONFIGURAÇÕES GERAIS E PALETA DE CORES
   ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root {
    --verde-escuro: #1b4332;    /* Tom floresta para cabeçalhos e destaques */
    --verde-principal: #40916c; /* Tom folha/natureza para botões e links */
    --verde-claro: #d8f3dc;     /* Fundo suave para contraste */
    --verde-floral: #74c69d;    /* Tom verde-água natural */
    --creme-natural: #f4f9f4;   /* Cor de fundo principal do site (lembra papel reciclado/natural) */
    --texto-escuro: #2d3748;    /* Cinza escuro para excelente leitura */
    --branco: #ffffff;
}

body {
    background-color: var(--creme-natural);
    color: var(--texto-escuro);
    line-height: 1.6;
}

/* ==========================================================================
   CABEÇALHO E NAVEGAÇÃO
   ========================================================================== */
header {
    background-color: var(--branco);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    box-shadow: 0 4px 15px rgba(27, 67, 50, 0.08);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 3px solid var(--verde-floral);
}

.logo h1 {
    color: var(--verde-escuro);
    font-size: 24px;
    font-weight: 700;
}

.logo h1 span {
    color: var(--verde-principal);
    font-weight: 300;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 30px;
}

nav ul li a {
    text-decoration: none;
    color: var(--texto-escuro);
    font-weight: 600;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: var(--verde-principal);
}

/* ==========================================================================
   SEÇÃO HERO (BANNER DE ENTRADA)
   ========================================================================== */
.hero {
    /* Usando um degradê que lembra a transição da terra para a folhagem */
    background: linear-gradient(135deg, rgba(27,67,50,0.9) 0%, rgba(64,145,108,0.85) 100%), 
                url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200') no-repeat center center/cover;
    padding: 100px 8%;
    text-align: center;
    color: var(--branco);
}

.hero-content h2 {
    font-size: 36px;
    margin-bottom: 20px;
    font-weight: 700;
}

.hero-content p {
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto 30px auto;
    opacity: 0.9;
}

/* Botão Estilo Orgânico/Natural */
.btn {
    display: inline-block;
    background-color: var(--verde-claro);
    color: var(--verde-escuro);
    padding: 12px 30px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 30px; /* Bordas bem arredondadas para um visual mais suave/orgânico */
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.btn:hover {
    background-color: var(--branco);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

/* ==========================================================================
   CONTEÚDO PRINCIPAL (TECNOLOGIAS / CARDS)
   ========================================================================== */
.conteudo-secao {
    padding: 80px 8%;
    text-align: center;
}

.conteudo-secao h2, .beneficios-secao h2, .sustentabilidade-secao h2 {
    color: var(--verde-escuro);
    font-size: 28px;
    margin-bottom: 10px;
    position: relative;
    display: inline-block;
}

/* Pequeno detalhe que simula uma folha ou raminho abaixo dos títulos */
.conteudo-secao h2::after, .beneficios-secao h2::after, .sustentabilidade-secao h2::after {
    content: '🍃';
    display: block;
    font-size: 16px;
    margin-top: 5px;
}

.subtitulo {
    color: var(--verde-principal);
    font-style: italic;
    margin-bottom: 40px;
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 20px;
}

.card {
    background-color: var(--branco);
    padding: 30px;
    border-radius: 15px;
    border-top: 5px solid var(--verde-principal); /* Detalhe verde no topo do card */
    box-shadow: 0 5px 15px rgba(27, 67, 50, 0.04);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(27, 67, 50, 0.1);
}

.card h3 {
    color: var(--verde-escuro);
    margin-bottom: 15px;
    font-size: 20px;
}

/* ==========================================================================
   SEÇÃO DE BENEFÍCIOS (FUNDO VERDE SUAVE)
   ========================================================================== */
.beneficios-secao {
    background-color: var(--verde-claro);
    padding: 80px 8%;
    text-align: center;
    border-radius: 50px 50px 0 0; /* Curvas suaves para parecer mais natural */
}

.lista-beneficios {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    margin-top: 40px;
}

.beneficio-item {
    background: rgba(255, 255, 255, 0.6);
    padding: 25px;
    border-radius: 12px;
    backdrop-filter: blur(5px);
}

.beneficio-item h4 {
    color: var(--verde-escuro);
    font-size: 18px;
    margin-bottom: 10px;
}

/* ==========================================================================
   SEÇÃO SUSTENTABILIDADE
   ========================================================================== */
.sustentabilidade-secao {
    padding: 80px 8%;
    text-align: center;
}

.sustentabilidade-conteudo {
    max-width: 800px;
    margin: 30px auto 0 auto;
    background-color: var(--branco);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.02);
    border-left: 5px solid var(--verde-floral);
}

.sustentabilidade-conteudo p {
    margin-bottom: 20px;
    font-size: 16px;
    text-align: justify;
}

/* ==========================================================================
   RODAPÉ E BOTÃO INTERATIVO (JAVASCRIPT)
   ========================================================================== */
footer {
    background-color: var(--verde-escuro);
    color: var(--branco);
    text-align: center;
    padding: 40px 8%;
    border-top: 5px solid var(--verde-principal);
}

footer p {
    margin-bottom: 15px;
    opacity: 0.9;
}

/* Botão de Dica do Footer */
#btnMensagem {
    background-color: var(--verde-floral);
    color: var(--verde-escuro);
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s;
}

#btnMensagem:hover {
    background-color: var(--verde-claro);
}

#mensagemDinamica {
    margin-top: 20px;
    padding: 15px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 8px;
    font-style: italic;
    display: inline-block;
    max-width: 500px;
}

/* Classe utilitária para esconder a mensagem do JS antes do clique */
.escondido {
    display: none !important;
}

/* ==========================================================================
   RESPONSIVIDADE (PARA CELULAR)
   ========================================================================== */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        gap: 15px;
        padding: 15px;
    }
    
    nav ul {
        gap: 15px;
    }

    .hero-content h2 {
        font-size: 26px;
    }
}
