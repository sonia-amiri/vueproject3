Vue.component('tab-item',{
    template : `
      <li :class="{'is-active':isActive}">
        <a href="#" @click="clicked">{{name}}</a>
      </li>
    `,
    props : ['name'] ,
    methos :{
      clicked(){
        this.isActive=!this.isActive;
     },
     
    } ,
    data(){
      return{
        isActive:false
      } 
    }
    
});


Vue.component('tab-list',{
  template:`
    <div class="tabs"> 
      <ul>
      
        <slot></slot>

      
      </ul>
    </div>  
  `
 
  
});


let vue = new Vue({
    el:'#app'
});