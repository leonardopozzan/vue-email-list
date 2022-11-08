const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            mails: [],
            numb: 10
        }
    },
    methods:{
        generateMail(){
            if(this.numb > 0){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element)=>{
                this.mails.push(element.data.response);
                })
            }
            this.$nextTick(()=>this.$refs.adress[this.$refs.adress.length-1].scrollIntoView({behavior: "smooth"}))
        },
        generateMails(){
            this.mails=[];
            for(let i =0; i<this.numb;i++){
                this.generateMail();
            }
            this.$nextTick(()=>this.$refs.adress[this.$refs.adress.length-1].scrollIntoView({behavior: "smooth"}))
        }
    }
})
app.mount('#app');