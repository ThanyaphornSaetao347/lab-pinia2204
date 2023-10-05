import { ref } from 'vue'
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {
    const x = ref(500)
  const menuList = ref([
    {title:'หมูกระทะ',img:'',price:990,rating:5},
    {title:'กระพงทอดน้ำปลา',img:'',price:50,rating:4.6},
    {title:'ขาหมูทอด',img:'',price:350,rating:3},
    {title:'ลอบสเตอร์แช่น้ำปลา',img:'',price:1190,rating:2},
    {title:'มาม่า',img:'',price:10,rating:5}
    // {title:'',img:'',price:0,rating:0},
    // {title:'',img:'',price:0,rating:0},
    // {title:'',img:'',price:0,rating:0},
    // {title:'',img:'',price:0,rating:0},
    // {title:'',img:'',price:0,rating:0}
])

    function deleteMenu(i) {
        // delete index 1
        // console.log(i)
        // .pop(i) delete ตัวสุดท้าย
        menuList.value.splice(i,1)
    }
    function addMenu(x){
        menuList.value.push(x)
    }


return {menuList,deleteMenu, addMenu}
})