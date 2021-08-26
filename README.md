# Estacionamientoapp

## BD
	*Poner en marcha la base de datos
		MongoDB instalacion local en mi preferencia
		* Descargamos MongoDB https://www.mongodb.com/try/download/community version 5.0.2
		* Creamos directorio en C las carpetas data/db
		* Instalamos MongoDB personalizado que se ubique la instalacion en C
			* En los pasos de siguiente y siguiente hay una opcion para que este se
				instale como servicio de Windows
			* En las opciones para instalacion de Mongo Compass un manejador entorno grafico
				Pueden omitirlo e instalar una solucion mas sencilla llamada Robomongo
				pueden descargarlo en https://robomongo.org/download
				seleccionando la opcion en la derecha Download Robo 3T Only
		* Al finalizar la instalacion de Mongo se creara el directorio como MongoDB en C
		* Verificamos el servicio de Windows de MongoDB que se este ejecutando
        * En tal caso usen Mongo Atlas una solucion en la nube pueden solo colocar los parametros en el 	archivo .env
			
## BackEnd
	*Poner en marcha el BackEnd	
		* Instalar GIT https://git-scm.com/
		* Instalar nodejs https://nodejs.org/es/ seleccionar la version LTS 14.17
		* Abrimos la Consola / Terminal y tecleamos npm install yarn -g
			yarn alternativa a npm mas fluido
		* Donde hayamos abierto la consola / terminal en el directorio de preferencia
			descargamos / clonamos el repositorio, 
			tecleamos git clone https://github.com/luiser8/estacionamientoAPIREST.git
		* Entramos con la consola / terminal en el proyecto descargado / clonado 
		 	estacionamientoAPIREST
			entando en la carpeta raiz del proyecto ejecutamos yarn install
			para instalar las dependencias necesarias
		* En el archivo .env colocamos el puerto y el servidor local de mongoDB
		* Ejecutamos nodemon index.js
		* Verificar con el navegador web
			- http://localhost:9000/
			- http://localhost:9000/api/v1/puestos