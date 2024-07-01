const app= new Vue({
    el:'#app',
    data(){
        return {
            msg:"hello from vue",
            isday:1545
        }
    },

    methods: {
        createName() {
            console.log('create_function called' + this.msg) //value goes in console not browser
        }

    },
    computed : { //keep computational functions in this method
        msg2(){ //cannot give argument in compuated
            return 'something' +this.msg //dsilpays in browser
        }
    }

    // or 

    // data: {
    //     

    //     }
    // }
})