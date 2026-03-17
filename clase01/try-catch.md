              try
               │
               ▼
      ┌───────────────────┐
      │ Ejecutar código   │
      │                   │
      │ ¿Hay error?       │
      └─────────┬─────────┘
                │
        ┌───────┴─────────┐
        │                 │
        ▼                 ▼
    No hay error      Hay error
        │                 │
        ▼                 ▼
 Continúa normal       catch
                           │
                           ▼
                Manejar el error
                Mostrar mensaje
