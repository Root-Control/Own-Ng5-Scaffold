[Angular 5 by Root]


# Guía por Root-C

- 'src/index.html' 			: Página raíz que contiente al componente raíz <app-root>
- 'src/main.ts'				: Fichero de arranque de la aplicación que configura y carga el modulo principal.
- 'src/app/app.module.ts'	: Declaración de módulo raíz y sus dependencias.
- 'src/app/app.component.ts': Componente raíz 'app-root'.
- 'src/app/app-routing.component.ts' : Definir rutas
- 'src/app/index.ts'		: Fichero indice de una carpeta para facilitar importación



# Cli
- 'angular-cli-json': Configuración del CLI
- 'package.json' 	: Dependencias y scripts
- 'tslint.json' 	: Reglas para código limpio
- '.editorconfig' 	: Configuración para el editor


DOCUMENTACIÓN DEL ESQUELETO:

- Creado 23/01/2018
- Angular Versión 5.2.0
- Tipo, Modular con contenedores.

Resumen: 
- Ésta arquitectura está basada en modulos pre-registrados, se utilizó angular cli, puedes reutilizar los módulos renombrándolos pero tienes que tener en cuenta algunas características.

El módulo articles es un módulo de testing o pruebas (starter), puedes guiarte de él para configurar los demás módulos.

Una vez copiado el módulo, genera tus rutas normalmente.

Pasos obligatorios para el funcionamiento correcto de un nuevo modulo agregado:
	- En el archivo app.module.ts referenciar, registrar el módulo.


Tareas de arquitectura:
	- Mostrar correctamente el login (nombre de usuario y demás)
	- Completar el crud de usuario
	- Verificar Tokenización (lista negra con fs)
	- Cerrar sesión (token black list)
	- Guards
