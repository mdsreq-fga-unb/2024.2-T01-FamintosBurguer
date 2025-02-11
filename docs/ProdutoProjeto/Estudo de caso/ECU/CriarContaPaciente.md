# Criar Conta do Pacientne
## Especificação de Caso de Uso: Criar conta paciente

**Versão 1.0**

---

## Histórico da Revisão

| Data       | Versão | Descrição                                          | Autor           |
|------------|--------|--------------------------------------------------|----------------|
| 10/02/2025 | 1.0    | Especificação de caso de uso referente a Criar conta paciente. | Isaac Batista |

---

## Breve Descrição

Este caso de uso descreve o processo pelo qual um usuário pode criar uma conta de paciente no sistema, fornecendo informações pessoais necessárias para acessar os serviços de saúde. Como o ConnectCare é voltado para comunidades vulneráveis, a criação da conta é muito importante para que os pacientes possam localizar serviços de saúde, agendar consultas e receber notificações sobre campanhas médicas.
---

## Fluxo Básico de Eventos

1. O paciente acessa a página de criação de conta.
2. O sistema exibe um formulário solicitando informações obrigatórias (nome, data de nascimento, CPF, telefone, e-mail, senha).
3. O paciente preenche o formulário e confirma a criação da conta.
4. O sistema valida os dados inseridos.
5. O sistema armazena as informações do paciente e envia um e-mail de confirmação.
6. O paciente acessa o e-mail e confirma a conta clicando no link enviado.
7. O sistema confirma a ativação da conta e permite o login do paciente.

---

## Fluxos Alternativos

### FA1 - Dados Inválidos
#### O paciente insere dados inválidos (CPF incorreto, e-mail inválido, senha fraca)
1. O sistema exibe mensagens de erro especificando o problema.
2. O paciente corrige os dados e tenta novamente.

### FA2 - E-mail ou cpf já Cadastrado
#### O paciente insere um e-mail ou cpf que já está registrado no sistema.
1. O sistema exibe uma mensagem informando que o e-mail ou cpf é inválido.
2. O paciente altera os dados e tenta novamente.
---

### FA3 - Falha na Conexão com a Internet
#### O paciente perde a conexão com a internet no meio do cadastramento
1. O sistema exibe uma mensagem informando a falta de conexão
2. O usuário tenta clicar em 'Reconectar'
3. O sistema tenta reconexão mas não consegue
4. O usuário finaliza o cadastro que mais tarde será enviado para o sistema

## Fluxos de Exceção

### FE1 - Falha no Envio de E-mail de Confirmação
#### Caso o paciente não tenha inserido um email de confirmação válida
1. O usuário finaliza o cadastro.
2. O sistema solicita que o usuário valide o email.
3. O usuário informa que não tem acesso ao email cadastrado
4. O sistema oferece outras formas de confirmar sua identidade como código via SMS ou whatsapp
---

## Pré-Condições
O paciente deve possuir um dispositivo com acesso à internet ou estar em um ponto de apoio comunitário que ofereça suporte ao cadastro.
---

## Pós-Condições
O paciente poderá acessar funcionalidades básicas mesmo antes da ativação da conta, como visualizar campanhas de saúde na região

---

## Requisitos Especiais
1. LGPD: Incluir um fluxo específico para que o paciente possa visualizar, editar e excluir seus dados pessoais de acordo com a regulamentação.
2. Acessibilidade: Além das diretrizes WCAG, considerar suporte para leitura em voz alta e navegação facilitada para idosos e pessoas com baixa alfabetização.
3. Modo Offline: Permitir que a conta seja criada mesmo sem conexão imediata, com sincronização posterior.
5. Baixo Consumo de Dados: Otimização para que o cadastro possa ser realizado mesmo em conexões lentas
---

## Informações Adicionais

- Link do MIRO para consulta dos casos de uso: [Miro](https://miro.com/welcomeonboard/RC9ZTTNJ...)
- **Referências:**
    - [Lei nº 13.709, de 14 de agosto de 2018](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
    - [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)


___________________________________________________________________________________