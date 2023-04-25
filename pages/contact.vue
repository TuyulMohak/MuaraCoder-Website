<template>
    <main class="p-5 md:mx-64 text-center text-gray-700">
        <h1>Contact</h1>
        <div class="grid grid-cols-1 gap-5">
            <section class="col-span-1 border rounded-lg">
                <h2>My Address</h2>
                <p><strong>location</strong> : Jambi City, Indonesia</p>
                <p><strong>Email</strong>    : <a class="underline hover:text-green-600" href="mailto:rivandra0@gmail.com">rivandra0@gmail.com</a></p>
            </section>
            <section class="col-span-1 border rounded-lg">
                <h2>Connect with Me Through Social Media</h2>
                <MySocialMedia/>
            </section>
        </div>
    </main>
</template>

<script setup>
useSeoMeta({
    title: "Contact: Get in Touch with Muhammad Rivandra and MuaraCoder",
    ogTitle: 'Contact: Get in Touch with Muhammad Rivandra and MuaraCoder',
    description: "Have a question or suggestion? Want to collaborate? Don't hesitate to contact me using the form below. I'm always happy to chat with fellow web developers and enthusiasts.",
    ogDescription: "Have a question or suggestion? Want to collaborate? Don't hesitate to contact me using the form below. I'm always happy to chat with fellow web developers and enthusiasts.",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    keywords: 'linkedin, instagram, github, contact, feedback, social media' ,
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
})
</script>