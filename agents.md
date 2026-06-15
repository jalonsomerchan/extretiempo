# AGENTS.md

## Objetivo del proyecto

Crear una web de consulta meteorologica centrada en Extremadura usando la API publica de Open-Meteo. La experiencia debe priorizar informacion clara, rapida y localizada para municipios extremenos, sin convertir la pagina en una landing generica.

## Stack actual

- Framework: Astro.
- Entrada principal: `src/pages/index.astro`.
- Guia de diseno: `design.md`.
- Comandos:
  - `npm run dev`: servidor local de desarrollo.
  - `npm run build`: build de produccion.
  - `npm run preview`: previsualizacion del build.
- Node requerido: `>=22.12.0`.

## API meteorologica

Usar Open-Meteo como fuente principal:

- Documentacion: `https://open-meteo.com/en/docs`
- Endpoint de prevision: `https://api.open-meteo.com/v1/forecast`
- No requiere API key para el uso publico basico.

Parametros recomendados para una primera version:

```text
latitude=38.8786
longitude=-6.9703
timezone=Europe/Madrid
current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m
hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,weather_code,cloud_cover,wind_speed_10m,wind_gusts_10m
daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,uv_index_max
forecast_days=7
wind_speed_unit=kmh
precipitation_unit=mm
temperature_unit=celsius
```

Coordenadas iniciales sugeridas:

- Badajoz: `38.8786, -6.9703`
- Caceres: `39.4753, -6.3724`
- Merida: `38.9161, -6.3437`
- Plasencia: `40.0312, -6.0885`
- Don Benito: `38.9563, -5.8616`
- Zafra: `38.4254, -6.4173`
- Navalmoral de la Mata: `39.8916, -5.5406`
- Almendralejo: `38.6832, -6.4075`

Si se anaden mas localidades, mantener los datos en una estructura tipada o constante clara, no dispersos por la UI.

## Producto y UX

- La primera pantalla debe mostrar el tiempo real o mas reciente de una localidad extremena seleccionada.
- Priorizar Extremadura: selector de municipios, vista regional y comparativa entre provincias cuando aporte valor.
- Mostrar datos utiles para el dia a dia:
  - temperatura actual y sensacion termica;
  - maxima y minima diaria;
  - probabilidad y cantidad de precipitacion;
  - viento y rachas;
  - humedad;
  - nubosidad;
  - indice UV cuando este disponible.
- Traducir codigos meteorologicos WMO a texto en castellano: despejado, parcialmente nuboso, niebla, llovizna, lluvia, tormenta, nieve, etc.
- Evitar depender solo del color para comunicar alertas o estados.
- Usar unidades locales por defecto: grados Celsius, km/h y milimetros.
- Fechas y horas en `Europe/Madrid`.
- El idioma visible de la web debe ser castellano. Si se usan nombres propios, escribir `Badajoz`, `Caceres`, `Merida`, etc. sin acentos solo si el archivo mantiene ASCII estricto; en UI final pueden usarse acentos.

## Criterios visuales

- Seguir `design.md` como referencia principal para la portada `Entrada Local` y la pagina de localidad `Panel Vivo`.
- La web debe sentirse como una herramienta meteorologica regional, no como una plantilla de marketing.
- Favorecer jerarquia clara: ahora, proximas horas, proximos dias, localidades.
- Diseno responsive desde movil.
- Evitar paletas monotono azuladas. Puede combinar cielo, verde de dehesa, tonos calidos moderados y neutros legibles.
- No usar tarjetas dentro de tarjetas. Las tarjetas son adecuadas para dias, horas o localidades repetidas.
- Mantener estados de carga, error y datos no disponibles.

## Implementacion recomendada

- Separar la llamada a Open-Meteo de la presentacion cuando la logica crezca.
- Construir URLs con `URL` y `URLSearchParams`, no concatenando strings largos.
- Validar que las series devueltas por Open-Meteo existen antes de renderizarlas.
- Modelar la respuesta de Open-Meteo con tipos o funciones adaptadoras si se introduce TypeScript.
- Mantener un mapa local para los codigos WMO.
- Considerar cache en cliente o servidor si se hacen multiples consultas seguidas.
- Si se consultan varias localidades, Open-Meteo permite coordenadas multiples separadas por comas, pero la respuesta cambia de forma; manejarlo explicitamente.

## Accesibilidad y rendimiento

- HTML semantico: `main`, `section`, encabezados ordenados y controles con `label`.
- Contraste suficiente en textos sobre fondos meteorologicos o gradientes.
- Los iconos deben tener texto accesible o estar marcados como decorativos.
- La pagina debe funcionar aunque falle una localidad: mostrar mensaje claro y permitir reintentar.
- Evitar librerias pesadas para graficas sencillas; usar HTML/CSS/SVG simple salvo que haya una necesidad real.

## Verificacion

Antes de dar por terminados cambios funcionales:

- Ejecutar `npm run build`.
- Probar al menos una localidad principal, preferentemente Badajoz o Merida.
- Comprobar estados responsive en movil y escritorio.
- Verificar que no hay solapamientos de texto en tarjetas de horas/dias.
- Confirmar que las fechas aparecen en horario de Espana peninsular.

## Notas para agentes

- Respetar los cambios existentes del usuario y no reescribir el proyecto entero si el encargo es pequeno.
- Mantener el alcance centrado en Extremadura salvo que el usuario pida abrirlo a otras regiones.
- Si se necesita consultar documentacion actual de Open-Meteo, usar fuentes oficiales.
- No introducir claves privadas ni servicios de pago para la prevision basica.
