# Consideraciones al escribir código en español

Inform 7 permite escribir el **texto de juego** en español (con las librerías
INFSP), pero el **código fuente** —las frases que describen el mundo— sigue
siendo el dialecto en inglés del compilador. Algunas construcciones en español
chocan con esa realidad. Aquí van las que conviene tener presentes.

## El artículo `el`/`la` forma parte del nombre de una *kind*

Cuando declaras una *kind* (una clase de objetos), el compilador de Inform solo
sabe quitar los artículos **ingleses** (`a`, `an`, `the`, `some`) del nombre.
No conoce `el`, `la`, `los`, `las`, `un`, `una`, `unos`, `unas`.

Por eso esto **no funciona**:

```
La puerta is a kind of thing.

El porton is a puerta in El Recibidor.
```

`La puerta is a kind of thing.` crea una *kind* que se llama literalmente
**`la puerta`** (con el `la` metido dentro del nombre), no `puerta`. Y al
escribir después `El porton is a puerta` el compilador busca una *kind* llamada
`puerta`, no la encuentra, y aborta con:

> *appears to say two things are the same... It would be all right if the second
> thing were the name of a kind.*

Y si intentas colocar la *kind* directamente:

```
La puerta is in El Recibidor.
```

falla con:

> *something described only by its kind should not be given a specific place or
> role in the world.*

(Esto último pasa igual en inglés: no puedes colocar una *kind* «a secas», solo
instancias con nombre.)

::: tip Solución
Declara las *kinds* **sin artículo**:

```
Puerta is a kind of container.

El porton is a puerta in El Recibidor.
La cancela is a female puerta in El Recibidor.
```

Ahora `un/una puerta`, `[number of puertas]`, `[list of puertas]` y las
instancias con nombre funcionan con normalidad.
:::

::: warning
No es un fallo de INFSP y no se puede arreglar desde la extensión: el
tratamiento de artículos en los nombres ocurre dentro del compilador de
Inform 7, en tiempo de compilación. INFSP solo traduce el comportamiento y los
textos en tiempo de ejecución.
:::

### Objetos sueltos (no *kinds*)

Un objeto normal **sí** admite el artículo, porque ahí Inform no intenta
resolver un nombre de *kind*:

```
La puerta is in El Recibidor.   [ crea una cosa llamada "puerta" -- OK ]
```

El problema es exclusivo de la declaración de *kinds*.

## Verbos adaptativos: hay que declararlos

Los tokens de texto adaptativo (`[llevas]`, `[eres]`, `[estás]`…) solo
funcionan con verbos previamente declarados con `In Spanish X is a verb.`. De
serie están `llevar`, `tener`, `quitar`, `poder`, `ser` y `estar`. Cualquier
otro verbo que quieras usar de forma adaptativa debes declararlo tú:

```
In Spanish coger is a verb.
```

## Nombres que empiezan por artículo en mayúscula

Si nombras un objeto `El frasco` (con `El` mayúscula como parte del nombre), en
mitad de una frase saldrá con la mayúscula: *«¿De dónde quieres sacar El
frasco?»*. Nómbralo `frasco` (o `The frasco`) y deja que INFSP ponga el artículo
correcto según el contexto.

## Verbos personalizados que chocan con la gramática de INFSP

Muchos «stems» de verbo ya los usa INFSP internamente
(`ata … a …` = *atar*, `conecta … a/con …`, `saluda` = *agitar las manos*…).
Si defines un verbo de prueba con uno de esos, obtendrás resultados confusos
que no son tu bug. Antes de crear un verbo nuevo, comprueba que la palabra no
esté ya tomada.
