(function(){
    const habilidades = [
        {nome:'HTML', nivel:'Intermediário', porcentagem:75},
        {nome:'CSS', nivel:'Intermediário', porcentagem:70},
        {nome:'JavaScript', nivel:'Básico', porcentagem:50},
        {nome:'Git e GitHub', nivel:'Básico', porcentagem:45},
        {nome:'Lógica de Programação', nivel:'Básico', porcentagem:55},
        {nome:'Redes de Computadores', nivel:'Intermediário', porcentagem:65},
        {nome:'Excel', nivel:'Básico', porcentagem:50},
        {nome:'Informática', nivel:'Intermediário', porcentagem:70}
    ];

    const projetos = [
        {
            titulo:'Web — Games & Filmes',
            descricao:'Site interativo sobre games e filmes com cards dinâmicos, efeitos visuais e layout moderno. Demonstração de manipulação de DOM e CSS avançado.',
            tags:['HTML','CSS','JavaScript','DOM'],
            icone:'ri-gamepad-line',
            classe:'game',
            github:'https://github.com/Segundoxs',
            linkedin:'https://www.linkedin.com/in/pedro-philipe-48b86425b',
            instagram:'https://www.instagram.com/pedro_philipe01/'
        },
        {
            titulo:'Comidas Típicas de PE',
            descricao:'Site gastronômico apresentando as comidas típicas de Pernambuco. Projeto com múltiplas páginas, navegação e design que valoriza a cultura nordestina.',
            tags:['HTML','CSS','Multi-página','Responsivo'],
            icone:'ri-restaurant-line',
            classe:'food',
            github:'https://github.com/Segundoxs',
            linkedin:'https://www.linkedin.com/in/pedro-philipe-48b86425b',
            instagram:'https://www.instagram.com/pedro_philipe01/'
        },
        {
            titulo:'Terror Test — Quiz Interativo',
            descricao:'Quiz divertido que descobre qual vilão de terror você seria. Com 6 perguntas, sistema de pontuação, efeitos sonoros e animações 3D nos cards.',
            tags:['HTML','CSS','JavaScript','Quiz','Áudio'],
            icone:'ri-ghost-line',
            classe:'horror',
            github:'https://github.com/Segundoxs',
            linkedin:'https://www.linkedin.com/in/pedro-philipe-48b86425b',
            instagram:'https://www.instagram.com/pedro_philipe01/'
        }
    ];

    const gridHab = document.getElementById('habilidades-grid');
    habilidades.forEach(h => {
        const card = document.createElement('div');
        card.className = 'habilidade-card reveal';
        card.innerHTML = `
            <div class="habilidade-top">
                <span class="habilidade-nome">${h.nome}</span>
                <span class="habilidade-nivel">${h.nivel}</span>
            </div>
            <div class="barra-track">
                <div class="barra-fill" data-width="${h.porcentagem}%"></div>
            </div>
        `;
        gridHab.appendChild(card);
    });

    const gridProj = document.getElementById('projetos-grid');
    projetos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'projeto-card reveal';
        card.innerHTML = `
            <div class="projeto-imagem ${p.classe}">
                <i class="${p.icone}"></i>
            </div>
            <div class="projeto-corpo">
                <h3>${p.titulo}</h3>
                <p>${p.descricao}</p>
                <div class="projeto-tags">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <div class="projeto-links">
                    <a href="${p.github}" target="_blank" rel="noopener" class="social-link github" title="Ver no GitHub">
                        <i class="ri-github-fill"></i>
                    </a>
                    <a href="${p.linkedin}" target="_blank" rel="noopener" class="social-link linkedin" title="LinkedIn">
                        <i class="ri-linkedin-box-fill"></i>
                    </a>
                    <a href="${p.instagram}" target="_blank" rel="noopener" class="social-link instagram" title="Instagram">
                        <i class="ri-instagram-fill"></i>
                    </a>
                </div>
            </div>
        `;
        gridProj.appendChild(card);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                const barra = entry.target.querySelector('.barra-fill');
                if(barra){
                    setTimeout(() => {
                        barra.style.width = barra.dataset.width;
                    }, 200);
                }
            }
        });
    }, {threshold:0.1});

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const form = document.getElementById('form-contato');
    const mensagem = document.getElementById('mensagem');
    const contador = document.getElementById('contador');
    const sucesso = document.getElementById('mensagem-sucesso');

    mensagem.addEventListener('input', () => {
        contador.textContent = mensagem.value.length;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Formulário enviado!');
        sucesso.style.display = 'block';
        form.reset();
        contador.textContent = '0';
        setTimeout(() => {
            sucesso.style.display = 'none';
        }, 5000);
    });
})();
