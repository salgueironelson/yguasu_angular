# COMANDOS GIT
git ini
git add .
git commit -m "commit pertama"

git remote add origin https://github.com/salgueironelson/yguasu_angular.git
git push -u origin master

git b

## CREAMOS LA RAMA develop
git checkout -b develop

## para ver las ramas
git branch

## para cambiar de rama
git checkout master

## para subir los cambios a github pero en la rama develop
git push -u origin develop

## Git Flow
### Para iniciar git flow
git flow init

### Para crear una nueva feature
git flow feature start nombre_de_la_feature

### para finalizar la feature
git flow feature finish nombre_de_la_feature