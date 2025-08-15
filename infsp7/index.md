# Inform 7 <Badge type="info" text="v10.1.2" />

## Cómo usar online

Dirígite al IDE online [Borogove](https://borogove.app/).

Allí, elige la targeta que lee **Inform7**.
La siguiente pantalla te mostrará la ventana de código lista para escribir (Panel Source Text).
Recuerda ir a Settings y elegir la **Compiler version** de 10.



## Cómo instalar


### Inform 7 IDE

Descarga e instala el IDE de Inform [desde su repositorio](https://github.com/ganelson/inform/releases). Es la release **10.1.2**, elige la que corresponde a tu SO.


### Librerías Español
Ve a la sección [Releases de I7 Spanish](https://github.com/sarganar/I7-Spanish/releases). Allí las tienes empaquetadas en un zip. Descargate la última.

Te recomiendo que instales las librerías de manera local (es decir, solo para tu proyecto actual). Si tu proyecto va a llamarse *TuProyecto*, entonces tus carpetas serán:
```
    Projects\
      |-TuProyecto.inform\
      |-TuProyecto.Materials
         |-Extensions\
         |-Inter\
```

### miniTutorial: Inciar *TuProyecto* de manera Local

- Abre la aplicación Inform 7 IDE y crea tu primer proyecto con nombre *TuProyecto*. Se creará una carpeta *TuProyecto* en su folder *Projects* (en *MisDocumentos/Inform* por ejemplo o donde tu le digas)

- Copia la carpeta **Sebastian Arg** del zip que descargaste al folder *../TuProyecto.Materials/Extensions*  (si no existe, debes crear el folder *Extensions*)

- Copia la carpeta **SpanishLanguageKit** del zip que descargaste al folder *../TuProyecto.Materials/Inter*  (si no existe, debes crear el folder *Inter*)

- Eso es todo, ahora desde tu IDE puedes compilar el proyecto.

Hola Mundo (proyecto minimo)
---

- En la aplicación Inform 7 tienes el panel *Source*, allí escribe el siguiente código:

```
"Hola Mundo" (in spanish)

Test Lab is a room.  "Una pequeña habitación de pruebas."

When play begins: say "Hola Mundo!".
```

- Compilas con _F5_ y verás el resultado en el panel *Story*
