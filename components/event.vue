<template>
    <section class="h-full bg-[#252525] flex flex-col items-center justify-center snap-center bg-opacity-60 relative">
        <img src="https://images.unsplash.com/photo-1655736394058-a98749c5aff9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Man Bride" class="h-full w-full object-cover">
        <div class="absolute top-0 left-0 bottom-0 right-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.5)_13.18%,rgba(37,37,37,0.8)_50.48%,rgba(0,0,0,0.5)_85.87%,#000_100%)] px-10 flex items-center">
            <div class="flex flex-col">
                <div class="text-white mb-8">
                    <p class="text-[1.5rem] sm:text-[2rem] font-title uppercase text-center mb-2 tracking-wider" data-aos="fade-up" data-aos-anchor-placement="top-bottom">Acara</p>
                    <p class="font-primary text-center text-[.9rem] font-thin" data-aos="fade-up" data-aos-anchor-placement="top-bottom">Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir untuk memberikan doa restu.</p>
                </div>
                <div class="flex justify-center mb-8" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div class="inline-block">
                        <div class="font-primary bg-[#DAA63E] text-center py-3 px-8 rounded-tr-3xl">
                            <p class="uppercase text-[1.3rem] xl:text-[1.5rem] text-white">Jumat, 17 Oktober 2025</p>
                        </div>
                        <div class="text-white font-primary py-5 border border-[#DAA63E] rounded-bl-3xl">
                            <p class="uppercase text-center">Resepsi</p>
                            <div class="flex items-center gap-1 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-[15px] h-[15px] fill-white" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"></path></svg>
                                <p class="font-primary text-[.9rem] font-light">17.00 Wita - Selesai</p>
                            </div>
                            <div class="flex items-center gap-1 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-[15px] h-[15px] fill-white" viewBox="0 0 256 256"><path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path></svg>
                                <p class="font-primary text-[.9rem] font-light">Br. Sekar Kejula, Desa Yehembang Kauh</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="font-primary text-center text-[.9rem] text-white mb-8 font-thin" data-aos="fade-up" data-aos-anchor-placement="top-bottom">Siang dan malam berganti begitu cepat, di antara saat-saat mendebarkan yang belum pernah kami rasakan sebelumnya. Kami nantikan kehadiran para keluarga dan sahabat, untuk menjadi saksi ikrar janji suci kami di hari yang bahagia.</p>
                <div class="flex text-white justify-center gap-7 xl:gap-10 font-primary mb-8">
                    <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <p class="text-[1.5rem]">{{ days }}</p>
                        <p class="text-[.9rem]">Hari</p>
                    </div>
                    <span class="block h-[60px] w-[1px] bg-white"></span>
                    <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <p class="text-[1.5rem]">{{ hours }}</p>
                        <p class="text-[.9rem]">Jam</p>
                    </div>
                    <span class="block h-[60px] w-[1px] bg-white"></span>
                    <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <p class="text-[1.5rem]">{{ minutes }}</p>
                        <p class="text-[.9rem]">Menit</p>
                    </div>
                    <span class="block h-[60px] w-[1px] bg-white"></span>
                    <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <p class="text-[1.5rem]">{{ seconds }}</p>
                        <p class="text-[.9rem]">Detik</p>
                    </div>
                </div>
                <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="" class="font-primary text-white text-[.9rem] border border-white px-5 py-3 inline-flex items-center gap-1 transition-all duration-300 hover:bg-white hover:text-[#252525] fill-white hover:fill-[#252525] rounded-md">
                        Buka Map
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    const days = ref('00')
    const hours = ref('00')
    const minutes = ref('00')
    const seconds = ref('00')

    let interval

    // Target waktu: 17 Oktober 2025 jam 17:00 (timezone lokal)
    const targetDate = new Date('2025-10-17T17:00:00')

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance <= 0) {
        clearInterval(interval)
        days.value = hours.value = minutes.value = seconds.value = '00'
        return
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24))
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((distance % (1000 * 60)) / 1000)

      days.value = String(d).padStart(2, '0')
      hours.value = String(h).padStart(2, '0')
      minutes.value = String(m).padStart(2, '0')
      seconds.value = String(s).padStart(2, '0')
    }

    onMounted(() => {
      updateCountdown()
      interval = setInterval(updateCountdown, 1000)
    })

    onUnmounted(() => {
      clearInterval(interval)
    })
</script>