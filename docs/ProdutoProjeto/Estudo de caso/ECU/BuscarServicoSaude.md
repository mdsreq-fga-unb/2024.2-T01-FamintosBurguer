# Buscar Serviço de Saúde
## Especificação de Caso de Uso: Buscar Serviço de Saúde

### Versão 1.0

---

## Histórico da Revisão

| Data       | Versão | Descrição                                              | Autor   |
|------------|--------|------------------------------------------------------|---------|
| 06/02/2025 | 1.0    | Especificação de caso de uso referente a Buscar Serviço de Saúde. | Leticia |

---

## Índice

1. [Breve Descrição](#breve-descrição)
2. [Fluxo Básico de Eventos](#fluxo-básico-de-eventos)
3. [Fluxos Alternativos](#fluxos-alternativos)
    - 3.1 [Agendamento de Consultas Médicas](#agendamento-de-consultas-médicas)
4. [Fluxos de Exceção](#fluxos-de-exceção)
    - 4.1 [Erro na conexão com o banco de dados](#erro-na-conexão-com-o-banco-de-dados)
5. [Pré-Condições](#pré-condições)
6. [Pós-Condições](#pós-condições)
7. [Pontos de Extensão](#pontos-de-extensão)
8. [Requisitos Especiais](#requisitos-especiais)
9. [Informações Adicionais](#informações-adicionais)

---

## Breve Descrição

O caso de uso "Buscar Serviço de Saúde" permite que o paciente localize facilmente serviços de saúde disponíveis na plataforma ConnectCare. O paciente pode inserir informações como:
- Tipo de atendimento desejado (consulta médica, vacinação, etc.).
- Localização ou condição de saúde.

O sistema apresenta as opções mais próximas e relevantes, considerando conectividade limitada e oferecendo recursos como:
- Agendamento de consultas presenciais ou online.
- Localização de campanhas de saúde.
- Informações sobre unidades de atendimento.

---

## Fluxo Básico de Eventos

1. **Início do Caso de Uso:**
    - O paciente acessa o aplicativo ConnectCare.
2. **Inserção de Dados:**
    - O paciente insere informações como tipo de atendimento, localização e condição de saúde.
3. **Processamento da Busca:**
    - O sistema processa os dados e exibe serviços de saúde disponíveis.
4. **Exibição dos Resultados:**
    - O sistema apresenta as opções com detalhes como nome, endereço e horários disponíveis.
5. **Seleção do Serviço:**
    - O paciente seleciona um serviço.
6. **Agendamento de Consulta:**
    - Caso aplicável, o paciente agenda a consulta.
7. **Notificação:**
    - O paciente recebe uma confirmação do agendamento.
8. **Fim do Caso de Uso:**
    - O paciente pode encerrar ou continuar usando a plataforma.

---

## Fluxos Alternativos

### FA1 - Serviço Não Encontrado
- Se nenhum serviço for encontrado, o sistema exibe uma mensagem de erro e sugere outras opções.

### FA2 - Falha no Agendamento
- Se houver erro no agendamento, o sistema notifica o paciente e sugere alternativas.

---

## Fluxos de Exceção

### 4.1 FE1 - Erro na conexão com o banco de dados
- Ocorre quando o sistema não consegue acessar os dados necessários.

### 4.2 FE2 - Tempo Limite Excedido na Busca
- Se o paciente não finalizar a busca dentro do tempo limite, o sistema cancela a operação.

### 4.3 FE3 - Dados de Busca Inválidos ou Incompletos
- Se o paciente inserir dados inválidos, o sistema solicita correção.

---

## Pré-Condições

- **Login:** O paciente deve estar autenticado na plataforma.
- **Autenticação:** O sistema deve ter profissionais de saúde cadastrados.

---

## Pós-Condições

- **Registro dos Dados:** O sistema registra o histórico de busca e agendamentos.
- **Notificação:** O paciente recebe uma confirmação do agendamento.

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
