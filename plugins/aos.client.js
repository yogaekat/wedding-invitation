import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    AOS.refresh() // agar setiap pindah halaman, AOS reinit
  })

  onMounted(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    })
  })
})