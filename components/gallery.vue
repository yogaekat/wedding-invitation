<template>
    <section class="bg-lightgold snap-start py-10">
        <div class="px-5 mb-5">
            <p class="text-[2rem] font-title uppercase text-center mb-2 tracking-wider">Galeri</p>
        </div>
        
        <div class="px-5 mb-4">
            <video 
                playsinline 
                controls 
                class="w-full aspect-video object-cover rounded-xl" 
                data-aos="fade-up"
                poster="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
                <source src="/public/videos/semple2.mp4" type="video/mp4" />
                Browser Anda tidak mendukung elemen video.
            </video>
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
                    <img :src="img" alt="gallery Wedding Oka & Mita" class="w-full h-full rounded-xl object-cover" data-aos="fade-in"/>
                </a>
            </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted } from 'vue'

    const images = [
      "https://images.unsplash.com/photo-1655736394091-b1c3efc76a08?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // portrait
      "https://images.unsplash.com/photo-1655736394225-1d5a5a57907e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D", // landscape
      "https://images.unsplash.com/photo-1655736394058-a98749c5aff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D", // square
      "https://images.unsplash.com/photo-1655736261207-69a5a975308c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1655736394045-6691d9126c30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1655736394081-6b326d07dbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1655736045812-15a0abedbb1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1655736045924-c18938bf995e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1655736394055-8ea1b3146c49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1655736045838-923fc96ba255?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTExfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1655736394065-db1d3c5bbf9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTA1fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1655736045872-d9ff640bceed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTA5fHx8ZW58MHx8fHx8"
    
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