# 3. Estratégias De Engenharia De Software

___________________________________________________________________________________

## 3.1 Estratégia Priorizada

<div class="grid cards" markdown>
- [:material-clipboard-arrow-right-outline:](https://mdsreq-fga-unb.github.io/2024.2-T01-FamintosBurguer/ProdutoProjeto/3_Estrategia/) __Abordagem -__ Dirigida a plano.
</div>
<div class="grid cards" markdown>
- [:material-dots-circle:](https://mdsreq-fga-unb.github.io/2024.2-T01-FamintosBurguer/ProdutoProjeto/3_Estrategia/) __Ciclo de vida -__ Iterativo.
</div>
<div class="grid cards" markdown>
- [:simple-processingfoundation:](https://mdsreq-fga-unb.github.io/2024.2-T01-FamintosBurguer/ProdutoProjeto/3_Estrategia/) __Processo -__ Espiral. 
</div>

___________________________________________________________________________________

## 3.2 Quadro Comparativo 

O Quadro, a seguir, apresenta algumas características que podem ser relacionadas ao processo Espiral e ao Processo Unificado, com o objetivo de ajudar no entendimento e justificativa da escolha do processo mais adequado ao caso da Famintos Burguer. 

|Características     |Processo Espiral|Processo Unificado |
|:------------------|:--------------|:-----------------|
|Abordagem Geral     |Dirigida a plano e focada na mitigação de riscos.  |  Dirigida a plano, com foco em iterações e refinamento contínuo.  | 
|Foco em Arquitetura |Alto foco em arquitetura e design no início do projeto. |  Foco em arquitetura nas fases iniciais, com iterações para refinamento. |
|Estrutura de Processos|Consiste em ciclos ou "espirais", onde cada ciclo inclui quatro fases: Planejamento, Análise de Riscos, Desenvolvimento e Avaliação do Cliente. |Estrutura de processos bem definida, mas adaptável conforme necessário. Compreende quatro fases principais: Iniciação, Elaboração, Construção e Transição. |
|Flexibilidade de Requisitos |É mais flexível, permitindo adaptações frequentes baseadas em feedback contínuo e resultados das avaliações de riscos. O processo pode ser moldado de acordo com as necessidades do projeto e as condições do ambiente de desenvolvimento. |Oferece uma estrutura mais rígida em termos de fases e atividades, mas ainda assim permite adaptações dentro de suas iterações. É projetado para se adaptar a diferentes contextos e tipos de projeto, mas mantém uma abordagem mais formal. |
|Colaboração com Cliente |Envolve a coleta de feedback com o cliente ao fim de cada ciclo.|Colaboração com o cliente durante todo o processo, especialmente nas fases iniciais.|
|Complexidade do Processo|Complexidade moderada, focada na gestão de riscos e ajustes iterativos.|Alta complexidade devido à formalidade e necessidade de documentação detalhada. |
|Qualidade Técnica|Alto foco em testes e validação ao fim de cada ciclo, adaptável às necessidades.|Enfoque contínuo em qualidade, com revisão de código e testes em cada fase. |
|Práticas de Desenvolvimento|Práticas de desenvolvimento bem definidas, mas podem ser menos flexíveis.|Práticas definidas, mas com flexibilidade para adotar métodos ágeis e melhores práticas.|
|Adaptação ao Projeto da Famintos Burguer |Ideal para requisitos mutáveis e equipe inexperiente, permitindo ajustes frequentes.| Adequado para projetos com maior clareza de requisitos e equipe experiente.|
|Documentação|A documentação pode ser menos formal e varia de acordo com as necessidades do projeto e as etapas do ciclo. O foco está mais na comunicação contínua e na adaptação às mudanças do que em documentação extensiva.|Enfatiza a documentação em cada fase, com entregáveis claros e planejados para garantir a qualidade e rastreabilidade. A documentação é uma parte integral, ajudando a manter o controle do progresso e da comunicação entre as partes interessadas. | 
|Controle de Qualidade |Controle de qualidade mais formal e planejado. Ao final de cada ciclo são realizadas mais verificações.|Controle de qualidade em cada fase, com ênfase na revisão e teste contínuos.| 
|Escalabilidade |Escalável para projetos maiores, mas com complexidade aumentada.| Altamente escalável, adequado para projetos de diferentes tamanhos e complexidades.| 
|Suporte para Equipes de Desenvolvimento| Suporte a equipes através de documentação e estrutura clara.| Suporte a equipes organizadas em unidades de desenvolvimento, com foco na colaboração.| 

!!! note "Referências:"
    <p style="font-size: 12px"> 
        <a href="https://aprender3.unb.br/pluginfile.php/2976243/mod_folder/content/0/Unidade%201%20-%20Aula%20-%20Aborgadens%2C%20Ciclos%20de%20Vida%20e%20Processo.pdf">- Slides do Professor</a> 
        <p>- PRESSMAN, R. S.; MAXIM, Bruce R.Engenharia de Software: Uma Abordagem Profissional. 9. ed. Porto Alegre: AMGH, 2021.</p>
    </p>

___________________________________________________________________________________

## 3.3 Justificativa

- **Escolha do Processo Espiral**
    <div style="text-align: justify">

    Com base nas justificativas apresentadas, a escolha do ciclo de vida do projeto Famintos Burger reflete a necessidade de flexibilidade e adaptabilidade no desenvolvimento, características que são fundamentais devido à complexidade dos requisitos, à limitação de experiência da equipe e à participação restrita do usuário. O grupo optou por um modelo de ciclo iterativo e incremental, priorizando ajustes contínuos durante o desenvolvimento, conforme novos requisitos emergem e mudanças se tornam necessárias.
    
    </div>

- **Comparação com o Processo Unificado**
    <div style="text-align: justify">

    O Ciclo de Vida Unificado também utiliza iterações e permite revisões em cada fase, o que pode acomodar mudanças nos requisitos. No entanto, a abordagem escolhida pelo grupo diverge em alguns aspectos chave:

    - Definição de Requisitos:

        Escolha do Grupo: Os requisitos não são totalmente definidos no início e mudam frequentemente, o que exige flexibilidade maior do que a oferecida pelo RUP, que tradicionalmente espera maior clareza ao menos ao final das fases iniciais.
        RUP: Enquanto suporta iterações, geralmente conta com um detalhamento inicial mais sólido, especialmente na fase de concepção e elaboração.

    - Experiência da Equipe:

        Escolha do Grupo: Devido à experiência limitada da equipe, é essencial um ciclo que permita aprendizado contínuo e adaptações ao longo do tempo, além de ciclos curtos para minimizar débitos técnicos.
        RUP: A expectativa é que a equipe já tenha familiaridade com o ciclo e tecnologias, o que torna o aprendizado paralelo um desafio maior em projetos complexos.

    - Envolvimento do Usuário:

        Escolha do Grupo: A participação do usuário é limitada e ocorre apenas no final de cada ciclo, com feedbacks para ajustar o próximo.
        RUP: Prevê maior envolvimento do usuário, especialmente na validação dos requisitos e nas entregas parciais.

    - Complexidade e Prazo:

        Escolha do Grupo: O projeto é considerado complexo, e o cronograma apertado requer entregas incrementais rápidas e funcionais.
        RUP: É robusto para projetos complexos, mas o foco detalhado em fases iniciais pode não ser ideal para prazos extremamente curtos.
    
    </div>

- **Conclusão Geral**
    <div style="text-align: justify">

    A abordagem iterativa e dirigida ao plano prioriza o controle e a previsibilidade, ajustando-se à realidade do projeto, onde os requisitos não são totalmente definidos no início e estão sujeitos a mudanças frequentes. Isso garante ciclos planejados, mas com espaço para aprendizado contínuo e ajustes conforme novos desafios surgem.
    
    Em cima disso, o processo espiral oferece benefícios como a mitigação contínua de riscos, adaptabilidade a mudanças e priorização de funcionalidades, permitindo entregas incrementais de valor ao cliente. Além disso, favorece o aprendizado contínuo da equipe e a incorporação de feedbacks, garantindo melhorias progressivas na qualidade do sistema enquanto mantém um planejamento estruturado.
    
    </div>
___________________________________________________________________________________