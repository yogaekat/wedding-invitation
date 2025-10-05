<template>
    <section class="h-full bg-[#252525] flex flex-col items-center justify-center snap-center bg-opacity-60 relative">
        <video autoplay muted loop playsinline class="h-full w-full object-cover absolute top-0 left-0 z-[1]">
            <source src="/public/videos/semple2.mp4" type="video/mp4" />
            Browser Anda tidak mendukung elemen video.
        </video>
        <div class="absolute top-0 left-0 h-full w-full z-[2] bg-[#000000]/40 flex items-center">
            <div class="text-white w-full flex flex-col items-center">
                <p class="text-[2rem] font-title uppercase text-center mb-5 tracking-wider" data-aos="fade-up">Kado Digital</p>
                <div @click="copyAccount" class="inline-flex items-center p-3 rounded-lg border bg-gray-50 bg-opacity-10 font-bold cursor-pointer group hover:shadow" data-aos="fade-up">
                    <img src="https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Biru.png" class="h-[5vh] border-r mr-4 pr-4 filter invert brightness-0" alt="">
                    <div class="font-primary">
                        <p>{{ number }}</p>
                        <p>{{ name }}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px] fill-white ml-10" viewBox="0 0 256 256"><path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"></path></svg>
                </div>
            </div>
            <!-- toas  -->
            <transition
              enter-active-class="transition transform duration-500"
              enter-from-class="-translate-y-10 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition transform duration-500"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="-translate-y-10 opacity-0"
            >
                <div v-if="copied" class="absolute top-5 left-2/4 -translate-x-1/2 font-primary text-[.9rem] bg-green-600/50 text-green-400 border border-green-700 py-1 sm:py-2 px-2 sm:px-4 rounded-md flex items-center gap-2 shadow-[0_10px_20px_rgba(34,197,94,0.7)]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px] fill-white" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                    <p class="text-nowrap">Behasil menyalin</p>
                </div>
            </transition>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'

    const number = ref('9876501234')
    const name = ref('Putu Oka Difananda')

    const copied = ref(false)
    let clearTimer = null

    async function copyAccount() {
      if (clearTimer) {
        clearTimeout(clearTimer)
        clearTimer = null
      }

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(number.value)
        } else {
          const ta = document.createElement('textarea')
          ta.value = number.value
          ta.setAttribute('readonly', '')
          ta.style.position = 'absolute'
          ta.style.left = '-9999px'
          document.body.appendChild(ta)
          ta.select()
          document.execCommand('copy')
          document.body.removeChild(ta)
        }

        copied.value = true
        clearTimer = setTimeout(() => {
          copied.value = false
          clearTimer = null
        }, 2000)
      } catch (err) {
        console.error('Gagal menyalin:', err)
        alert('Gagal menyalin nomor rekening, silakan salin manual.')
      }
    }
</script>