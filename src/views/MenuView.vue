<script setup>
import { ref } from 'vue'
import {menuStore} from '@/stores/menu'

const allmenu = menuStore()
const alist = allmenu.menuList

function del(i){
    allmenu.deleteMenu(i);
}
 function addMenu(){
    const aMenu = ref({title:'ไก่ทอด', img:'',price:20,rating:5}) //input by v-model กำหนด mapping
    allmenu.menuList.push(aMenu.value)
}


</script>

<template>
    <div>
        <h1>Menu List </h1>
    

    <ul>
        <li v-for="(n,index) in alist" :key="index">
            {{n.title}},{{ n.price }}. 
        <button @click="del(index)">ลบ</button></li>
    </ul>
    <button @click="addMenu">Add Menu</button>
    </div>
</template>