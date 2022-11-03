const {createApp} = Vue
    createApp({
        data(){
           
            return{
                todos: [
                    { text: "Learn JavaScript", done: false },
                    { text: "Learn Vue", done: false },
                    { text: "Enjoy life", done: true },
                    { text: "Smile more", done: true }
                  ]
            }
            
            },
            methods: {
                toggle: function(todo){
                  todo.done = !todo.done
              }
            
           
        },
    }).mount('#app')




  