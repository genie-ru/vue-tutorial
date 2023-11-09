const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app')

//network ctrl + F5


// setTimeout(() => {
//     vm.firstName = 'Bob';
// }, 2000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'John',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')