
type PostsType = {
    id: number
    message: string
    likesCount: number
}

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

/* type ProfilePagesType = {
    posts: PostsType[]
    dialogs: DialogsType[]
} */

type ProfilePagesType = {
    posts: PostsType[]    
}
/* type MessagesPagesType = {
    messages: MessagesType[]
} */
type DialogsPagesType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}
type Sidebar={}

export type RootStateType = {
    profilePage: ProfilePagesType
    dialogsPage: DialogsPagesType
    sidebar:Sidebar
}



let state:RootStateType = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 23 },
        ],
       
    },
    dialogsPage: {
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Yo!" },
            { id: 4, message: "Yo-Yo!" },
            { id: 5, message: "Yo-Yo-Yo" },
        ],
        dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Ivan" },
            { id: 3, name: "Alex" },
            { id: 4, name: "Sveta" },
            { id: 5, name: "Victor" },
            { id: 6, name: "Jo" },
        ],

    },
    sidebar: {}
}






/* let state:RootStateType = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 23 },
        ],
        dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Ivan" },
            { id: 3, name: "Alex" },
            { id: 4, name: "Sveta" },
            { id: 5, name: "Victor" },
            { id: 6, name: "Jo" },
        ],
    },
    messagesPage: {
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Yo!" },
            { id: 4, message: "Yo-Yo!" },
            { id: 5, message: "Yo-Yo-Yo" },
        ],
    },
    sidebar: {}
}
 */

export default state