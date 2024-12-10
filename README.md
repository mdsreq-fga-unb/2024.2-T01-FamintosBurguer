# REQ-FGA0313-T01 | UnB | Famintos Burguer 🍔

![Banner](docs/img/FamintosBanner.png)

## 📂 Repositório

Bem vindo ao Repositório para Documentação do projeto **Famintos Burguer** da matéria de **Requisitos de Software** da Unb.

## 👥 Equipe

Somos formados por 5 estudandates do curso de Engenharia de Software, Conheça a equipe de desenvolvimento abaixo:

| ![Camera](docs/img/ProfilePic_L.png)    | [<img src="https://avatars.githubusercontent.com/u/118384776?v=4" width=68 height=68>]()| [<img src="https://avatars.githubusercontent.com/u/78875892?v=4" width=68 height=68>]() | [<img src="https://avatars.githubusercontent.com/u/86434947?v=4" width=68 height=68>]() | [<img src="https://avatars.githubusercontent.com/u/122989234?v=4" width=68 height=68>]()| [<img src="https://avatars.githubusercontent.com/u/124713089?v=4" width=68 height=68>]()| 
|:---------:|:------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------:|
| **Nome**  | [Isaac Batista Pessoa De Moraes](https://https://github.com/isaacbatista26) | [João Eduardo Pereira Rabelo](https://github.com/JoaoEduardoP) | [Letícia Torres Soares Martins](https://github.com/leticiatmartins) | [Tulio Augusto Celeri](https://github.com/TulioCeleri) | [William Bernardo Da Silva](https://github.com/willxbernardo) |
| **Cargo** | Gerente BackEnd | Gerente de QA | Gerente de Projeto | Gerente FrontEnd | Gerente Requisitos |

##  💻 Guia para Configuração do Ambiente de Documentação

### 1. Clone o Repositório de Documentação
Antes de iniciar, você precisa clonar a branch de documentação para obter os arquivos do MkDocs necessários. Execute os comandos abaixo:

```shell
git clone https://github.com/mdsreq-fga-unb/2024.2-T01-FamintosBurguer.git
```

```shell
git checkout documentacao
```

### 2. Instale as Dependências do MkDocs
Para rodar a documentação, é necessário instalar o MkDocs e configurar o ambiente local. Siga as instruções abaixo:

#### 2.1. Instale a Linguagem Python:
O MkDocs requer o Python. Instale o Python de acordo com o seu sistema operacional:

- Windows:

    - Acesse o site oficial do [Python](https://www.python.org/downloads/) e baixe a versão mais recente.
    - Durante a instalação, marque a opção "Add Python to PATH".
    - Finalize a instalação e reinicie o terminal.

- Linux (Ubuntu e outras distribuições):

    ```shell
    sudo apt update

    ```
    ```shell
    sudo apt install python3 python3-pip
    ```

    Para confirmar a se o programa foi instalado:

    ```shell
    python3 --version
    ```

- MacOS:

    O macOS geralmente já possui Python instalado. Para atualizar:

    ```shell
    brew install python
    ```
    Para confirmar a se o programa foi instalado:

    ```shell
    python3 --version
    ```

### 3. Instale o MkDocs:
Após instalar o Python, utilize o pip para instalar o MkDocs:

```shell
pip install mkdocs
```

*Caso ocorra erro no Ubuntu 24.04 ou mais recentes:*

- **1. Crie um ambiente virtual:**

    ```shell
    python3 -m venv .venv
    ```

    ```shell
    source .venv/bin/activate
    ```

- **2. No ambiente virtual, instale o MkDocs**

    ```shell
    pip install mkdocs
    ```

#### 3.1. Instale o Tema "Material":

- Para uma experiência de documentação mais avançada, instale o tema "Material":

    ```shell
    pip install mkdocs-material
    ```

#### 3.2. Instale as demais dependências do projeto:

- O projeto tem algumas dependências que precisam ser instaladas antes de ser executado:

    ```shell
    pip install mkdocs-include-dir-to-nav
    ```

    ```shell
    pip install mkdocs-glightbox
    ```

### 4. Visualize a Documentação Localmente:

Inicie o servidor de desenvolvimento do MkDocs para visualizar a documentação em seu navegador:

```shell
mkdocs serve
```

O servidor estará disponível em http://localhost:8000. Qualquer alteração nos arquivos Markdown será refletida automaticamente.


Feito a configuração, é possível alterar e visualizar em tempo de execução as alterações feitas na documentação na sua máquina.


## 📄 Acesse nossa documentação e saiba mais: 

[Famintos Burguer 🍔](https://mdsreq-fga-unb.github.io/2024.2-T01-FamintosBurguer/)