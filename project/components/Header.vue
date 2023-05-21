<template>
 <div>
  <div class="text-[24px] py-8 text-[#282538]">
     <span class="font-semibold">Github</span> Jobs
  </div>
 
 <div class="min-h-[132px] relative flex justify-center items-center">
  <img src="pic/backgroundImg.png" class="relative min-h-[132px] rounded"> 
  <div class="h-[55px] w-5/6 bg-white absolute rounded flex justify-between items-center pl-[17px] pr-1 text-[#B9BDCF]">
    <div class="flex justify-between items-center">
      <span class="material-symbols-outlined mr-3">
      work
    </span>
    <input type="text" placeholder="Title, companies, expertise or benefits" class="w-full focus:ring-blue-500 focus:border-blue-500 truncate">
    </div>
    
    <div class="bg-[#1E86FF] w-[146px] h-[47px] rounded text-white flex justify-center items-center cursor-pointer">
      Search
    </div>
    
  </div>
 </div>

 </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
  
    }
  },
  watch:{
  },
  

}
</script>

<style>

</style>