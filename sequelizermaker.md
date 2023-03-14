sequelize model:create --name users --attributes firstName:string,lastName:string,username:string,password:string,email:string,phoneNumber:string,gender:string,role:boolean
sequelize model:create --name posts --attributes title:string,chapo:string,content:string,img_src:string,status:boolean
sequelize model:create --name comments --attributes title:string,content:string

Générer une migration => sequelize migration:generate --name nom-de-la-migration
Migrer : sequelize db:migrate
