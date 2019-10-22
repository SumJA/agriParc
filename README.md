# agriParc
create db agriparc_development
run :
npx sequelize-cli db:migrate
npx sequelize-cli db:seed --seed 20191021123420-demo-gaec.js
npx sequelize-cli db:seed --seed 20191021123947-demo-user.js
npx sequelize-cli db:seed --seed 20191021124356-demo-adresse.js