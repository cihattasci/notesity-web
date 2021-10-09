<template>
  <div id="app">
      <div style="flex-direction: row; display: flex; width: 100%; height: 15%; background-color: #54b3de; bottom: 0; position: absolute; justify-content: space-evenly; align-items: center;">
          <a style="font-weight: bold; color: black" href="#" @click="about">Hakkımızda</a>
          <a style="font-weight: bold; color: black" href="#" @click="contact">İletişim</a>
          <a style="font-weight: bold; color: black" href="#" @click="sss">SSS</a>
          <a style="font-weight: bold; color: black" href="#" @click="legalOne">Mesafeli Satış Sözleşmesi</a>
          <a style="font-weight: bold; color: black" href="#" @click="legalTwo">Kullanım Koşulları</a>
          <a style="font-weight: bold; color: black" href="#" @click="legalThree">Gizlilik Politikası</a>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        about() {
            this.$router.push('about-us')
        },
        contact() {
            this.$router.push('contact')
        },
        sss() {
            this.$router.push('frequently-asked-question')
        },
        legalOne() {
            this.$router.push('distance-selling-contract')
        },
        legalTwo() {
            this.$router.push('use-condition')
        },
        legalThree() {
            this.$router.push('privacy-policy')
        },
    }
}
</script>