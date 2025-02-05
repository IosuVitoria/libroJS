**Ejercicios de Manipulación del DOM**

A) Selección de elementos (10 ejercicios).

1. Selecciona y muestra en consola el texto del primer h1 de la página.
2. Usa querySelectorAll para seleccionar todos los párrafos y cambia su color a azul.
3. Selecciona el último elemento de una lista con querySelector y agrégale una clase CSS.
4. Encuentra y muestra en consola cuántos elementos con la clase .tarjeta hay en la página.
5. Usa getElementById para obtener un div y cámbiale el background-color.
6. Selecciona todos los elementos input de tipo texto y agrégales un borde rojo.
7. Usa querySelector para seleccionar un span dentro de un párrafo y cámbiale el texto.
8. Selecciona todos los enlaces (<a>) y muestra en consola sus URLs.
9. Busca un botón dentro de un div específico y cámbiale el texto a "¡Presióname!".
10. Usa querySelectorAll para contar cuántos div hay dentro de otro div.

B) Modificación del DOM (25 ejercicios).

1. Cambia el contenido de un h2 a "Título modificado con JavaScript".
2. Usa innerHTML para agregar un enlace dentro de un párrafo.
3. Usa textContent para modificar el texto de un botón sin afectar su estructura interna.
4. Reemplaza un div completamente usando outerHTML.
5. Usa setAttribute para cambiar la src de una imagen.
6. Usa getAttribute para obtener el valor de un atributo data-id en un elemento.
7. Cambia el color de un botón cuando se pasa el mouse por encima usando style.backgroundColor.
8. Modifica la opacidad de una imagen al 50%.
9. Usa style.fontSize para aumentar el tamaño del texto en un p.
10. Crea un nuevo elemento <li> y agrégalo a una lista existente.
11. Crea un div con un fondo de color y agrégalo al body.
12. Clona un button y agrégalo a otro div.
13. Elimina el primer elemento de una lista ordenada (ol).
14. Usa replaceChild para reemplazar un párrafo con un nuevo h3.
15. Agrega un borde a todos los div de la página.
16. Usa classList.add() para agregar una clase a un h1.
17. Usa classList.remove() para quitar una clase de un elemento.
18. Usa classList.toggle() para alternar una clase en un botón al hacer clic.
19. Usa insertAdjacentHTML() para agregar un párrafo antes de un div.
20. Agrega una animación CSS a un botón usando style.animation.
21. Usa scrollIntoView() para desplazar la página hasta un elemento al hacer clic.
22. Mueve un div de un contenedor a otro en el DOM.
23. Oculta un párrafo cuando se hace clic en un botón.
24. Cambia el color de fondo de la página a uno aleatorio con cada clic.
25. Muestra u oculta una imagen cuando se presiona una tecla.

C) Eventos (25 ejercicios)

1. Agrega un evento click a un botón para que cambie su texto al hacer clic.
2. Captura el evento mouseenter en una imagen y cambia su opacidad.
3. Escucha el evento keydown y muestra en la consola la tecla presionada.
4. Usa input para actualizar en tiempo real el valor de un campo en otro lugar de la página.
5. Agrega un dblclick para cambiar el color de fondo de un div.
6. Usa focus para cambiar el borde de un campo de texto cuando se selecciona.
7. Usa blur para restaurar el borde cuando el usuario sale del campo de texto.
8. Captura el evento submit en un formulario y previene su envío.
9. Usa change para detectar cuando se cambia la opción en un <select>.
10. Agrega un evento a un botón que lo desactive después de presionarlo.
11. Usa contextmenu para prevenir el menú al hacer clic derecho en una imagen.
12. Agrega un evento de doble clic a una lista para eliminar el elemento clicado.
13. Captura el evento mousemove y muestra la posición del cursor en la pantalla.
14. Usa addEventListener para hacer que un botón escuche dos eventos diferentes.
15. Implementa la delegación de eventos en una lista de tareas.
16. Crea un div que siga al cursor en la página.
17. Captura el evento scroll y muestra en consola la posición del scroll.
18. Usa stopPropagation() para evitar que un evento burbujee en un div anidado.
19. Implementa el capture en un evento para ejecutarlo antes que otros.
20. Crea un contador de clics en un botón.
21. Agrega un evento de arrastrar y soltar (drag and drop) en un div.
22. Usa addEventListener para escuchar eventos en varios elementos de un querySelectorAll.
23. Agrega un botón de "Volver arriba" que aparece al hacer scroll.
24. Implementa un tooltip que se muestre al pasar el mouse sobre un texto.
25. Crea un efecto de fade-in y fade-out al hacer clic en un botón.


**Proyectos finales (5 proyectos)**
1. Lista de tareas
Crea una lista donde los usuarios puedan agregar y eliminar tareas.
Usa eventos para manejar los clics y entrada de texto.
Implementa delegación de eventos para eliminar tareas.

2. Galería de imágenes
Crea una galería donde se pueda hacer clic en una imagen para ampliarla.
Agrega efectos de transición CSS.
Usa eventos para cambiar la imagen activa.

3. Calculadora simple
Crea una calculadora con botones para sumar, restar, multiplicar y dividir.
Muestra los resultados en un div.
Maneja eventos de clic en los botones.

4. Reloj digital
Muestra la hora en tiempo real en la pantalla.
Usa setInterval() para actualizar los segundos.
Permite cambiar el formato de 12h a 24h.

5. Formulario de validación
Crea un formulario con nombre, email y contraseña.
Valida que los campos no estén vacíos.
Muestra mensajes de error si los datos son incorrectos.