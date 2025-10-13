<template>
    <section class="bg-lightgold snap-start py-10 transition-all duration-500">
        <div class="px-5 mb-5">
            <p class="text-[2rem] font-title uppercase text-center mb-2 tracking-wider">Galeri</p>
        </div>

        <div class="px-5">
            <!-- Masonry container -->
            <div class="columns-2 sm:columns-2 md:columns-3 lg:columns-2 gap-2">
            <div
                v-for="(img, i) in images"
                :key="i"
                class="mb-2 break-inside-avoid"
            >
                <a :href="img" data-fancybox="gallery"  >
                    <img :src="img" alt="gallery Wedding Oka & Mita" class="w-full h-full rounded-xl object-cover" data-aos="flip-up"/>
                </a>
            </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted } from 'vue'

    const images = [
      "/images/gallery/1.webp", 
      "/images/gallery/2.webp", 
      "/images/gallery/4.webp", 
      "/images/gallery/3.webp", 
      "/images/gallery/5.webp", 
      "/images/gallery/6.webp", 
      "/images/gallery/7.webp", 
      "/images/gallery/8.webp", 
      "/images/gallery/9.webp", 
      "/images/gallery/10.webp", 
      "/images/gallery/11.webp", 
      "/images/gallery/12.webp", 
    
    ]

    onMounted(async () => {
      // Import hanya di client
      const fancybox = await import('@fancyapps/ui')
      await import('@fancyapps/ui/dist/fancybox/fancybox.css')

      fancybox.Fancybox.bind('[data-fancybox="gallery"]', {
        // Opsi custom Fancybox di sini
      })
    })
</script>