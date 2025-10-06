<template>
     <ClientOnly>
      <div>
        <introloading />
      </div>
    </ClientOnly>
    <!-- mobile -->
    <div class="fixed left-0 w-full h-[100dvh] bg-pink-700 z-40 flex justify-center items-center xl:hidden transition-all duration-1000" :class="isOpen ? '-top-[100%]' : 'top-0'">
        <video autoplay muted loop playsinline class="h-full w-full object-cover absolute top-0 left-0 z-[1]">
                <source src="/public/videos/semple1.mp4" type="video/mp4" />
                Browser Anda tidak mendukung elemen video.
            </video>
            <div class="absolute top-0 left-0 h-full w-full bg-[#252525]/80 flex justify-center items-end pb-[3rem] z-[2]">
                <div class="flex flex-col items-center transition-all duration-700 font-primary">
                    <img src="/public/images/logo.svg" alt="" class="h-[30vh]">
                    <div class="text-center text-[#FAEFD9]">
                        <p class="mb-3">Kepada Yth.<br>Bapak/Ibu/Saudara/I</p>
                        <p class="uppercase border-b border-[#FAEFD9] py-3 px-5 mb-2">{{ invited.name }}</p>
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
    <!-- /mobile -->

    <div
      v-if="showOverlay"
      class="fixed h-[100dvh] w-full top-0 left-0 bg-lightgold z-[41] flex items-center justify-center text-[#252525] text-2xl font-primary"
    >
      Loading...
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
                    <img src="/public/images/logo.svg" alt="" class="h-[45vh]" data-aos="fade-up">
                    <div class="text-center text-[#FAEFD9]">
                        <p class="mb-3">Kepada Yth.<br>Bapak/Ibu/Saudara/I</p>
                        <p class="uppercase border-b border-[#FAEFD9] py-3 px-5 mb-4 w-[17rem]">{{ invited.name }}</p>
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
        
       <div class="relative flex justify-center items-center h-[100dvh] overflow-hidden transition-all duration-500"  :class="isOpen ? 'w-full xl:w-2/6 xl:z-50' : 'w-full xl:w-0 xl:z-50'">
          <div ref="scrollContainer" class="relative z-30 w-full h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar scroll-container transition-all duration-500" >
            <intro />
            <bride-man />
            <bride-woman />
            <Mepandes />
            <event />
            <gallery />
            <wish :invited="invited" />
            <gift />
            <ending />
          </div>
       </div>
    </div>

    <div class="fixed bottom-1 right-1 z-50">
      <!-- Toggle music muncul hanya setelah undangan dibuka -->
      <transition
        enter-active-class="transition-opacity duration-700 ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
      >
        <div v-if="isOpen" class="fixed bottom-6 right-6 z-50">
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              class="sr-only peer"
              type="checkbox"
              v-model="isMusicPaused"
              @change="toggleMusic"
            />
            <div
              class="group peer ring-0 bg-gray-50 border-2 border-gray-900 rounded-full outline-none duration-700 
              after:duration-200 w-12 sm:w-20 h-8 sm:h-12 shadow-md peer-checked:bg-gradient-to-r peer-focus:outline-none 
              after:content-[''] after:rounded-full after:absolute after:bg-gray-900 after:outline-none 
              after:h-[23px] sm:after:h-10 after:w-[23px] sm:after:w-10 after:top-[5px] after:left-1 
              peer-checked:after:translate-x-[calc(100%-6px)] sm:peer-checked:after:translate-x-[calc(100%-8px)] 
              peer-hover:after:scale-95"
            >
              <!-- Ikon pause -->
              <svg xmlns="http://www.w3.org/2000/svg"
                class="absolute top-[10px] left-7 sm:left-11 fill-black w-3 sm:w-7 h-3 sm:h-7"
                viewBox="0 0 256 256">
                <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"/>
              </svg>

              <!-- Ikon play -->
              <svg xmlns="http://www.w3.org/2000/svg"
                class="absolute top-[10px] left-2 fill-black w-3 sm:w-7 h-3 sm:h-7"
                viewBox="0 0 256 256">
                <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"/>
              </svg>
            </div>
          </label>
        </div>
      </transition>
    </div>
    
</template>

<script setup>
import { useRoute } from 'vue-router'
import { getInvitedDetail } from '~/server/invited'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import introloading from '~/components/introloading.vue';

useSeoMeta({
    title: 'Wedding of Oka & Mita',
    ogTitle: 'Wedding of Oka & Mita',
    description: 'Dengan penuh cinta, kami mengundang Anda untuk menjadi bagian dari hari bahagia Oka & Mita. Lihat detail acara dan kirimkan doa terbaik Anda.',
    ogDescription: 'Dengan penuh cinta, kami mengundang Anda untuk menjadi bagian dari hari bahagia Oka & Mita. Lihat detail acara dan kirimkan doa terbaik Anda.',
  });

  const showOverlay = ref(true)
  onMounted(() => {
    setTimeout(() => {
      showOverlay.value = false
    }, 2000) // 2 detik
  })

const route = useRoute()
const slug = route.params.slug

const { data: invited, pending, error } = await useAsyncData(
  `invited-${slug}`,
  () => getInvitedDetail(slug)
)

  const isOpen = ref(false)
  const isMusicPaused = ref(false)
  let audioPlayer = null

  // Fungsi play music
  const playMusic = () => {
    if (!audioPlayer) {
      audioPlayer = new Audio('/music/theme-song.mp3')
      audioPlayer.loop = true
    }
    audioPlayer.play().catch(err => console.error('Gagal play:', err))
  }

  // Fungsi pause music
  const pauseMusic = () => {
    if (audioPlayer) {
      audioPlayer.pause()
    }
  }

  // Fungsi toggle (checkbox)
  const toggleMusic = () => {
    if (isMusicPaused.value) {
      pauseMusic()
    } else {
      playMusic()
    }
  }

  // Fungsi buka undangan
  const openPanel = () => {
    isOpen.value = true
    isMusicPaused.value = false // kondisi awal toggle uncheck (musik jalan)
    playMusic()
  }

  import AOS from 'aos'
import 'aos/dist/aos.css' // <- penting!

const scrollContainer = ref(null)
let rafId = null
let ticking = false

function handleScroll() {
  // throttle dengan rAF supaya tidak memanggil refresh terus-menerus
  if (!ticking) {
    ticking = true
    rafId = requestAnimationFrame(() => {
      AOS.refresh() // lebih ringan daripada refreshHard; gunakan refreshHard jika perlu
      ticking = false
    })
  }
}

onMounted(async () => {
  await nextTick()
  AOS.init({
    duration: 700,
    once: false,
    mirror: false,
    // anchorPlacement default 'top-bottom' (kamu sudah pakai di atribut)
  })
  AOS.refresh()

  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onBeforeUnmount(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll)
  }
  if (rafId) cancelAnimationFrame(rafId)
})
</script>
