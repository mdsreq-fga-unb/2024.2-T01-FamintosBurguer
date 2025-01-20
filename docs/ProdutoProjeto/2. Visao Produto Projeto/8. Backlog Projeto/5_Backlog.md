---
hide:
  - toc
---
# 8.5. Backlog do Projeto
___________________________________________________________________________________

## 8.5.1. Backlog

O Backlog do Produto é uma lista organizada de tudo o que precisa ser desenvolvido no sistema Famintos Burger. Ele contém os requisitos, funcionalidades e melhorias que serão implementados, priorizados de acordo com o valor que agregam ao negócio e as necessidades dos usuários.  
O backlog serve como uma fonte central de informações para a equipe de desenvolvimento, garantindo clareza e alinhamento durante a execução do projeto. Ele é constantemente revisado e ajustado conforme o progresso do trabalho e mudanças nos requisitos.

### Intervalos e Interpretação:

| Intervalo | Prioridade | Ação |
|-----------|------------|------|
| ≥ 1.5                   | Alta Prioridade | Altíssimo impacto em relação ao esforço. Deve ser implementado primeiro. |
| 1 ≤ Prioridade < 1.5    | Moderada Prioridade | Impacto equilibrado em relação ao esforço. Pode ser incluído no planejamento conforme recursos disponíveis. |
| < 1                     | Baixa Prioridade | Impacto equilibrado em relação ao esforço. Pode ser incluído no planejamento conforme recursos disponíveis. |    

### Critérios para Valor de Negócio: (Requisitos Funcionais)

Avalie cada critério de 1 (baixa importância) a 5 (alta importância):  
1. **Frequência de Uso**: Quantas vezes a funcionalidade será usada?  
2. **Impacto no Cliente**: Quão importante é para o cliente ou usuário final?  
3. **Redução de Custos**: A funcionalidade diminui custos para o negócio?  
4. **Diferenciação Competitiva**: Gera vantagem frente aos concorrentes?  
5. **Feedback de Clientes/Stakeholders**: O que foi solicitado por partes interessadas?  

**Fórmula**:  
`valor de negócio = soma dos 5 critérios de valor de negócio`

### Critérios para Complexidade Técnica: (Requisitos Funcionais)

Avalie cada critério de 1 (baixo esforço) a 5 (alto esforço):  
1. **Esforço Estimado para Desenvolver**: Quão difícil é implementar?  
2. **Integração com Outros Sistemas**: Necessita conexões complexas com outros sistemas?  
3. **Familiaridade Técnica**: O time já conhece as tecnologias envolvidas?  
4. **Testabilidade**: Quão fácil é testar a funcionalidade?  
5. **Manutenção e Suporte**: Quão difícil será manter e suportar essa funcionalidade no futuro?  

**Fórmula**:  
`complexidade técnica = soma dos 5 critérios de complexidade técnica`

### Critérios de priorização para os RNFs
#### **Entendendo os critérios do URPS+**
- **Utilidade (U):** Qual a importância do requisito para o sucesso do sistema?  
- **Raridade (R):** Quão raro ou específico é o requisito no contexto do sistema?  
- **Penalidade (P):** O impacto ou prejuízo caso o requisito não seja atendido.  
- **Satisfação (S):** O benefício ou satisfação percebida ao atender o requisito.  
- **+ (Esforço):** O quão difícil é implementar este requisito?

---

### **Atribuir notas aos critérios**  
Cada Requisito Não Funcional (RNF) é avaliado com uma nota de **1 a 5** para cada critério, refletindo sua relevância. O critério **Esforço** recebe uma nota negativa, representando o impacto adverso em termos de dificuldade ou recursos necessários para implementação.  

Após a atribuição das notas, o total é calculado somando os valores de todos os critérios e ajustando pelo fator do esforço. Por fim, o valor total é dividido por **10** para normalização.

___________________________________________________________________________________

## 8.5.2. Backlog - Requisitos Funcionais

| **Tema** | **Épico** | **User Story** | **Descrição**                                              | **Prioridade**       |
|----------|-----------|----------------|------------------------------------------------------------|----------------------|
| T-01     | E-01      | US-01          | Visualizar o cardápio completo.                            | P = 2,20 (Alta)      |
| T-01     | E-02      | US-02          | Apresentar os lanches mais pedidos.                        | P = 1,60 (Alta)      |
| T-01     | E-02      | US-03          | Exibir informações detalhadas dos lanches.                 | P = 1,69 (Alta)      |
| T-01     | E-01      | US-04          | Cadastrar lanches e ingredientes no cardápio.              | P = 1,56 (Alta)      |
| T-01     | E-01      | US-05          | Editar lanches cadastrados.                                | P = 1,50 (Alta)      |
| T-01     | E-01      | US-06          | Remover lanches e ingredientes do cardápio.                | P = 0,62 (Baixa)     |
| T-02     | E-03      | US-07          | Consultar pedidos em tempo real.                           | P = 1,26 (Moderada)  |
| T-02     | E-01      | US-08          | Cancelar pedidos registrados.                              | P = 0,83 (Baixa)     |
| T-02     | E-03      | US-09          | Indicar e editar o status de pagamento do pedido.          | P = 1,78 (Alta)      |
| T-03     | E-05      | US-10          | Personalizar lanches com base nas preferências do cliente. | P = 1,35 (Moderada)  |
| T-03     | E-05      | US-11          | Criar hambúrgueres personalizados.                         | P = 1,66 (Alta)      |
| T-04     | E-06      | US-12          | Imprimir comandas.                                         | P = 1,47 (Moderada)  |
| T-03     | E-05      | US-13          | Criar combos personalizados.                               | P = 0,66 (Baixa)     |
| T-04     | E-07      | US-14          | Gerenciar promoções com validade definida.                 | P = 0,50 (Baixa)     |
| T-02     | E-04      | US-15          | Rastrear pedidos por cliente.                              | P = 2,08 (Alta)      |
| T-02     | E-04      | US-16          | Consultar histórico de pedidos realizados.                 | P = 1,92 (Alta)      |
| T-02     | E-04      | US-17          | Filtrar histórico de pedidos por período.                  | P = 1,23 (Moderada)  |

___________________________________________________________________________________

## 8.5.3. Backlog - Requisitos Não Funcionais

| **User Story** | **Descrição**                                                                         | U | R | P | S | + | **Prioridade**     |
|----------------|---------------------------------------------------------------------------------------|---|---|---|---|---|--------------------|
| US-18          | Atualizar dados automaticamente em tempo real.                                        | 5 | 4 | 5 | 5 | -4| P = 1,5 (Alta)     |
| US-19          | Garantir compatibilidade com a impressora Epson utilizadas pela empresa.              | 4 | 5 | 4 | 3 | -3| P = 1,3 (Moderada) |
| US-20          | Suportar uma quantidade de 200 clientes e pedidos cadastrados sem perda de desempenho | 5 | 4 | 5 | 5 | -4| P = 1,5 (Alta)     |
| US-21          | Garantir funcionamento no sistema Windows 10 e 11.                                    | 5 | 3 | 4 | 4 | -2| P = 1,4 (Moderada) |

___________________________________________________________________________________

## 8.5.4. Backlog - Valor de Negócio (RFs)

| **User Story**  | **Frequência de Uso** | **Importância para o cliente** | **Potencial de economia** | **Feedback de stakeholders** | **Vantagem competitiva** | **Soma (Negócio)** |
|-----------------|-----------------------|--------------------------------|---------------------------|------------------------------|--------------------------|--------------------|
| US-1           | 5                     | 5                              | 5                         | 4                            | 3                        | 22                 |
| US-2           | 4                     | 5                              | 5                         | 5                            | 5                        | 24                 |
| US-3           | 5                     | 5                              | 5                         | 3                            | 3                        | 22                 |
| US-4           | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| US-5           | 4                     | 3                              | 4                         | 4                            | 3                        | 19                 |
| US-6           | 2                     | 2                              | 2                         | 1                            | 3                        | 10                 |
| US-7           | 4                     | 4                              | 4                         | 3                            | 4                        | 19                 |
| US-8           | 3                     | 2                              | 2                         | 2                            | 1                        | 10                 |
| US-9           | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| US-10          | 5                     | 5                              | 5                         | 5                            | 3                        | 23                 |
| US-11          | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| US-12          | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| US-13          | 2                     | 2                              | 2                         | 1                            | 3                        | 10                 |
| US-14          | 2                     | 1                              | 2                         | 1                            | 2                        | 8                  |
| US-15          | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| US-16          | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| US-17          | 4                     | 4                              | 5                         | 4                            | 4                        | 21                 |
___________________________________________________________________________________

## 8.5.5. Backlog - Complexidade (RFs)

| **User Story** | **Esforço Estimado** | **Nivel de Complexidade** | **Familiaridade Técnica** | **Riscos Implementação** | **Manutenção e Suporte** | **Soma (Complexidade)** |
|----------------|----------------------|---------------------------|---------------------------|--------------------------|--------------------------|-------------------------|
| US-01          | 2                    | 1                         | 4                         | 2                        | 1                        | 10                      |
| US-02          | 3                    | 3                         | 4                         | 3                        | 2                        | 15                      |
| US-03          | 4                    | 3                         | 4                         | 3                        | 3                        | 17                      |
| US-04          | 4                    | 3                         | 3                         | 3                        | 3                        | 16                      |
| US-05          | 3                    | 2                         | 4                         | 2                        | 1                        | 12                      |
| US-06          | 3                    | 3                         | 4                         | 3                        | 3                        | 16                      |
| US-07          | 3                    | 3                         | 4                         | 3                        | 2                        | 15                      |
| US-08          | 3                    | 2                         | 4                         | 2                        | 1                        | 12                      |
| US-09          | 3                    | 3                         | 3                         | 3                        | 2                        | 14                      |
| US-10          | 4                    | 3                         | 4                         | 3                        | 3                        | 17                      |
| US-11          | 3                    | 3                         | 4                         | 3                        | 2                        | 15                      |
| US-12          | 4                    | 4                         | 2                         | 4                        | 3                        | 17                      |
| US-13          | 3                    | 3                         | 4                         | 3                        | 2                        | 15                      |
| US-14          | 4                    | 3                         | 3                         | 3                        | 3                        | 16                      |
| US-15          | 2                    | 3                         | 4                         | 2                        | 1                        | 12                      |
| US-16          | 4                    | 2                         | 4                         | 2                        | 1                        | 12                      |
| US-17          | 4                    | 4                         | 4                         | 4                        | 1                        | 17                      |
_________________________________________________________________________________

## 8.5.6. Backlog - Prioridade

| **User Story** |                     **Descrição**                                                     | **Soma (Negócio)** | **Soma (Complexidade)** | **Prioridade** |
|----------------|---------------------------------------------------------------------------------------|--------------------|-------------------------|----------------|
| US-1           | Visualizar o cardápio completo                                                        | 22                 | 10                      | P = 2,2        |
| US-2           | Apresentar os lanches mais pedidos                                                    | 24                 | 15                      | P = 1,6        |
| US-3           | Exibir informações detalhadas dos lanches                                             | 22                 | 13                      | P = 1,69       |
| US-4           | Cadastrar lanches e ingredientes no cardápio                                          | 25                 | 16                      | P = 1,56       |
| US-5           | Editar lanches cadastrados                                                            | 19                 | 12                      | P = 1,5        |
| US-6           | Remover lanches e ingredientes do cardápio                                            | 10                 | 16                      | P = 0,62       |
| US-7           | Consultar pedidos em tempo real                                                       | 19                 | 15                      | P = 1,26       |
| US-8           | Cancelar pedidos registrados                                                          | 10                 | 12                      | P = 0,83       |
| US-9           | Indicar e editar o status de pagamento do pedido                                      | 25                 | 14                      | P = 1,78       |
| US-10          | Personalizar lanches com base nas preferências do cliente                             | 23                 | 17                      | P = 1,35       |
| US-11          | Criar hambúrgueres personalizados                                                     | 25                 | 15                      | P = 1,66       |
| US-12          | Imprimir comandas                                                                     | 25                 | 17                      | P = 1,47       |
| US-13          | Criar combos personalizados                                                           | 10                 | 15                      | P = 0,66       |
| US-14          | Gerenciar promoções com validade definida                                             | 8                  | 16                      | P = 0,5        |
| US-15          | Rastrear pedidos por cliente                                                          | 25                 | 12                      | P = 2,08       |
| US-16          | Consultar histórico de pedidos realizados                                             | 25                 | 12                      | P = 2,08       |
| US-17          | Filtrar histórico de pedidos por período                                              | 21                 | 17                      | P = 1,23       |
___________________________________________________________________________________