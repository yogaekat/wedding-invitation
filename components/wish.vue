<template>
    <section class="h-full bg-[#252525] snap-center relative transition-all duration-500">
        <img src="/public/images/event.webp" alt="" class="absolute top-0 left-0 h-full w-full object-cover z-1">
        <div class="px-5 sm:px-8 bg-[#252525]/90 absolute top-0 left-0 h-full w-full z-2 flex flex-col justify-center">
            <p class="text-[1.5rem] sm:text-[2rem] font-title uppercase text-center tracking-wider text-white mb-5" data-aos="fade-up">Ucapan</p>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-3 font-primary isolate rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-5 mb-5" data-aos="fade-up">
                <input v-model="name" type="text" name="name" id="name" placeholder="Nama" class="text-[.9rem] sm:text-base py-2 px-5 rounded-md transition-all duration-300 focus:outline-none focus:ring-[#DAA63E] focus:ring-[2px]" required readonly>
                <textarea v-model="wishes" name="wishes" id="wishes" placeholder="Ucapan" rows="3" class="text-[.9rem] sm:text-base py-2 px-5 rounded-md ransition-all duration-300 focus:outline-none focus:ring-[#DAA63E] focus:ring-[2px]" required></textarea>
                <div class="flex gap-5">
                    <div>
                        <input v-model="present" type="radio" id="hadir" name="present" value="Hadir" class="mr-2 accent-[#DAA63E]" required>
                        <label for="hadir" class="text-white text-[.9rem] sm:text-base">Hadir</label><br>
                    </div>
                    <div>
                        <input v-model="present" type="radio" id="tidakHadir" name="present" value="Maaf Berhalangan Hadir" class="mr-2 accent-[#DAA63E]" required>
                        <label for="tidakHadir" class="text-white text-[.9rem] sm:text-base">Maaf Berhalangan Hadir</label><br>
                    </div>
                </div>
                <div class="text-end">
                    <button class="bg-[#DAA63E] text-[.9rem] sm:text-base px-10 py-2 text-[#252525] rounded-md transition-all duration-300 hover:bg-[#c09237] tracking-wider uppercase">Kirim</button>
                </div>
            </form>

            <div class="flex flex-col gap-3 font-primary isolate rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-5 max-h-[40dvh] overflow-scroll transition-all duration-300 mb-3" data-aos="fade-up">
                <div v-for="item in paginatedData" :key="item.id"  class="border border-white p-3 rounded-md text-white">
                    <div class="flex border-b border-[#f5f5f5] mb-3 pb-2 justify-between items-start">
                        <p class="uppercase text-[.9rem] font-bold w-[50%] mt-[3px]">{{ item.name }}</p>
                        <div>
                            <p class="text-[.7rem] font-light border border-[#DAA63E] inline-block px-2 py-[1px] rounded-full text-[#DAA63E]">{{ item.present }}</p>
                        </div>
                    </div>
                    <p class="text-[.9rem]">{{ item.wishes }}</p>
                </div>
            </div>
            <!-- pagin control  -->
            <div>
                <div class="flex text-white items-center gap-3 justify-center">
                    <button
                        @click="prevPage"
                        :disabled="currentPage === 1"
                        class="bg-white p-1 rounded-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px] fill-[#252525]" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                    </button>

                    <button
                        v-for="page in visiblePages"
                        :key="page"
                        @click="goToPage(page)"
                        :class="[
                          'px-2 py-[3.5px] rounded-md border border-white',
                          page === currentPage ? 'bg-white text-[#252525]' : 'bg-transparent'
                        ]"
                    >
                        {{ page }}
                    </button>

                    <button
                        @click="nextPage"
                        :disabled="currentPage === totalPages"
                        class="bg-white p-1 rounded-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px] fill-[#252525]" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                    </button>

                </div>

                <!-- <ul class="flex text-white font-primary items-center gap-3 justify-center">
                    <li>
                        <button
                            @click="prevPage"
                            :disabled="currentPage === 1"
                            class="bg-white p-1 rounded-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px] fill-[#252525]" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                        </button>
                    </li>
                    <li
                      v-for="page in visiblePages"
                      :key="page"
                    >
                      <button
                        @click="goToPage(page)"
                        :class="[
                          'px-3 rounded-md border border-white',
                          page === currentPage ? 'bg-white text-[#252525]' : 'bg-transparent'
                        ]"
                      >
                        {{ page }}
                      </button>
                    </li>
                    <li>
                        <button
                            @click="nextPage"
                            :disabled="currentPage === totalPages"
                            class="bg-white p-1 rounded-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px] fill-[#252525]" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                        </button>
                    </li>
                </ul> -->
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
            <div v-if="showToast" class="absolute top-5 left-2/4 -translate-x-1/2 font-primary text-[.9rem] bg-green-600/50 text-green-400 border border-green-700 py-1 sm:py-2 px-2 sm:px-4 rounded-md flex items-center gap-2 shadow-[0_10px_20px_rgba(34,197,94,0.7)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[25px] fill-white" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                <p class="text-nowrap">Ucapan berhasil dikirim! 🎉</p>
            </div>
        </transition>
    </section>
</template>


<script setup>
    import { getPresence } from '~/server/presence'
    import { ref, computed } from 'vue'

    // ambil data dari server
    const { data: presence } = await useAsyncData('presence', getPresence)

    // state pagination
    const currentPage = ref(1)
    const perPage = 3

    // hitung total halaman
    const totalPages = computed(() => {
      return presence.value ? Math.ceil(presence.value.length / perPage) : 0
    })

    // slice data sesuai halaman
    const paginatedData = computed(() => {
      if (!presence.value) return []
      const start = (currentPage.value - 1) * perPage
      return presence.value.slice(start, start + perPage)
    })

    // bikin window angka pagination (max 3 angka di tengah)
    const visiblePages = computed(() => {
      if (totalPages.value <= 3) {
        return Array.from({ length: totalPages.value }, (_, i) => i + 1)
      }
      if (currentPage.value === 1) return [1, 2, 3]
      if (currentPage.value === totalPages.value) {
        return [totalPages.value - 2, totalPages.value - 1, totalPages.value]
      }
      return [currentPage.value - 1, currentPage.value, currentPage.value + 1]
    })

    // fungsi navigasi
    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
      }
    }
    const nextPage = () => goToPage(currentPage.value + 1)
    const prevPage = () => goToPage(currentPage.value - 1)



const props = defineProps({
  invited: {
    type: Object,
    required: true
  }
})

const name = ref('')
const wishes = ref('')
const present = ref('')
const showToast = ref(false)

// 🟡 isi name otomatis saat invited masuk
watch(
  () => props.invited,
  (newVal) => {
    if (newVal?.name) {
      name.value = newVal.name
    }
  },
  { immediate: true } // langsung jalan saat komponen pertama kali muncul
)

const handleSubmit = async () => {
  try {
    const url = 'https://weddingcms.thenicedream.com/api/v1/presence'
    const res = await $fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        name: name.value,
        wishes: wishes.value,
        present: present.value
      }
    })

    console.log('Response:', res)

    // reset form
    name.value = props.invited?.name || ''
    wishes.value = ''
    present.value = ''
    showToast.value = true
    setTimeout(() => (showToast.value = false), 2000)
    await refreshNuxtData('presence')
  } catch (err) {
    console.error(err)
    alert('Gagal mengirim ucapan, coba lagi.')
  }
}
</script>