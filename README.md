# Taskio Frontend

Taskio é uma aplicação web para gestão de tarefas, desenvolvida com **Next.js** e **TypeScript**, estruturada seguindo a arquitetura **MVVM (Model-View-ViewModel)** para proporcionar maior organização, escalabilidade e facilidade de manutenção.

## 🏛️ Arquitetura MVVM

O projeto adota o padrão **MVVM**, dividindo as responsabilidades em:

- **Model**: Representação dos dados e regras de negócio.
- **ViewModel**: Lógica de apresentação e mediação entre Model e View.
- **View**: Camada de exibição, responsável apenas pela interface do usuário.

Essa separação facilita a manutenção, os testes e o crescimento do projeto.
---

![Screenshot](/public/sreenshot.png)

## 🚀 Tecnologias

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## 📁 Estrutura do Projeto

```
src/
├─ app/              # Páginas principais (rotas)
├─ components/       # Componentes visuais (Views)
├─ view-models/      # Lógica de apresentação (ViewModels)
├─ models/           # Definições e manipulações de dados (Models)
└─ lib/              # Funções utilitárias
```
## 🛠️ Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/christian-de-ornellas/taskio-frontend.git
cd taskio-frontend
```
2.	Instale as dependências:
```bash
npm install
# ou
yarn install
```
3.	Execute o servidor:

```bash
npm run start
# ou
yarn start
```

4. Crie o arquivo e adicione a base url da api .env
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000 
```

5. Acesse http://localhost:3000 no seu navegador.

Obs: O repositório taskio-backend precisa estar sendo executado.

```
📜 Scripts Disponíveis
	•	dev: Executa o projeto em ambiente de desenvolvimento
	•	build: Gera uma versão de produção otimizada
	•	start: Inicia o servidor de produção
	•	lint: Executa o lint no código fonte
```


🌎 Deploy

O deploy pode ser realizado facilmente utilizando Vercel.

Nota: O taskio-frontend precisa do taskio-backend rodando para funcionar corretamente.

🔗 Repositório do Backend

Para o backend, acesse o repositório do taskio-backend:
https://github.com/christian-de-ornellas/taskio-backend