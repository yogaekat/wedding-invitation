<template>
  <div id="home-loading" class="fixed inset-0 z-50 bg-lightgold flex items-center justify-center">
    <!-- wrapper mutlak dari markup Anda -->
    <div class="relative w-[80vw] sm:w-[40vw] aspect-square">
      <!-- ✱ tiap img-container saya tambahkan opacity-0 supaya awalnya tak terlihat -->
      <div id="img-1" class="opacity-0 aspect-[.8] w-[40vw] sm:w-[18vw] overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[5]">
        <img src="/public/images/main-load.webp" class="w-full h-full object-cover object-center" />
      </div>

      <div id="img-2" class="opacity-0 aspect-[.8] w-[30vw] sm:w-[15vw] overflow-hidden absolute top-0 left-0">
        <img src="/public/images/bride-man.webp" class="w-full h-full object-cover object-center" />
      </div>

      <div id="img-3" class="opacity-0 aspect-[.8] w-[30vw] sm:w-[15vw] overflow-hidden absolute -bottom-[10px] -right-[0] z-[1]">
        <img src="/public/images/bride-woman.webp" class="w-full h-full object-cover object-center" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { onMounted, nextTick } from 'vue';
    import { gsap } from 'gsap';

    function waitAllImages (): Promise<void> {
        const imgs = Array.from(
            document.querySelectorAll<HTMLImageElement>('#home-loading img')
        )

        return new Promise((resolve) => {
          let loaded = 0
          const done = () => ++loaded === imgs.length && resolve()

          imgs.forEach((img) => {
            if (img.complete) {
              done()
            } else {
              img.addEventListener('load', done)
              img.addEventListener('error', done)
            }
          })
        })
    }

    onMounted(async () => {
        if (!process.client) return
        await waitAllImages()
        await nextTick()
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
        /* ---- FADE‑IN + slight zoom, BERURUTAN ---- */
        tl.fromTo('#img-1', { autoAlpha: 0, scale: 1.2 }, { autoAlpha: 1, scale: 1, duration: 0.6 })
        .fromTo('#img-2', { autoAlpha: 0, scale: 1.2 }, { autoAlpha: 1, scale: 1, duration: 0.3 }, '+=0.15')
        .fromTo('#img-3', { autoAlpha: 0, scale: 1.2 }, { autoAlpha: 1, scale: 1, duration: 0.3 }, '+=0.15')
        /* ---- SLIDE‑UP BERURUTAN (mulai 0.8 d setelah fade‑in terakhir) ---- */
        .to(
            ['#img-1', '#img-2', '#img-5', '#img-4', '#img-3'],
            { y: '-120%', autoAlpha: 0, duration: 0.5, stagger: 0.05 },
            '+=0.8'  
        )
        /* ---- OVERLAY FADE‑OUT ---- */
        .to('#home-loading', { autoAlpha: 0, duration: 0.6 })
        .add(() => document.getElementById('home-loading')?.remove())
    });
</script>