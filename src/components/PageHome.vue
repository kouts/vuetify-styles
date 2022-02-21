<template>
  <VRow>
    <VCol md="6">
      <div class="d-flex flex-column justify-center h-100">
        <VCard class="card-sample w-100">
          <VCardText class="content">
            <div class="d-flex justify-center">
              <img alt="Vue logo" src="@/assets/logo.png" class="text-center" />
            </div>
            <div class="d-flex justify-center mt-7">
              <div class="tagline text-center font-weight-light">Sample text here</div>
            </div>
            <div class="mt-7 text-center">Another text here</div>
            <div class="mt-7">
              <VBtn size="large" color="accent" block>Button text</VBtn>
            </div>
            <div class="mt-7 text-center">
              <a href="#" target="_blank" rel="noreferrer noopener">
                Read Privacy Policy
                <VIcon size="x-small" class="external-link-icon ml-1">fal fa-external-link</VIcon>
              </a>
            </div>
          </VCardText>
        </VCard>
      </div>
    </VCol>
    <VCol md="6">
      <VCard>
        <VCardTitle>Theme colors</VCardTitle>
        <VCardText>
          <VRow>
            <VCol>
              <div class="text-h4">Using Vuetify classes</div>
              <div class="pa-2 bg-primary mt-4">bg-primary</div>
              <div class="pa-2 text-primary">text-primary</div>

              <div class="pa-2 bg-secondary mt-4">bg-secondary</div>
              <div class="pa-2 text-secondary-custom">text using the "on" variables of Vuetify</div>

              <div class="pa-2 bg-error mt-4">bg-error</div>
              <div class="pa-2 bg-warning">bg-warning</div>
              <div class="pa-2 bg-info">bg-info</div>
              <div class="pa-2 bg-success">bg-success</div>
              <div class="pa-2 bg-accent">bg-accent</div>
              <div class="mt-4 text-h4">Buttons</div>
              <div>
                <VBtn color="primary" class="mr-2">Primary</VBtn>
                <VBtn color="secondary" class="mr-2">Secondary</VBtn>
                <VBtn color="error" class="mr-2">Error (danger)</VBtn>
                <VBtn class="mr-2">No color</VBtn>
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.card-sample {
  max-width: 486px;
  .content {
    padding: 70px;
    .tagline {
      color: rgb(var(--v-theme-accent));
      font-size: 24px;
      max-width: 220px;
      line-height: 36px;
      letter-spacing: 0.1rem;
    }
    .external-link-icon {
      vertical-align: baseline;
    }
  }
}
</style>
