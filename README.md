# Mi proyecto React

Petshop Carmela Ecommerce.

### Comentarios utiles

En la pagina inicial **Home** se muestra el listado de todos los items sin filtrar.

El cartWidget y los iconos del Footer son traidos de la dependencia de Fontawesome.

Cuando se crea la orden de compra (luego de que en el carro se da click en comprar y se llena y envia el formulario), la cantidad de items comprados se modifican del firebase con el metodo updateDoc() con logica en el componente de ContactForm.js. Tambien si un item llega a quedar sin stock se actualiza automaticamente en el listado y lo pone en color gris con un cartel avisando que no ha stock. 

En el itemCount no se puede seleccionar menos de 0 items o mas del stock que hay, de lo contrario salta una alerta.

Si se intenta inyectar un id de un item que no existe en el listado, aparece un cartel avisando que el item no ingresado no existe.

Cundo se finaliza la compra, el carrito vuelve a estar vacio.

Cada orden de compra creada queda guardada en firestore, con los datos del usuario y los items comprados.

En la carpeta **Assets** se encuentra la imagen de portada.

La carpeta **Routes** es la que contiene los componentes contenedores.