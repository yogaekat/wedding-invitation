<template>
    <!-- <div id="loading" class="absolute top-0 left-0 bottom-0 right-0 bg-lightgold z-50"></div> -->
     <ClientOnly>
      <div>
        <introloading />
      </div>
    </ClientOnly>
    <div class="fixed left-0 w-full h-screen bg-pink-700 z-40 flex justify-center items-center xl:hidden transition-all duration-1000" :class="isOpen ? '-top-[100%]' : 'top-0'">
        <video autoplay muted loop playsinline class="h-full w-full object-cover absolute top-0 left-0 z-[1]">
                <source src="/public/videos/semple1.mp4" type="video/mp4" />
                Browser Anda tidak mendukung elemen video.
            </video>
            <div class="absolute top-0 left-0 h-full w-full bg-[#252525]/80 flex justify-center items-end pb-[5rem] z-[2]">
                <div class="flex flex-col items-center transition-all duration-700 font-primary">
                    <img src="/public/images/logo.svg" alt="" class="h-[45vh]">
                    <div class="text-center text-[#FAEFD9]">
                        <p class="mb-3">Kepada Yth.<br>Bapak/Ibu/Saudara/I</p>
                        <p class="uppercase border-b border-[#FAEFD9] py-3 px-5 mb-4">Tuan Muda Yoga Ekatanaya</p>
                    </div>
                    <transition
                      enter-active-class="transition-all duration-700 ease-in-out"
                      enter-from-class="opacity-0 max-h-0"
                      enter-to-class="opacity-100 max-h-20"
                      leave-active-class="transition-all duration-700 ease-in-out"
                      leave-from-class="opacity-100 max-h-20"
                      leave-to-class="opacity-0 max-h-0"
                    >
                      <div v-if="!isOpen" class="overflow-hidden">
                        <button
                          class="bg-[#FAEFD9] text-[#252525] py-2 px-4 mt-5 flex items-center gap-2 rounded-br-xl rounded-tl-xl"
                          @click="openPanel"
                        >
                          Buka Undangan
                          <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#252525] w-6 h-6" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                        </button>
                      </div>
                    </transition>
                </div>
            </div>
    </div>
    <div class="flex relative ">
       <div class="bg-pink-700 xl:flex xl:flex-col items-center justify-center z-40 relative hidden transition-all duration-500" :class="isOpen ? 'xl:w-4/6' : 'xl:w-full'">
           <!-- <button v-if="!isOpen" class="bg-black text-white p-4 mb-10" @click="openPanel">
               OPEN UNDANGAN
           </button> -->
           <video autoplay muted loop playsinline class="h-full w-full object-cover absolute top-0 left-0 z-[1]">
                <source src="/public/videos/semple1.mp4" type="video/mp4" />
                Browser Anda tidak mendukung elemen video.
            </video>
            <div class="absolute top-0 left-0 h-full w-full bg-[#252525]/80 flex justify-center items-end pb-[5rem] z-[2]">
                <div class="flex flex-col items-center transition-all duration-700 font-primary">
                    <img src="/public/images/logo.svg" alt="" class="h-[45vh]">
                    <div class="text-center text-[#FAEFD9]">
                        <p class="mb-3">Kepada Yth.<br>Bapak/Ibu/Saudara/I</p>
                        <p class="uppercase border-b border-[#FAEFD9] py-3 px-5 mb-4 w-[17rem]">Yoga Ekatanaya</p>
                    </div>
                    <transition
                      enter-active-class="transition-all duration-700 ease-in-out"
                      enter-from-class="opacity-0 max-h-0"
                      enter-to-class="opacity-100 max-h-20"
                      leave-active-class="transition-all duration-700 ease-in-out"
                      leave-from-class="opacity-100 max-h-20"
                      leave-to-class="opacity-0 max-h-0"
                    >
                      <div v-if="!isOpen" class="overflow-hidden">
                        <button
                          class="bg-[#FAEFD9] text-[#252525] py-2 px-4 mt-5 flex items-center gap-2 rounded-br-xl rounded-tl-xl"
                          @click="openPanel"
                        >
                          Buka Undangan
                          <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#252525] w-6 h-6" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                        </button>
                      </div>
                    </transition>
                </div>
            </div>
       </div>
       <div class="relative flex justify-center items-center h-screen overflow-hidden transition-all duration-500"  :class="isOpen ? 'w-full xl:w-2/6 xl:z-50' : 'w-full xl:w-0 xl:z-50'">
          <div class="relative z-30 w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar">
                <section class="h-screen bg-black flex flex-col items-center justify-center snap-center bg-opacity-60 relative">
                    <img src="https://images.unsplash.com/photo-1607357910286-1ff94ac13c24?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute top-0 left-0 w-full h-full object-cover z-[1]">
                    <div class="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center z-[2] text-white pb-6 pt-[5rem] bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.75)_58%,rgba(37,37,37,0)_100%)]">
                        <div class="text-center pb-10">
                            <p class="uppercase font-primary font-bold">Pawiwahan</p>
                            <p class="text-[3rem] font-title">Oka & Mita</p>
                            <p class="tracking-widest font-primary">17/10/25</p>
                        </div>
                        <div>
                          <p class="text-center text-[.8rem] flex flex-col items-center font-primary animate-bounce">
                            Scroll Down
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px] fill-white" viewBox="0 0 256 256"><path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path></svg>
                          </p>
                        </div>
                    </div>
                </section>
               <section class="h-screen bg-green-500 flex flex-col items-center justify-center snap-center bg-opacity-60"></section>
          </div>
       </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import introloading from '~/components/introloading.vue';

// state open/tutup
const isOpen = ref(false)

// fungsi toggle
const openPanel = () => {
  isOpen.value = true
}
</script>