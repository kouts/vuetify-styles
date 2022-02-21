<template>
  <VApp>
    <VAppBar app class="p-app-bar">
      <VContainer class="d-flex">
        <div class="mr-auto d-flex align-center">
          <div>
            <RouterLink to="/" class="mr-4">Home</RouterLink>
            <RouterLink to="/page1" class="mr-4">Page 1</RouterLink>
          </div>
        </div>
      </VContainer>
    </VAppBar>
    <VMain>
      <VContainer class="fill-height">
        <RouterView />
      </VContainer>
    </VMain>

    <PageFooter />
  </VApp>
</template>

<script lang="ts">
import PageFooter from '@/components/PageFooter.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    PageFooter,
  },
})
</script>

<style lang="scss">
@import '@/styles/app';
</style>
