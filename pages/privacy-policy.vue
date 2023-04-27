<template>
    <main class="p-5 md:mx-32 text-center">
        <h1>Privacy Policy for Muara Coder</h1>

        <p>At Muara Coder, accessible from https://www.muaracoder.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Muara Coder and how we use it.</p>

        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

        <h2>Log Files</h2>

        <p>Muara Coder follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <a href="https://www.termsfeed.com/privacy-policy-generator/">Privacy Policy Generator</a>.</p>

        <h2>Cookies and Web Beacons</h2>

        <p>Like any other website, Muara Coder uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

        <h2>Google DoubleClick DART Cookie</h2>

        <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>


        <h2>Privacy Policies</h2>

        <P>You may consult this list to find the Privacy Policy for each of the advertising partners of Muara Coder.</p>

        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Muara Coder, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

        <p>Note that Muara Coder has no access to or control over these cookies that are used by third-party advertisers.</p>

        <h2>Third Party Privacy Policies</h2>

        <p>Muara Coder's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>

        <h2>Children's Information</h2>

        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

        <p>Muara Coder does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

        <h2>Online Privacy Policy Only</h2>

        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Muara Coder. This policy is not applicable to any information collected offline or via channels other than this website.</p>

        <h2>Consent</h2>

        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
    </main>
</template>

<script setup>

const { locale } = useI18n()

const metaObjectEn = {
    title: "MuaraCoder: Privacy Policy | Protecting Personal Information",
    ogTitle: 'MuaraCoder Privacy Policy | Protecting Your Personal Information',
    ogTitle: 'MuaraCoder: Privacy Policy | Protecting Personal Information',
    description: "MuaraCoder is committed to protecting your personal information. Read our privacy policy to learn how we collect, use, and protect your data.",
    ogDescription: "MuaraCoder is committed to protecting your personal information. Read our privacy policy to learn how we collect, use, and protect your data.",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River'
}
const metaObjectId = {
    title: "MuaraCoder: Privacy Policy | Melindungi privasi Anda",
    ogTitle: 'MuaraCoder: Privacy Policy | Melindungi privasi Anda',
    description: "MuaraCoder berkomitmen untuk melindungi informasi pribadi Anda. Baca kebijakan privasi kami untuk mempelajari cara kami mengumpulkan, menggunakan, dan melindungi data Anda.",
    ogDescription: "MuaraCoder berkomitmen untuk melindungi informasi pribadi Anda. Baca kebijakan privasi kami untuk mempelajari cara kami mengumpulkan, menggunakan, dan melindungi data Anda.",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River'
}

let metaData = null
if(locale.value === "id"){
    metaData = metaObjectId
}else {
    metaData = metaObjectEn
}
useSeoMeta(metaData)


const i18nHead = useLocaleHead({
    addSeoAttributes: {
    canonicalQueries: ['privacy policy muaracoder']
    }
})
useHead({
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])]
})

</script>