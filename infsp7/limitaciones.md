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

## Traducir nombres de *kinds* al español

Puedes darle nombre español a una *kind* del inglés declarándola como
**subclase**:

```
Mujer is a kind of woman.
The plural of mujer is mujeres.

Hombre is a kind of man.
The plural of hombre is hombres.

Habitacion is a kind of room.
The plural of habitacion is habitaciones.

Recipiente is a kind of container.
The plural of recipiente is recipientes.
```

Y a partir de ahí escribes en español:

```
Marta is a mujer in El Laboratorio.

Instead of examining a mujer:
    say "Es una mujer.".
```

`Marta` sigue siendo también `woman` y `person`, así que **las reglas sobre
`a woman` también le aplican**. Y `[number of mujeres]`, `[list of mujeres]`,
etc. funcionan con normalidad.

::: warning A tener en cuenta
- Es una **subclase**, no un alias: `woman` sigue existiendo y no toda `woman`
  es una `mujer`. Si en tu juego usas siempre `mujer` no lo notarás.
- **Declara el plural** (`The plural of mujer is mujeres.`) o Inform lo
  pluralizará como *mujers*.
- Sin artículo en la declaración (`Mujer is a kind of woman.`, no
  `La mujer…`), por lo dicho en la sección anterior.
- Esto no afecta al **parser del jugador**. Para que `> examina la mujer`
  funcione, añade aparte `Understand "mujer" as a woman.`
:::

Puedes reunir todas estas declaraciones en una extensión personal y reutilizarla
en todos tus proyectos.

## Genitivo y posesivo

El español no tiene el genitivo con apóstrofo del inglés (*the box's lid*). El
posesivo se construye siempre con **`de` + artículo**: *la tapa de la caja*,
*el pomo del cajón*.

**No uses `[possessive]`, `['s]` ni `[apostrophe]`**: INFSP no los redefine y
sueltan el genitivo inglés (`[The caja][possessive] tapa` → *«La caja's tapa»*).
Además no son traducibles: en inglés van *delante* del poseedor, en español
*detrás* y con reordenamiento de la frase.

Escribe el orden español con las sustituciones de INFSP:

| escribes | sale |
|---|---|
| `[el tapa] [del caja]` | la tapa de la caja |
| `[el pomo] [del cajon]` | el pomo del cajón &nbsp; (`de` + `el` = `del`) |
| `la mano [del Marta]` | la mano de Marta &nbsp; (nombre propio, sin artículo) |
| `[del_ noun]` | solo el artículo: `del` / `de la` / `de los` / `de las` |

`[del noun]` imprime `de` + artículo + **nombre**; `[del_ noun]`, solo `de` +
artículo. Las dos resuelven género, número y contracción automáticamente, lo
cual es útil sobre todo en reglas genéricas donde el objeto es variable. Para un
objeto fijo y conocido, escribir *la tapa de la caja* a mano es igual de válido.

Una **parte** (`X is part of Y`) se nombra solo por su propio nombre (*la
tapa*), sin prefijo de genitivo automático —igual que en inglés—. Si quieres
*la tapa de la caja*, lo compones tú.

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
