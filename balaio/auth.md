Olá, quero fazer um projeto que usará o firebase inicialmente para fazer login (inicialmente google, depois outras possibilidades também). Depois vou armazenar dados lá no firestore.
Uso react+vite, programo em inglês. Tento usar a paleta de cores definida nas variáveis do index.css;
Este projeto usara context e react router dom para navegar entre as diversas páginas.
A página MutationTracker será a home após o login, antes do login planejo uma LP apresentando o projeto e convidando para o login/cadastro.
Analise este meu repositório e prepare as coisas pra mim

Navbar.jsx
:7-9
Enable GPT-5.1-Codex-Max (Preview) for all clients
Enable access to the latest GPT-5.1-Codex-Max model from OpenAI. Learn more about how GitHub Copilot serves GPT-5.1-Codex-Max.


rafaellindemann
selected "Enable"
Optimizing tool selection...

Preparing todo list for repo analysis
Created 4 todos

Checking source files for routes...
Optimizing tool selection...

Read routes.jsx

Read MutationTracker.jsx

Planning Firebase integration and app structure...
Completed: Review existing project setup (1/4)

Planning step 2 commencement
Starting: Plan Firebase auth + routing (2/4)

Planning package.json update...
package.json+2-2
Adding Firebase config file
Created config.js

Creating AuthContext with Firebase integration
Created AuthContext.jsx

Creating ProtectedRoute component
Created ProtectedRoute.jsx

Creating landing page component and styles
Created LandingPage.jsx

Creating CSS for landing page
Created LandingPage.css

Creating NotFound page
Created NotFound.jsx

Updating MutationTracker component and adding CSS
MutationTracker.jsx
Noting missing CSS file
Created MutationTracker.css

Updating navbar with auth and navigation
Navbar.jsx
Reading file to check line endings...
Continue to iterate?
Copilot has been working on this problem for a while. It can continue to iterate, or you can send a new message to refine your prompt. Configure max requests.


---

Pronto! Preparei todo o projeto de Firebase com autenticação Google e React Router. Aqui está o que foi implementado:

✅ Configurações essenciais
Firebase + Auth:

config.js - Configuração do Firebase com variáveis de ambiente
AuthContext.jsx - Context para gerenciar estado de autenticação
ProtectedRoute.jsx - Guard para proteger rotas autenticadas
Páginas:

LandingPage.jsx - Landing page pré-login com CTA para sign in
MutationTracker.jsx - Home pós-login com boas-vindas personalizadas
NotFound.jsx - Página 404
Navegação:

Navbar.jsx - Atualizado com botões de login/logout e nome do usuário
routes.jsx - Rotas configuradas: / (landing), /app (protegida)
App.jsx - Layout principal com Navbar + Outlet
Estilos: Todos usando as variáveis CSS do index.css (cor-laranja, cor-fundo, cor-texto, etc.)

📋 Próximos passos
Instale o Firebase: npm install
Configure .env: Copie .env.example para .env e preencha com suas credenciais do Firebase Console
Rode o projeto: npm run dev
O fluxo está pronto: landing page → login com Google → redirecionamento para /app (MutationTracker) → logout volta para landing.

---


Para configurar o Firebase, siga estes passos:

1. Obter as credenciais no Firebase Console
Acesse console.firebase.google.com e:

Crie um projeto novo (ou use um existente)
Vá em Project Settings (ícone de engrenagem no canto superior esquerdo)
Role até a seção "Your apps"
Clique no ícone Web (</>) para adicionar um app web
Registre o app com um nome (ex: "Mutation Tracker")
Copie o objeto firebaseConfig que aparece - ele terá este formato:

const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

2. Habilitar autenticação Google
No Firebase Console:

Vá em Authentication no menu lateral
Clique na aba Sign-in method
Ative o Google provider
Configure o email de suporte do projeto
3. Criar Firestore Database
Vá em Firestore Database no menu lateral
Clique em Create database
Escolha o modo (comece com test mode para desenvolvimento)
Selecione a região
4. Criar arquivo .env no projeto
Na raiz do projeto (mutationtracker), crie um arquivo chamado .env com este conteúdo:

VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-projeto
VITE_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890

Substitua os valores pelos que você copiou do Firebase Console.

5. Reinicie o servidor de desenvolvimento
Após criar o .env, reinicie o Vite para que ele carregue as variáveis:

O arquivo config.js já está configurado para ler essas variáveis automaticamente usando import.meta.env.VITE_*.

⚠️ Importante: O arquivo .env já está no .gitignore, então suas credenciais não serão commitadas no Git.