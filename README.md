# API REST com Laravel 10 e Frontend SPA com ReactJS
Bem-vindo ao repositório! Este projeto consiste em uma API REST construída com Laravel 10, fornecendo um backend robusto e eficiente e um frontend implementado com uma Single Page Application (SPA) ReactJS, oferecendo uma UX dinâmica e responsiva. 

## Rodando o Projeto no Docker
1. Faça o clone do projeto: `git clone https://github.com/rudneibass/estudos-em-equipe.git`
2. Navegue para o diretório do projeto: `cd estudos-em-equipe`
3. Suba os containers: `docker-compose up`
4. Abra a aplicação no navegador: `http://127.0.0.1:5173`

## Testes
Alguns testes foram implementados no backend. Se estiver no diretório principal (`estudos-em-equipe`), navegue até "backend" (`cd backend`) e execute o comando `php artisan test`

## Rodando o Projeto Localmente

### Backend
1. `git clone https://github.com/rudneibass/estudos-em-equipe.git`
2. `cd estudos-em-equipe/backend`
3. `composer install`
4. `php artisan migrate`
5. `php artisan serve`

### Frontend
1. `cd estudos-em-equipe/frontend`
2. `npm install`
3. `npm run dev`
4. Abra o navegador e acesse o sistema em http://127.0.0.1:5173
