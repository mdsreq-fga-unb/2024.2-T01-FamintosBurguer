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

### Critérios para Valor de Negócio:

Avalie cada critério de 1 (baixa importância) a 5 (alta importância):  
1. **Frequência de Uso**: Quantas vezes a funcionalidade será usada?  
2. **Impacto no Cliente**: Quão importante é para o cliente ou usuário final?  
3. **Redução de Custos**: A funcionalidade diminui custos para o negócio?  
4. **Diferenciação Competitiva**: Gera vantagem frente aos concorrentes?  
5. **Feedback de Clientes/Stakeholders**: O que foi solicitado por partes interessadas?  

**Fórmula**:  
`valor de negócio = soma dos 5 critérios de valor de negócio`

### Critérios para Complexidade Técnica:

Avalie cada critério de 1 (baixo esforço) a 5 (alto esforço):  
1. **Esforço Estimado para Desenvolver**: Quão difícil é implementar?  
2. **Integração com Outros Sistemas**: Necessita conexões complexas com outros sistemas?  
3. **Familiaridade Técnica**: O time já conhece as tecnologias envolvidas?  
4. **Testabilidade**: Quão fácil é testar a funcionalidade?  
5. **Manutenção e Suporte**: Quão difícil será manter e suportar essa funcionalidade no futuro?  

**Fórmula**:  
`complexidade técnica = soma dos 5 critérios de complexidade técnica`


___________________________________________________________________________________

## 8.5.2. Backlog - Requisitos Funcionais

| **ID** | **Tema** | **Épico** | **User Story** | **Descrição**                                              | **Prioridade**       |
|--------|----------|-----------|----------------|------------------------------------------------------------|----------------------|
| 01     | T-01     | E-01      | US-01          | Visualizar o cardápio completo.                            | P = 2,20 (Alta)      |
| 02     | T-01     | E-02      | US-02          | Apresentar os lanches mais pedidos.                        | P = 1,60 (Alta)      |
| 03     | T-01     | E-02      | US-03          | Exibir informações detalhadas dos lanches.                 | P = 1,69 (Alta)      |
| 04     | T-01     | E-01      | US-04          | Cadastrar lanches e ingredientes no cardápio.              | P = 1,56 (Alta)      |
| 05     | T-01     | E-01      | US-05          | Editar lanches cadastrados.                                | P = 1,50 (Alta)      |
| 06     | T-01     | E-01      | US-06          | Remover lanches e ingredientes do cardápio.                | P = 0,62 (Baixa)     |
| 07     | T-02     | E-03      | US-07          | Consultar pedidos em tempo real.                           | P = 1,26 (Moderada)  |
| 08     | T-02     | E-01      | US-08          | Cancelar pedidos registrados.                              | P = 0,83 (Baixa)     |
| 09     | T-02     | E-03      | US-09          | Indicar e editar o status de pagamento do pedido.          | P = 1,78 (Alta)      |
| 10     | T-03     | E-05      | US-10          | Personalizar lanches com base nas preferências do cliente. | P = 1,35 (Moderada)  |
| 11     | T-03     | E-05      | US-11          | Criar hambúrgueres personalizados.                         | P = 1,66 (Alta)      |
| 12     | T-04     | E-06      | US-12          | Imprimir comandas.                                         | P = 1,47 (Moderada)  |
| 13     | T-03     | E-05      | US-13          | Criar combos personalizados.                               | P = 0,66 (Baixa)     |
| 14     | T-04     | E-07      | US-14          | Gerenciar promoções com validade definida.                 | P = 0,50 (Baixa)     |
| 15     | T-02     | E-04      | US-15          | Rastrear pedidos por cliente.                              | P = 2,08 (Alta)      |
| 16     | T-02     | E-04      | US-16          | Consultar histórico de pedidos realizados.                 | P = 1,92 (Alta)      |
| 17     | T-02     | E-04      | US-17          | Filtrar histórico de pedidos por período.                  | P = 1,23 (Moderada)  |

___________________________________________________________________________________

## 8.5.3. Backlog - Requisitos Não Funcionais

| **ID** | **Tema** | **Épico** | **User Story** | **Descrição**                                                              | **Prioridade**       |
|--------|----------|-----------|----------------|----------------------------------------------------------------------------|----------------------|
| 01     | T-04     | -         | US-18          | Garantir interface fácil de usar.                                          | P = 1,29 (Alta)      |
| 02     | T-04     | -         | US-19          | Atualizar dados automaticamente em tempo real.                             | P = 1,25 (Moderado)  |
| 03     | T-04     | -         | US-20          | Calcular e exibir preço total dinamicamente durante alterações no pedido.  | P = 1,31 (Moderado)  |
| 04     | T-02     | -         | US-21          | Exibir resumo atualizado do pedido em tempo real.                          | P = 1,12 (Moderado)  |
| 05     | T-04     | -         | US-22          | Garantir compatibilidade com impressoras utilizadas pela empresa.          | P = 1,37 (Alta)      |
| 06     | T-04     | -         | US-23          | Suportar aumento de dados e pedidos sem perda de desempenho.               | P = 0,88 (Baixo)     |
| 07     | T-04     | -         | US-24          | Garantir funcionamento dos sistemas operacionais compatíveis com o cliente.| P = 0,85 (Baixo)     |

___________________________________________________________________________________

## 8.5.4. Backlog - Valor de Negócio

| **ID** | **User Story**  | **Frequência de Uso** | **Importância para o cliente** | **Potencial de economia** | **Feedback de stakeholders** | **Vantagem competitiva** | **Soma (Negócio)** |
|--------|-----------------|-----------------------|--------------------------------|---------------------------|------------------------------|--------------------------|--------------------|
| 01      | US-1           | 5                     | 5                              | 5                         | 4                            | 3                        | 22                 |
| 02      | US-2           | 4                     | 5                              | 5                         | 5                            | 5                        | 24                 |
| 03      | US-3           | 5                     | 5                              | 5                         | 3                            | 3                        | 22                 |
| 04      | US-4           | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| 05      | US-5           | 4                     | 3                              | 4                         | 4                            | 3                        | 19                 |
| 06      | US-6           | 2                     | 2                              | 2                         | 1                            | 3                        | 10                 |
| 07      | US-7           | 4                     | 4                              | 4                         | 3                            | 4                        | 19                 |
| 08      | US-8           | 3                     | 2                              | 2                         | 2                            | 1                        | 10                 |
| 09      | US-9           | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| 10      | US-10          | 5                     | 5                              | 5                         | 5                            | 3                        | 23                 |
| 11      | US-11          | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| 12      | US-12          | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| 13      | US-13          | 2                     | 2                              | 2                         | 1                            | 3                        | 10                 |
| 14      | US-14          | 2                     | 1                              | 2                         | 1                            | 2                        | 8                  |
| 15      | US-15          | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| 16      | US-16          | 5                     | 5                              | 5                         | 5                            | 5                        | 25                 |
| 17      | US-17          | 4                     | 4                              | 5                         | 4                            | 4                        | 21                 |
| 18      | US-18          | 5                     | 5                              | 5                         | 4                            | 3                        | 22                 |
| 19      | US-19          | 5                     | 4                              | 5                         | 3                            | 3                        | 20                 |
| 20      | US-20          | 4                     | 4                              | 5                         | 4                            | 4                        | 21                 |
| 21      | US-21          | 4                     | 3                              | 5                         | 3                            | 3                        | 18                 |
| 22      | US-22          | 5                     | 5                              | 5                         | 4                            | 3                        | 22                 |
| 23      | US-23          | 3                     | 4                              | 3                         | 2                            | 4                        | 16                 |
| 24      | US-24          | 3                     | 4                              | 3                         | 2                            | 5                        | 17                 |

___________________________________________________________________________________

## 8.5.5. Backlog - Complexidade

| **ID** | **User Story** | **Esforço Estimado** | **Nivel de Complexidade** | **Familiaridade Técnica** | **Riscos Implementação** | **Manutenção e Suporte** | **Soma (Complexidade)** |
|--------|----------------|----------------------|---------------------------|---------------------------|--------------------------|--------------------------|-------------------------|
| 01     | US-01          | 2                    | 1                         | 4                         | 2                        | 1                        | 10                      |
| 02     | US-02          | 3                    | 3                         | 4                         | 3                        | 2                        | 15                      |
| 03     | US-03          | 4                    | 3                         | 4                         | 3                        | 3                        | 17                      |
| 04     | US-04          | 4                    | 3                         | 3                         | 3                        | 3                        | 16                      |
| 05     | US-05          | 3                    | 2                         | 4                         | 2                        | 1                        | 12                      |
| 06     | US-06          | 3                    | 3                         | 4                         | 3                        | 3                        | 16                      |
| 07     | US-07          | 3                    | 3                         | 4                         | 3                        | 2                        | 15                      |
| 08     | US-08          | 3                    | 2                         | 4                         | 2                        | 1                        | 12                      |
| 09     | US-09          | 3                    | 3                         | 3                         | 3                        | 2                        | 14                      |
| 10     | US-10          | 4                    | 3                         | 4                         | 3                        | 3                        | 17                      |
| 11     | US-11          | 3                    | 3                         | 4                         | 3                        | 2                        | 15                      |
| 12     | US-12          | 4                    | 4                         | 2                         | 4                        | 3                        | 17                      |
| 13     | US-13          | 3                    | 3                         | 4                         | 3                        | 2                        | 15                      |
| 14     | US-14          | 4                    | 3                         | 3                         | 3                        | 3                        | 16                      |
| 15     | US-15          | 2                    | 3                         | 4                         | 2                        | 1                        | 12                      |
| 16     | US-16          | 4                    | 2                         | 4                         | 2                        | 1                        | 12                      |
| 17     | US-17          | 4                    | 4                         | 4                         | 4                        | 1                        | 17                      |
| 18     | US-18          | 4                    | 4                         | 3                         | 4                        | 3                        | 18                      |
| 19     | US-19          | 4                    | 4                         | 3                         | 4                        | 2                        | 17                      |
| 20     | US-20          | 4                    | 4                         | 3                         | 3                        | 2                        | 16                      |
| 21     | US-21          | 4                    | 4                         | 3                         | 4                        | 2                        | 17                      |
| 22     | US-22          | 4                    | 4                         | 3                         | 4                        | 2                        | 17                      |
| 23     | US-23          | 4                    | 4                         | 3                         | 4                        | 3                        | 18                      |
| 24     | US-24          | 4                    | 4                         | 5                         | 4                        | 3                        | 20                      |

___________________________________________________________________________________

## 8.5.6. Backlog - Prioridade

| **ID** | **User Story** |                     **Descrição**                         | **Soma (Negócio)** | **Soma (Complexidade)** | **Prioridade** |
|--------|----------------|-----------------------------------------------------------|--------------------|-------------------------|----------------|
| 01     | US-1           | Visualizar o cardápio completo                            | 22                 | 10                      | P = 2,2        |
| 02     | US-2           | Apresentar os lanches mais pedidos                        | 24                 | 15                      | P = 1,6        |
| 03     | US-3           | Exibir informações detalhadas dos lanches                 | 22                 | 13                      | P = 1,69       |
| 04     | US-4           | Cadastrar lanches e ingredientes no cardápio              | 25                 | 16                      | P = 1,56       |
| 05     | US-5           | Editar lanches cadastrados                                | 19                 | 12                      | P = 1,5        |
| 06     | US-6           | Remover lanches e ingredientes do cardápio                | 10                 | 16                      | P = 0,62       |
| 07     | US-7           | Consultar pedidos em tempo real                           | 19                 | 15                      | P = 1,26       |
| 08     | US-8           | Cancelar pedidos registrados                              | 10                 | 12                      | P = 0,83       |
| 09     | US-9           | Indicar e editar o status de pagamento do pedido          | 25                 | 14                      | P = 1,78       |
| 10     | US-10          | Personalizar lanches com base nas preferências do cliente | 23                 | 17                      | P = 1,35       |
| 11     | US-11          | Criar hambúrgueres personalizados                         | 25                 | 15                      | P = 1,66       |
| 12     | US-12          | Imprimir comandas                                         | 25                 | 17                      | P = 1,47       |
| 13     | US-13          | Criar combos personalizados                               | 10                 | 15                      | P = 0,66       |
| 14     | US-14          | Gerenciar promoções com validade definida                 | 8                  | 16                      | P = 0,5        |
| 15     | US-15          | Rastrear pedidos por cliente                              | 25                 | 12                      | P = 2,08       |
| 16     | US-16          | Consultar histórico de pedidos realizados                 | 25                 | 12                      | P = 2,08       |
| 17     | US-17          | Filtrar histórico de pedidos por período                  | 21                 | 17                      | P = 1,23       |
| 18     | US-18          | Garantir interface fácil de usar                          | 22                 | 17                      | P = 1,29       |
| 19     | US-19          | Atualizar dados automaticamente em tempo real             | 20                 | 16                      | P = 1,25       |
| 20     | US-20          | Exibir preço total dinamicamente durante alterações       | 21                 | 16                      | P = 1,31       |
| 21     | US-21          | Exibir resumo atualizado do pedido em tempo real          | 18                 | 16                      | P = 1,12       |
| 22     | US-22          | Garantir compatibilidade com impressora da empresa        | 22                 | 16                      | P = 1,37       |
| 23     | US-23          | Exibir resumo atualizado do pedido em tempo real          | 16                 | 18                      | P = 0,88       |
| 24     | US-24          | Garantir funcionamento do sistema operacional compatível  | 17                 | 20                      | P = 0,85       |

___________________________________________________________________________________