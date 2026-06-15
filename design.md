# DESIGN.md

## Direccion elegida

ExtreTiempo debe sentirse como una herramienta meteorologica regional para Extremadura: mobile first, minimalista, rapida y con mucha informacion util. No debe parecer una landing page ni una app generica de tiempo centrada solo en una temperatura grande.

Pantallas base elegidas:

- Portada: concepto `Entrada Local`.
- Pagina de localidad: concepto `Panel Vivo`.

## Principios

- Operativa desde el primer viewport: la home permite buscar una localidad y entender la situacion regional; la pagina de localidad muestra el tiempo actual y lo que cambia en las proximas horas.
- Mucha informacion, poca decoracion: usar jerarquia, alineacion y separadores antes que tarjetas pesadas o sombras.
- Datos reales y trazables: no mostrar nada que no salga de Open-Meteo o de calculos directos sobre esos datos.
- Extremadura primero: municipios, comparativas regionales y agrupacion por provincias cuando ayude.
- Lectura rapida: cada bloque debe responder a una pregunta concreta.

## Portada: Entrada Local

Objetivo: llevar al usuario a su municipio lo antes posible sin perder el valor diferencial de una vision regional.

Estructura recomendada:

1. Cabecera compacta
   - Nombre: `ExtreTiempo`.
   - Subtitulo breve: `Tiempo local en Extremadura`.
   - Hora de actualizacion.

2. Buscador principal
   - Input prominente: `Busca tu localidad`.
   - Accion opcional de ubicacion actual si se implementa con permiso del usuario.
   - Chips de acceso rapido: `Badajoz`, `Caceres`, `Merida`, `Plasencia`, etc.

3. Accesos rapidos
   - Lista o tiles compactos para municipios frecuentes.
   - Cada fila debe incluir:
     - municipio;
     - icono/descripcion meteorologica;
     - temperatura actual;
     - maxima/minima;
     - probabilidad de lluvia proximas horas;
     - viento y rachas si caben sin saturar.

4. Lo destacado hoy
   - Comparativas calculadas entre localidades visibles:
     - municipio mas calido;
     - lluvia mas probable;
     - viento mas fuerte;
     - UV mas alto.
   - Usar copy prudente: `entre localidades visibles`, `prevision`, `proximas horas`.
   - No presentar estos datos como alertas oficiales.

5. Todas las localidades
   - Filtro por provincia: `Todas`, `Badajoz`, `Caceres`.
   - Filas densas con metricas clave.
   - Debe escalar a muchas localidades sin volverse una parrilla de tarjetas enormes.

6. Navegacion inferior
   - Opciones sugeridas: `Inicio`, `Buscar`, `Favoritos`.
   - Solo implementarla si aporta navegacion real; evitar navegacion falsa.

## Pagina de localidad: Panel Vivo

Objetivo: mostrar el estado actual y la prevision accionable de una localidad concreta.

Estructura recomendada:

1. Cabecera de localidad
   - `ExtreTiempo`.
   - Nombre de la localidad.
   - Hora de actualizacion.
   - Acceso para cambiar de localidad.

2. Bloque actual
   - Temperatura actual como dato principal.
   - Descripcion meteorologica derivada del codigo WMO.
   - Sensacion termica.
   - Maxima/minima del dia.

3. Metricas clave
   - Lluvia actual o acumulada segun contexto.
   - Probabilidad de lluvia.
   - Viento.
   - Rachas.
   - Humedad.
   - Nubosidad.
   - UV.
   - Direccion del viento si se puede representar de forma clara.

4. Proximas horas
   - Tira horizontal o lista compacta de 8-12 horas.
   - Cada punto debe incluir hora, icono/estado, temperatura, probabilidad de lluvia y viento.
   - Mantener altura estable para evitar saltos visuales.

5. Proximos dias
   - Lista de 7 dias.
   - Max/min, precipitacion, probabilidad de precipitacion, viento maximo y rachas maximas si hay espacio.

## Datos permitidos

Solo mostrar datos disponibles en Open-Meteo Forecast API o calculos directos sobre ellos:

- `temperature_2m`
- `apparent_temperature`
- `relative_humidity_2m`
- `precipitation`
- `precipitation_probability`
- `weather_code`
- `cloud_cover`
- `wind_speed_10m`
- `wind_direction_10m`
- `wind_gusts_10m`
- `uv_index`
- maximas/minimas diarias
- sumas diarias de precipitacion
- maximos diarios de viento, rachas y UV

No mostrar por ahora:

- alertas oficiales;
- radar;
- satelite;
- calidad del aire;
- polen;
- riesgo de incendios;
- embalses;
- avisos AEMET;
- mapas meteorologicos reales.

## Estilo visual

- Base clara: blanco roto o gris muy calido.
- Texto principal: carbon/negro suave.
- Acentos:
  - verde Extremadura/dehesa para marca y estados neutros;
  - ocre/terracota para calor o temperatura;
  - cian/azul contenido para lluvia;
  - teal para viento;
  - amarillo sobrio para UV.
- Evitar una interfaz monotona azul.
- Bordes de radio maximo: `8px`.
- Sombras minimas o inexistentes.
- Usar separadores y alineacion antes que tarjetas.
- No usar tarjetas dentro de tarjetas.

## Tipografia y densidad

- Cuerpo principal entre `14px` y `16px`.
- Numeros meteorologicos con peso alto, pero sin convertir toda la pantalla en un hero.
- Etiquetas cortas: `Lluvia`, `Viento`, `Rachas`, `Humedad`, `Nubes`, `UV`.
- Evitar frases largas dentro de filas densas.
- Mantener alturas y anchos estables en filas, chips y metricas para que los datos no deformen el layout.

## Iconografia

- Usar iconos de una libreria consistente cuando se implemente.
- No usar emoji como iconografia principal.
- Los iconos meteorologicos deben acompanar texto; no depender solo del icono.
- Iconos decorativos con `aria-hidden`; iconos informativos con texto accesible.

## Interacciones

- Busqueda de localidad con filtrado inmediato.
- Chips de municipios frecuentes.
- Filtros por provincia en portada.
- Ordenacion regional opcional por temperatura, lluvia, viento o UV.
- Acceso desde cualquier municipio de portada a su pagina de localidad.
- Estados claros de carga, error y sin datos.

## Copy

- Idioma: castellano.
- Tono: util, directo, local.
- Evitar titulares grandilocuentes.
- Para comparativas, usar lenguaje prudente:
  - `Mas calor entre localidades visibles`.
  - `Lluvia mas probable en las proximas horas`.
  - `Prevision de racha mas alta`.
- No decir `alerta`, `aviso`, `riesgo` o `emergencia` si no existe una fuente oficial integrada.

## Responsive

- Disenar primero para movil.
- En tablet/escritorio, ampliar columnas sin perder la logica mobile:
  - portada: buscador + destacados + listado regional;
  - localidad: actual + metricas + horas + dias.
- No ocultar datos importantes en desktop; redistribuirlos.

## Relacion entre pantallas

- La portada ayuda a encontrar o comparar localidades.
- La pagina de localidad profundiza en una localidad concreta.
- Ambas deben compartir:
  - cabecera compacta;
  - lenguaje visual;
  - unidades;
  - iconografia;
  - patrones de filas y metricas.
