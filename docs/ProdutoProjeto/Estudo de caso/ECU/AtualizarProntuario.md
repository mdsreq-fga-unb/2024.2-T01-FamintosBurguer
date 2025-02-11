# Atualizar Prontuário

## Especificação de Caso de Uso: Atualizar Prontuário do Cliente

### Versão 1.0

---

## Histórico da Revisão

| Data       | Versão | Descrição                                              | Autor   |
|------------|--------|------------------------------------------------------|---------|
| 06/02/2025 | 1.0    | Especificação de caso de uso referente a Atualizar Prontuário do Cliente. | João Eduardo Pereira Rabelo |

---

## Índice

1. [Breve Descrição](#breve-descrição)
2. [Fluxo Basico](#fluxo-básico-de-eventos)
3. [Fluxos Alternativos](#fluxos-alternativos)
    - 3.1 [FA1 - Paciente Não Encontrado](#paciente-não-encontrado)
    - 3.2 [FA2 - Dados Incompleto](#dados-incompletos)
    - 3.3 [FA2 - Acesso Negado](#acesso-negado)
    - 3.4 [FA2 - Atualização Parcial](#atualizacao-parcial)
4. [Fluxos de Exceção](#fluxos-de-exceção)
    - 4.1 [Erro na conexão com o banco de dados](#erro-na-conexão-com-o-banco-de-dados)
    - 4.2 [Tempo Limite Excedido na Busca](#tempo-limite)
    - 4.3 [Dados de Busca Inválidos ou Incompletos](#dados-incompletos)
5. [Pré-Condições](#pré-condições)
6. [Pós-Condições](#pós-condições)
7. [Pontos de Extensão](#pontos-de-extensão)
8. [Requisitos Especiais](#requisitos-especiais)
9. [Informações Adicionais](#informações-adicionais)

---

## Breve Descrição

O caso de uso "Atualizar Prontuário do Paciente" permite que profissionais de saúde atualizem o prontuário médico de um paciente, incluindo diagnósticos, prescrições, exames realizados e orientações. O profissional acessa a plataforma, localiza o paciente, e insere ou atualiza as informações médicas necessárias. O sistema registra as alterações e notifica o paciente, se necessário.

---

## Fluxo Basico

1. **Início do Caso de Uso:**
    - O caso de uso é iniciado quando o Profissional de Saúde tenta atualizar o prontuário de um paciente.
2. **Selecionar opção:**
    - O Profissional de Saúde seleciona a opção de "Atualizar Prontuário".
3. **Verificar Atenticação:**
    - O sistema verifica se o profissional está autenticado e tem permissão para acessar o prontuário.
4. **Identidade do Paciente:**
    - O Profissional de Saúde localiza o paciente pelo nome, CPF ou número de prontuário.
5. **Prontuário do Paciente:**
    - O sistema exibe o prontuário atual do paciente.
6. **Inserir Informações Médicas:**
    - O Profissional de Saúde insere ou atualiza as informações médicas, como diagnósticos, prescrições, exames e orientações.
7. **Validar dados inserido:**
    - O Sistema valida os dados inseridos.
8. **Confirmar Atualização:**
    - O Profissional de Saúde confirma a atualização.
9. **Registra as alterações:**
    - O Sistema registra as alterações no prontuário e notifica o paciente, se necessário.
10. **Fim do Caso de Uso:**
    - O Fluxo é encerrado com sucesso.

---

## Fluxos Alternativos

### 3.1 FA1 - Paciente Não Encontrado
- O sistema detecta que o paciente não foi encontrado com os critérios de busca fornecidos.
- O sistema exibe uma mensagem informando que o paciente não foi encontrado.
- O Profissional de Saúde ajusta os critérios de busca e retorna ao passo 4 do fluxo principal.

### 3.2 FA2 - Dados incompletos
- O sistema detecta que o Profissional de Saúde não preencheu todos os campos obrigatórios.
- O sistema solicita que o profissional complete os dados necessários.
- O Profissional de Saúde completa os dados e retorna ao passo 7 do fluxo principal.

### 3.3 FA3 - Acesso negado
- O sistema detecta que o Profissional de Saúde não tem permissão para acessar o prontuário do paciente.
- O sistema exibe uma mensagem de acesso negado e encerra o fluxo

### 3.4 FA4 - Atualização parcial
- O Profissional de Saúde decide atualizar apenas parte do prontuário, como um diagnóstico ou prescrição.
- O sistema permite a atualização parcial e registra apenas as alterações feitas.
- O fluxo é encerrado com sucesso.

---

## Fluxos de Exceção

### 4.1 FE1 - Erro na conexão com o banco de dados
- Ocorre quando o sistema não consegue atualizar o prontuário devido a uma falha de conexão com o banco de dados.
- O sistema encontra um erro ao tentar atualizar o prontuário.
- O sistema exibe uma mensagem de erro e solicita que o profissional tente novamente mais tarde.


### 4.2 FE2 - Tempo Limite Excedido na Atualização
- Ocorre quando o Profissional de Saúde não conclui a atualização dentro do tempo esperado.
- O sistema não recebe confirmação do profissional dentro do tempo esperado.
- O sistema cancela a operação e exibe uma mensagem de aviso.


### 4.3 FE3 - Dados de Busca Inválidos ou Incompletos
- Ocorre quando o Profissional de Saúde insere dados inválidos, como um diagnóstico incorreto ou uma prescrição fora dos padrões.
- O sistema detecta que os dados inseridos são inválidos.
- O sistema solicita que o profissional corrija os dados antes de prosseguir.


### 4.4 FE4 - Falha na autenticação do profissional
- Ocorre quando o sistema não consegue autenticar o Profissional de Saúde durante o processo de atualização.
- O sistema detecta uma falha na autenticação do profissional.
- O sistema exibe uma mensagem de erro e solicita que o profissional faça login novamente.
- O profissional faz login e retorna ao passo 3 do fluxo principal.

---

## Pré-Condições

- **Login:** O Profissional de Saúde deve estar cadastrado e autenticado no ConnectCare.
- **Autenticação:** O Profissional de Saúde deve ter permissão para acessar e atualizar prontuários.
- **Permissão de acesso:** O Profissional de Saúde deve ter permissão específica para acessar o prontuário do paciente em questão.
- **Prontuário existente:**O paciente deve ter um prontuário já cadastrado no sistema.

---

## Pós-Condições

- **Registro dos Dados:** As alterações no prontuário serão registradas no histórico do paciente.
- **Notificação:** O sistema pode enviar uma notificação ao paciente sobre a atualização do prontuário, se configurado.
- **Atualização de histórico médico:** O histórico médico do paciente será atualizado com as novas informações inseridas.
- **Confirmação de atualização:** O sistema exibirá uma confirmação de que o prontuário foi atualizado com sucesso.



---

## Pontos de Extensão

Nenhum identificado.

---

## Requisitos Especiais

- **Conformidade com LGPD:** Segurança e privacidade dos dados.
- **Acessibilidade:** Atendimento a diretrizes WCAG.
- **Responsividade:** Adaptação a diferentes dispositivos.
- **Integração com Mapas:** Geolocalização otimizada.
- **Disponibilidade:** Funcionalidade acessível em conexão limitada.

---

## Informações Adicionais

- **Link do MIRO:** [Acesse aqui](https://miro.com/welcomeonboard/RC9ZTTNJZlNYRGZxbjZzUFNwZ09TTi96VGZUUWdvTi94ZTFRdXBEWUR4RU0vTCtKTVR1V2hIRno0YWZtdEc5ME5JajE4bkFUUFd3WWFSOFo5TisvNm9XVmRPeG9HQVRuOFBLRFNtbGhnOUJ6WC8xbUtjb1hHRmFUZ2dEdEJWZ0Z0R2lncW1vRmFBVnlLcVJzTmdFdlNRPT0hdjE=)
- **LGPD:** [Lei nº 13.709](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
- **WCAG 2.1:** [Diretrizes W3C](https://www.w3.org/TR/WCAG21/)

---