GESTOR DE  LOGISTICA
____________________________________________________________________________________________________________________________

El presente es un proyecto educativo es una API que gestiona las ordenes de entrega de un local. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre
los pedidos realizados, asi como funcionalidades de buscar por el estado del pedido en concreto.

____________________________________________________________________________________________________________________________

Caracteristicas 
_______________

*La principal finalidad de este proyecto es pones en practica lo aprendido a travez de la distintas clases.
*CRUD de ordenes: Crea consulta, actualiza y elimina informacion de las ordenes.
*El filtro permite la busqueda atraves del estado en el que se encuentran los pedidos estos pueden ser "Pendiente", "En Transito" o "Entregado". 
____________________________________________________________________________________________________________________________

REQUISITOS
__________


    Node.js: v14 o superior.
    MongoDB: Base de datos local o en la nube.
____________________________________________________________________________________________________________________________

Pasos para el uso del presente proyecto
_______________________________________

1. Clonar el repositorio

git clone https://xXlucasXxLr01/api_listaDeTareas

2. instalar en la carperta del proyecto las dependencias necesarias:
    a traves de npm install
_____________________________________________________________________________________________________________________________

Endpoints Principales

Metodo |  Endpoint                |  Descripcion                  |
get    |  /ordenes                |  obtiene todas las ordenes.   |
get    |  /ordenes/:id            |  obtiene una orden por su ID.
get    | /ordenes?estado=Entregado|  obtiene todas las ordenes con estado "Entregado", se pude variar segun su necesidad entre pendiente o En Transito.
post   | /ordenes                 | Crea un nueva orden el estado por defecto es "Pendiente".
Delete |  /ordenes/:id            | Elimina una orden por su id.
Put    |  /ordenes                | Modifica una orden.


CREDITOS
________


Desarrollado por Lucas Alvares.


