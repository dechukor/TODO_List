# TODO_List
Приложение для создания списка задач.

Git Flow:
- main - ветка для размещения итоговой версии приложения (production)
- development - ветка разработки приложения
  - feature/PRJ-[номер задачи] - ветки для разработки отдельных составляющих приложения
    - PRJ-01 - инсталляция проекта Vite/React, создание файловой структуры проекта
    - PRJ-02 - создание структурных компонент TodoPage, Header, Main, Footer    
    - PRJ-03 - ...


Структура проекта:

TODO_list
--/public
--/src
----/app (каталог содержит общий компонент приложения, глобальные стили)
----/assets (каталог содержит файлы изображений, svg и т.п.)
----/components (каталог содержит небольшие элементы приложения (кнопки, инпуты и т.п.))
----/types (каталог содержит глобальные типы приложения)
----/views (каталог содержит большие структурные элементы приложения)
----index.tsx (файл отвечающий за рендеринг корневого компонента в DOM.)
