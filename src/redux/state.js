import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post.', likesCount: 11},
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How is your Healthy and Wealthy?'},
            {id: 3, message: 'Yo1'},
            {id: 4, message: 'Yo2'},
            {id: 5, message: 'Yo3'}
        ]

    },
    sidebar: {}
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 1
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree (state);
}

export default state;





