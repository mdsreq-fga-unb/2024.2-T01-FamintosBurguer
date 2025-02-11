# Agendar Consulta
## Especificação de Caso de Uso: Agendar Consulta

**Versão 1.0**

---

## Histórico da Revisão

| Data       | Versão | Descrição                                          | Autor           |
|------------|--------|--------------------------------------------------|----------------|
| 04/02/2025 | 1.0    | Especificação de caso de uso referente a agendar consultas. | William Bernardo |

---

## Índice

1. [Breve Descrição](#breve-descricao)
2. [Fluxo Básico](#fluxo-basico)
    - [FA1 - Paciente não cadastrado](#fa1-paciente-nao-cadastrado)
3. [Fluxos Alternativos](#fluxos-alternativos)
    - [FA1 - Paciente não cadastrado](#fa1-paciente-nao-cadastrado)
    - [FA2 - Horário indisponível](#fa2-horario-indisponivel)
    - [FA3 - Dados Incompletos](#fa3-dados-incompletos)
    - [FA4 - Cancelamento antes da confirmação](#fa4-cancelamento-antes-da-confirmacao)
4. [Fluxos de Exceção](#fluxos-de-excecao)
    - [FE1 – Erro na conexão com o banco de dados](#fe1-erro-na-conexao-com-o-banco-de-dados)
    - [FE2 – Tempo limite excedido na seleção do horário](#fe2-tempo-limite-excedido-na-selecao-do-horario)
    - [FE3 – Dados incompletos ou inválidos](#fe3-dados-incompletos-ou-invalidos)
5. [Pré-Condições](#pre-condicoes)
6. [Pós-Condições](#pos-condicoes)
7. [Pontos de Extensão](#pontos-de-extensao)
8. [Requisitos Especiais](#requisitos-especiais)
    - [Conformidade com LGPD](#conformidade-com-lgpd)
    - [Acessibilidade](#acessibilidade)
    - [Responsividade](#responsividade)
    - [Integração com Mapas](#integracao-com-mapas)
    - [Disponibilidade](#disponibilidade)
9. [Informações Adicionais](#informacoes-adicionais)

---

## Breve Descrição

O caso de uso "Agendar Consulta" permite que o Paciente marque uma consulta médica de forma rápida e eficiente, seja online ou presencial. O paciente acessa a plataforma, seleciona o tipo de serviço desejado (ex.: consulta pediátrica, clínica geral), escolhe uma unidade de saúde próxima e verifica os horários disponíveis. Após selecionar o horário, o sistema confirma o agendamento e envia uma notificação com os detalhes da consulta, como local, data, horário e documentos necessários. Caso o paciente já possua um histórico médico na plataforma, as informações são compartilhadas com o profissional de saúde, agilizando o atendimento.

---

## Fluxo Básico de Eventos

1. O Paciente seleciona a opção de "Agendar consulta".
2. O sistema verifica se o paciente está cadastrado.
3. O Paciente seleciona um profissional e um horário desejado.
4. O sistema verifica se o horário está disponível e se os dados estão completos.
5. O Paciente confirma o agendamento.
6. O sistema registra o agendamento e exibe a confirmação.
7. O fluxo é encerrado com sucesso.

---

## Fluxos Alternativos

### FA1 - Paciente não cadastrado
1. O sistema detecta que o paciente não está cadastrado.
2. O sistema solicita que o paciente realize o cadastro antes de continuar.
3. O paciente se cadastra e retorna ao fluxo principal no passo 3.

### FA2 - Horário indisponível
1. O sistema detecta que o horário já está ocupado.
2. O sistema exibe outras opções de horários disponíveis.
3. O paciente escolhe um novo horário e retorna ao passo 6 do fluxo principal.

### FA3 - Dados Incompletos
1. O sistema detecta que o paciente não possui todos os dados necessários.
2. O sistema solicita ao paciente, para concluir corretamente seu cadastro.
3. O paciente se cadastra corretamente e retorna ao fluxo principal no passo 4.

### FA4 - Cancelamento antes da confirmação
1. O paciente decide não prosseguir com o agendamento e cancela a ação.
2. O sistema descarta as informações inseridas e encerra o fluxo.

---

## Fluxos de Exceção

### FE1 - Erro na conexão com o banco de dados
1. Ocorre quando o sistema não consegue registrar o agendamento devido a uma falha de conexão com o banco de dados.
2. O sistema exibe uma mensagem de erro e solicita que o paciente tente novamente mais tarde.

### FE2 - Tempo limite excedido na seleção do horário
1. Ocorre quando o paciente não seleciona um horário dentro do tempo esperado.
2. O sistema cancela a operação e exibe uma mensagem de aviso.


---

## Pré-Condições

1. O paciente deve estar cadastrado e autenticado no ConnectCare.
2. Deve haver profissionais de saúde cadastrados no sistema.

---

## Pós-Condições

1. O agendamento será registrado no histórico do paciente e do profissional de saúde.
2. O sistema enviará uma notificação de confirmação para o paciente.

---

## Pontos de Extensão

Nenhum identificado.

---

## Requisitos Especiais

### Conformidade com LGPD
O sistema deve garantir a segurança e privacidade dos dados dos pacientes, conforme a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).

### Acessibilidade
O sistema deve seguir diretrizes de acessibilidade (como WCAG) para garantir que pessoas com deficiência possam utilizá-lo.

### Responsividade
O design deve ser adaptável a diferentes tamanhos de tela, incluindo smartphones e tablets.

### Integração com Mapas
Se houver um recurso de geolocalização, ele deve ser otimizado para funcionamento em dispositivos móveis.

### Disponibilidade
O sistema deve estar disponível para acesso via dispositivos móveis e com conexão limitada.

---

## Informações Adicionais

- Link do MIRO para consulta dos casos de uso: [Miro](https://miro.com/welcomeonboard/RC9ZTTNJ...)
- **Referências:**
    - [Lei nº 13.709, de 14 de agosto de 2018](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
    - [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)


___________________________________________________________________________________