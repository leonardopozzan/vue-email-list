const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            mails: [],
            numb: 40
        }
    },
    methods:{
        generateMail(){
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element)=>{
                this.mails.push(element.data.response)
                console.log(this.mails.length);
                if(this.numb == this.mails.length){
                    this.$nextTick(()=>{
                        this.$refs.adress[this.$refs.adress.length-1].scrollIntoView({behavior: "smooth"})
                        console.log(this.$refs.adress[this.$refs.adress.length-1])
                    })
                }
            });
            
            // this.$nextTick(()=>{
            //     this.$refs.adress[this.$refs.adress.length-1].scrollIntoView({behavior: "smooth"})
            //     console.log(this.$refs.adress[this.$refs.adress.length-1])
            // })
        },
        generateMails(){
            this.mails=[];
            for(let i =0; i<this.numb;i++){
                this.generateMail();
            }
            
            // scroll.then(()=> scroll.scrollIntoView({behavior: "smooth"}))
            // this.$nextTick(()=>{
            //     this.$refs.adress[this.$refs.adress.length-1].scrollIntoView({behavior: "smooth"})
            // })
        },
        addMail(){
            this.numb++;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element)=>{
                this.mails.push(element.data.response)
                console.log(this.mails.length);
                if(this.numb == this.mails.length){
                        this.$nextTick(()=>{
                        this.$refs.adress[this.$refs.adress.length-1].scrollIntoView({behavior: "smooth"})
                        console.log(this.$refs.adress[this.$refs.adress.length-1])
                    })
                }
            });
        }
    }
})
app.mount('#app');