# Тестовая версия React архитектуры

Ссылки:  
 https://www.taniarascia.com/react-architecture-directory-structure/

Структура компонентов:
  Component.js - Фактический компонент React
  Component.styles.js - Файл стилизованных компонентов для компонента
  Component.test.js - Тесты
  Component.stories.js - Файл сборника рассказов

  └── /src
      └── /components
          ├── /forms
          │   ├── /TextField
          │   │   ├── TextField.js
          │   │   ├── TextField.styles.js
          │   │   ├── TextField.test.js
          │   │   └── TextField.stories.js
          │   ├── /Select
          │   │   ├── Select.js
          │   │   ├── Select.styles.js
          │   │   ├── Select.test.js
          │   │   └── Select.stories.js
          │   └── index.js
          ├── /routing
          │   └── /PrivateRoute
          │       ├── /PrivateRoute.js
          │       └── /PrivateRoute.test.js
          └── /layout
              └── /navigation
                  └── /NavBar
                      ├── NavBar.js
                      ├── NavBar.styles.js
                      ├── NavBar.test.js
                      └── NavBar.stories.js