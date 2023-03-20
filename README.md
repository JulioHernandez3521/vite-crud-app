# App start Modo desarrollo 

1. Iniciar los servicios del servidor 

```
npm run server
```


1. Iniciar app vite 

```
npm run dev
```

## Construccion de Produccion

```
npm run build
```
# Notas 

1. Si se quiere montar en github pages agregar el archivo vite.config.js y poner la configuracion 
    * Donde ```base``` es la url que se le asigna al proyecto
```
import { defineConfig } from "vite";

export default defineConfig ({
    base: '/BlackJack-Viet-Netifly/',
    plugins: []
});

```

2. Para subir a git se deve renombrar la carpeta public a otro nombre por ejemplo docs con el fin de darle seguimiento