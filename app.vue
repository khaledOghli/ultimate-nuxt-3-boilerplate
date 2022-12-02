<script setup lang="ts">
const { finalizePendingLocaleChange, locale, localeProperties } = useI18n(); 
const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
</script>
<template >
  <div class="app" :dir="$i18n.localeProperties.dir" :class="'lang-' + $i18n.locale" >
      <NuxtLayout>
        <NuxtPage 
        :transition="{
          name: 'my',
          mode: 'out-in',
          onBeforeEnter
        }" 
            />
      </NuxtLayout>
  </div>
</template>

<style>
.my-enter-active,
.my-leave-active {
  transition: opacity 0.3s;
}

.my-enter,
.my-leave-active {
  opacity: 0;
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>