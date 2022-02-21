<template>
  <VRow>
    <VCol cols="12" sm="6">
      <VCard>
        <VCardText>
          <VRow class="text-center">
            <VCol cols="12">
              <img alt="Vue logo" src="@/assets/logo.png" class="mt-3 mb-0" />
            </VCol>
            <VCol>
              <h2 class="display-2 font-weight-bold mb-3">
                <div>Welcome message</div>
              </h2>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12" sm="6">
      <VCard>
        <VCardTitle class="pb-0">Colors</VCardTitle>
        <VCardText>
          <div class="d-flex">
            <div class="vue-green mr-2">Vue green</div>
            <div class="bg-accent text-white">Vue green background</div>
          </div>
          <div>
            <div class="info-box mt-4">
              This is a custom info box
              <br />
              in order to check CSS variables exposure from Vuetify
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VRow class="mt-4">
    <VCol cols="12" sm="6">
      <VCard>
        <VCardTitle class="pb-0">Inputs</VCardTitle>
        <VCardText>
          <div>
            <VCheckbox v-model="checkboxValue" label="Checkbox" hide-details />
            <div>Value: {{ checkboxValue }}</div>
          </div>
          <VDivider class="mt-4" />
          <div class="mt-4">
            <label>Text field</label>
            <VTextField v-model="textValue" hide-details />
            <div class="mt-4">Value: {{ textValue }}</div>
          </div>
        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12" sm="6">
      <VCard>
        <VCardTitle class="pb-0">Action buttons</VCardTitle>
        <VCardText>
          <div>
            <VBtn color="primary" class="mr-2">Action button 1</VBtn>
            <VBtn color="primary" class="mr-2">Action button 2</VBtn>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PagePage1',
  setup() {
    const checkboxValue = ref(false)
    const textValue = ref('')

    return {
      checkboxValue,
      textValue,
    }
  },
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as v;

.vue-green {
  color: rgb(var(--v-theme-accent));
}
</style>
