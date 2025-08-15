# INFORM 7 EN ESPAÑOL

**Bienvenido al wiki de INFSP7 (Inform 7 en Español).**


**Inform 7 es un sistema de autoría de ficción interactiva** basado en lenguaje natural. Se trata de una reinvención radical de la forma de programación habitual de relatos interactivos.  El autor de Inform 7 es [Graham Nelson](http://en.wikipedia.org/wiki/Graham_Nelson), un matemático y poeta inglés, con la ayuda de otros autores como [Andrew Plotkin](http://en.wikipedia.org/wiki/Andrew_Plotkin) y [Emily Short](http://en.wikipedia.org/wiki/Emily_Short).

La traducción al español del lenguaje de juego se basa en el trabajo de traducción de Inform 6 por parte de [Zak](http://wiki.caad.es/Zak) ([InformATE](http://wiki.caad.es/InformATE)). Colaboraron autores del ámbito de la ficción interactiva hispana, reunidos en torno a la comunidad del [CAAD](http://www.caad.es/).


# Tutoriales
A continuación tienes enlaces a tutoriales y guías para aprender a crear aventuras:

**[Tutorial de Inform 7](http://caad.es/informate/infsp/downloads/XaviTutorial-I7.rar)**, un completo tutorial desde cero para empezar a programar tus propios relatos interactivos. Creado por [Xavi C](http://wiki.caad.es/Grendel_Khan).

# Material de referencia
Existe mucho material técnico sobre diversos temas Inform. La sección [INFSP7/DOC en la wikiCaad](http://wiki.caad.es/Inform7_Doc) presenta un listado exhaustivo.

# LINKS

[Notas de emshort](http://emshort.wordpress.com/2014/05/07/inform-6l02/)

[Notas 2 de emshort](http://emshort.wordpress.com/2014/05/08/working-notes-on-updating-extensions-for-inform-6l02/)

[RAE:Modelos de conjugación verbal](http://lema.rae.es/dpd/apendices/apendice1.html#verirreg)

[Ejemplo -ER](http://www.wordreference.com/conj/EsVerbs.aspx?v=temer)



#Extensiones Compatibles
[Public Library](http://www.emshort.com/pl/)

[Directorio Manual](http://www.emshort.com/pl/payloads/)


# regarding list writer internals
[regarding list writer internals]: (usado en list writer internal rule response (V) )
llama internamente a `RegardingLWI()` (ListWriter.i6t), que actualiza `prior_named_list `/ `prior_named_list_gender `/ `prior_named_noun`, utilizados luego por la sustitución [verbo] .

# NOTAS Compilador

* Acelerar la compilación i6 quitando la generación del xml-debug file:


<code>
Include (-!% -~k
-) before "ICL Commands" in "Output.i6t".
</code>

* No compilar rutinas no utilizadas

<code>
Include (-!% $OMIT_UNUSED_ROUTINES=2
-) before "ICL Commands" in "Output.i6t".
</code>