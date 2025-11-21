import { createAction, props } from "@ngrx/store";


//Действия добавления, удаления и редактирования
export const addBookToList = createAction('[Book] Добавить книгу',
    props<{name: string, description: string, logo: File | null}>()
)
export const deleteBookToList = createAction('[Book] Удалить книгу',
    props<{id: number}>()
)

//Действие добавления в прочитаные и удаления из него
export const addBookToListRead = createAction('[Read] Добавить книгу в прочитанные',
    props<{id: number}>()
)
export const deleteBookToListRead = createAction('[Read] Удалить книгу из прочитанных',
    props<{id: number}>()
)