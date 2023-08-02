<template>
  <Head>
    <Title>Sprynx | Car Wash</Title>

    <Link rel="icon" href="/logo.svg" />
  </Head>

  <NuxtLayout
    :transition="{
      name: 'bounce',
      mode: 'out-in',
    }"
  >
    <div class="theme-text dark:bg-secondary-950">
      <debug-dock />

      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script></script>
