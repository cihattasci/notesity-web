<template>
  <div id="app">
      <div style="justify-content: center; display: flex; margin-top: 1rem; height: 350px;">
          <img :src="this.$route.params.info.notes[0]" />
      </div>
      <div style="display: flex; flex-direction: row; justify-content: center; overflow-x: auto; margin-top: 1rem;">
        <div style="margin-right: 1rem;" v-for="(image, i) in this.$route.params.info.notes" :key="image[i]">
            <img :src="image" style="width: 5rem; height: 5rem;" />
        </div>
      </div>
      <div style="margin-top: 1rem;">
      <b-tabs content-class="mt-3" fill>
        <b-tab title="Bilgiler">
            <div style="height: 360px">
                <hr/>
                <p style="margin-left: 1rem;"> <span style="font-weight: bold; color: black;">Okul</span>: {{this.$route.params.info.university}}</p>
                <hr/>
                <p style="margin-left: 1rem;"> <span style="font-weight: bold; color: black;">Bölüm</span>: {{this.$route.params.info.department}}</p>
                <hr/>
                <p style="margin-left: 1rem;"> <span style="font-weight: bold; color: black;">Ders Adı</span>: {{this.$route.params.info.course}}</p>
                <hr/>
                <p style="margin-left: 1rem;"> <span style="font-weight: bold; color: black;">Konu</span>: {{this.$route.params.info.subject}}</p>
                <hr/>
                <p style="margin-left: 1rem;"> <span style="font-weight: bold; color: black;">Fiyat</span>: {{this.$route.params.info.price}}₺</p>
                <hr/>
                <p style="margin-left: 1rem;"> <span style="font-weight: bold; color: black;">Sayfa Sayısı</span>: {{this.$route.params.info.pageNumber}}</p>
                <hr/>
            </div>
        </b-tab>
        <b-tab title="Detay">
            <div style="height: 360px">
                <p style="margin-left: 1rem;"> <span style="font-weight: bold; color: black;">Ek Bilgiler</span>: {{this.$route.params.info.detail}}</p>
            </div>
        </b-tab>
        <b-tab title="Yorumlar">
            <div style="height: 360px">
                yorumlar
            </div>
        </b-tab>
      </b-tabs>
      </div>
      <div style="flex-direction: row; display: flex; align-items: center; justify-content: center;">
          <div @click="addFavorite" style="width: 200px; cursor: pointer; height:75px; border-width: 1px; border-color: black; background-color: #54b3de; justify-content: center; align-items: center; display: flex; margin-bottom: 1rem; border: solid; margin-right: 2rem;">
              <p style="font-size: 1.2rem; font-weight: bold; color: black;">Favorilere Ekle</p>
          </div>
          <div @click="buy" style="width: 200px; cursor: pointer; height:75px; border-width: 1px; border-color: black; background-color: #54b3de; justify-content: center; align-items: center; display: flex; margin-bottom: 1rem; border: solid; margin-left: 2rem;">
              <p style="font-size: 1.2rem; font-weight: bold; color: black;">Satın Al</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            info: ''
        }
    },
    methods: {
        addFavorite() {
            alert('fdgfd')
        },
        buy() {
            alert('fhfgh')
        }
    }
}
</script>
