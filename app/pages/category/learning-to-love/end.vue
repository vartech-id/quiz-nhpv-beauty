<script setup>
const { categorySlug } = useCategorySlug();
const {whatsappLink} = useCategoryWhatsAppLink()
</script>
<template>
    <main>
        <h1>end-1</h1>
        <h2>{{ categorySlug }}</h2>
        <AppQrCode
            :value="whatsappLink" 
        />
        <NuxtLink to="/">Back</NuxtLink>
    </main>
</template>
