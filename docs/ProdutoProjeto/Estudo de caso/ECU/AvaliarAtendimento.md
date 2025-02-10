# Avaliar Atendimento
## Especificação de Caso de Uso: Avaliar Atendimento

### Versão 1.0

---

## Histórico da Revisão

| Data       | Versão | Descrição                                        | Autor    |
|------------|--------|--------------------------------------------------|----------|
| 06/02/2025 | 1.0    | Especificação de caso de uso referente a Avaliar Atendimento | Túlio |

---

## Índice

1. [Breve Descrição](#breve-descrição)  
2. [Atores](#atores)  
3. [Fluxo Básico de Eventos](#fluxo-básico-de-eventos)  
4. [Fluxos Alternativos](#fluxos-alternativos)  
5. [Fluxos de Exceção](#fluxos-de-exceção)  
6. [Requisitos Especiais](#requisitos-especiais)  
7. [Regras de Negócio](#regras-de-negócio)  
8. [Pré-Condições](#pré-condições)  
9. [Pós-Condições](#pós-condições)  
10. [Pontos de Extensão](#pontos-de-extensão)  
11. [Informações Adicionais](#informações-adicionais)  

---

## Breve Descrição

Este caso de uso permite ao **paciente** avaliar o atendimento recebido após uma consulta no ConnectCare, atribuindo notas e feedbacks sobre a experiência com o profissional de saúde e a infraestrutura da unidade de atendimento.

---

## Atores

- **Paciente**

---

## Fluxo Básico de Eventos

1 - O caso de uso inicia quando o paciente acessa a opção **"Avaliar Atendimento"** na plataforma ConnectCare.  
2 - O sistema exibe uma lista de atendimentos recentes que podem ser avaliados.  
3 - O paciente seleciona o atendimento que deseja avaliar.  
4 - O sistema exibe um formulário com os seguintes campos:

- **Nota do atendimento (Escala de 1 a 5 estrelas)** [RN01] 
- **Comentário opcional sobre a experiência** [RN02] 
   

5 - O paciente preenche os campos e confirma a avaliação.  
6 - O sistema valida os dados inseridos. [RN01] [RN02]  
7 - O sistema registra a avaliação e exibe uma mensagem de sucesso.  
8 - O caso de uso é encerrado.
---

## Fluxos Alternativos

### FA1 - [FA01] Paciente não possui atendimentos recentes
- **Passo 2:** Se o paciente não tiver atendimentos recentes disponíveis para avaliação, o sistema exibe uma mensagem informativa e encerra o caso de uso.

### FA2 - [FA02] Paciente opta por não avaliar
- **Passo 5:** Se o paciente decide não enviar a avaliação, o sistema retorna à tela inicial sem registrar nenhuma alteração.

---

## Fluxos de Exceção

### FE1 - [FE01] Erro na validação dos dados
- **Passo 6:** Se o sistema detectar que a nota não foi inserida ou há caracteres inválidos no comentário, ele exibe uma mensagem de erro e solicita a correção dos dados.

### FE2 - [FE02] Falha no envio da avaliação
- **Passo 7:** Se ocorrer um erro no armazenamento da avaliação, o sistema exibe uma mensagem de erro e solicita que o paciente tente novamente mais tarde.

---

## Requisitos Especiais

1. **Banco de Dados**  
   A avaliação deve ser armazenada no banco de dados para futuras análises.

---

## Regras de Negócio

1. **[RN01] Validação de Avaliação**  
   A nota deve ser um número entre 1 e 5.

2. **[RN02] Comentário Opcional**  
   O campo de comentário não é obrigatório, mas, se preenchido, deve conter no máximo 500 caracteres.

3. **[RN03] Alteração de Avaliação**  
   O paciente pode editar sua avaliação dentro de 24 horas após o envio.

---

## Pré-Condições

1. **Login**  
   O paciente deve estar autenticado no ConnectCare.

2. **Número Mínimo**  
   O paciente deve ter realizado pelo menos uma consulta no sistema.

---

## Pós-Condições

1. **Registro dos Dados**  
   A avaliação será armazenada e utilizada para melhorar a qualidade dos serviços prestados.

2. **Relatórios**  
   O sistema pode gerar relatórios com base nas avaliações coletadas.

---

## Pontos de Extensão

### PE1 - [PE01] Consultar Avaliações
- O administrador do sistema pode acessar e analisar as avaliações registradas.

---

## Informações Adicionais

- **Link do MIRO (casos de uso):** [Clique aqui](https://miro.com/welcomeonboard/RC9ZTTNJZlNYRGZxbjZzUFNwZ09TTi96VGZUUWdvTi94ZTFRdXBEWUR4RU0vTCtKTVR1V2hIRno0YWZtdEc5ME5JajE4bkFUUFd3WWFSOFo5TisvNm9XVmRPeG9HQVRuOFBLRFNtbGhnOUJ6WC8xbUtjb1hHRmFUZ2dEdEJWZ0Z0R2lncW1vRmFBVnlLcVJzTmdFdlNRPT0hdjE=?share_link_id=192251851091)

---  
