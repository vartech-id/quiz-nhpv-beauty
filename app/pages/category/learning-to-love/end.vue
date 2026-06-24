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
        <NextButton
            to="/"
            button-class="w-30 rounded-full bg-secondary-lavender px-6 py-3 text-white"
            >Back</NextButton
        >
    </main>
</template>
