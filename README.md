#PROJETO LISTA DE TAREFAS

- Aplicação em que um usuário adiciona uma tarefa, ou um afazer, em um formulário, exigindo nome da tarefa, descrição, data e horário limite.
Esses dados são armazenados em um banco de dados. Ao clicar no botão para adicionar a tarefa à lista de tarefas, ele é redirecionado para uma nova página, mostrando todas as tarefas.
É possível atualizar a tarefa, ou excluir. Se quiser voltar à página de adicionar uma nova tarefa, basta clicar no botão acima da lista.
- A aplicação é útil, visto que muitas vezes esquecemos de que precisamos fazer algo até determinada data. Um trabalho da universidade, por exemplo.

- OBS:
  - No arquivo db.js, dentro da pasta models, atente-se em colocar os dados do seu banco de dados corretamente ('Nome do Banco', 'Usuário', 'Senha', {host, dialect}).
  - No arquivo Tarefas.js, dentro da pasta models, utilize o comentário com o comando //Tarefas.sync na primeira vez que for utilizar a aplicação. Uma vez criada a aplicação, volte a comentar ou apagar esse comando.
  - Os comandos feitos dentro do MySQL estão no arquivo Tarefas.sql

- Ferramentas utilizadas: VSCode, MySQL Workbench 8.0 CE, JavaScript, Handlebars, Node.js, Express, Sequelize, Body-Parser
- Comandos do terminal:
    - npm install express --save
    - npm install sequelize --save
    - npm install mysql2 --save
    - npm install express-handlebars --save
    - npm install body-parser --save
