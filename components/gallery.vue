<template>
    <section class="bg-lightgold snap-start py-10">
        <div class="px-5 mb-5">
            <p class="text-[2rem] font-title uppercase text-center mb-2 tracking-wider">Gallery</p>
        </div>
        
        <div class="px-5 mb-4">
            <video playsinline controls class="w-full aspect-video object-cover rounded-xl">
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
                <img
                    :src="img"
                    alt="gallery Wedding Oka & Mita"
                    class="w-full h-auto rounded-xl object-cover"
                />
            </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const images = [
  "https://picsum.photos/400/600", // portrait
  "https://picsum.photos/600/400", // landscape
  "https://picsum.photos/500/500", // square
  "https://picsum.photos/400/700",
  "https://picsum.photos/700/400",
  "https://picsum.photos/500/800",
  "https://picsum.photos/800/500",
  "https://picsum.photos/400/700",
  "https://picsum.photos/700/400",
  "https://picsum.photos/500/800",
  "https://picsum.photos/800/500",
]
</script>