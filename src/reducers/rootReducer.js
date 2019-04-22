const initState = {
    posts: [
        { id: '1', title: 'Squirtle laid an egg', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        { id: '2', title: 'Charmander laid an egg', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        { id: '3', title: 'A Helix Fossil was Found', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
    ]
}

const rootReducer = (state = initState , action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post=> {
            return post.id !== action.id
        });

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;