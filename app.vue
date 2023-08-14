<template>
  <Head>
    <Title>Sprynx | Car Wash</Title>

    <Link rel="icon" href="/logo.svg" />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
  </Head>

  <NuxtLayout
    :transition="{
      name: 'bounce',
      mode: 'out-in',
    }"
  >
    <div>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
