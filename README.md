# TODO_List
Приложение для создания списка задач.

Git Flow:
- main - ветка для размещения итоговой версии приложения (production)
- development - ветка разработки приложения
  - feature/PRJ-[номер задачи] - ветки для разработки отдельных составляющих приложения.
    - PRJ-01 - инсталляция проекта Vite/React, создание файловой структуры проекта.
    - PRJ-02 - создание структурных компонент TodoPage, Header, Main, Footer, AddTask, ListTask, Task.    
    - PRJ-03 - создание небольших компонент-элементов: Button, Input.
    - PRJ-04 - оформление и наполнение компонента для задачи Task.
    - PRJ-05 - создание файла данных с задачами, организация вывода данных из файла в приложение через компоненты ListTask, Task.
    - PRJ-06 - оформление и наполнение компонента добавления задач AddTask, обработка события добавления задачи.
    - PRJ-07 - обработка удаления задачи по нажатию кнопки. 
    - PRJ-08 - обработка изменения состояния задачи (выполнена / не выполнена) по нажатию на CheckBox.
    - PRJ-09 - вынос цветов оформления в отдельный объект, применение цветов объекта в приложении.
    - PRJ-10 - создание цветовой индикации задач в зависимости от статуса.


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
