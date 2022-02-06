const App = {
    data() {
        return {
            isActive: false,
            error: null, 
            users: [],
            usersSelect: [],
            activeLink: 1,
            infoUser: [],
            inputValue: ''
        }
    },
    methods: {
        addSelectUsers(index) {
            let selectUser = this.users.splice(index, 1);
                
            this.usersSelect.push(selectUser[0]);

            console.log(this.usersSelect);
        },

        deleteSelectUsers(index) {
            let selectUser = this.usersSelect.splice(index, 1);
                
            this.users.push(selectUser[0]);

            console.log(this.usersSelect);
        },

        addClassActive() {
            return {
              active: this.isActive = true,
          }
        },

        getInfoUser(index) {
            let url = this.users[index]['url'];
            fetch(url)
           .then(response => response.json())
           .then(json =>  {
               this.infoUser.push({'name': json.name, 'location': json.location, 'company': json.company, "followers": json.followers, "following": json.following})
            })
       
            console.log(this.infoUser)
         },
      
    },

    mounted() {
        axios
          .get('https://api.github.com/users')
          .then(response => this.users = response.data)
      }
}

Vue.createApp(App).mount('#app')