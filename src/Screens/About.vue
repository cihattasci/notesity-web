<template>
  <div id="app">
      <h2 style="text-align: center; margin-top: 1rem;">Hakkımızda</h2>
      <hr/>
      <div style="flex-direction: row; display: flex; margin-top: 5rem;">
          <div style="display: flex; align-items: center; justify-content: center;">
              <img style="width: 35%; height: auto;" src="../../static/Original.png" />
          </div>
          <div style="display: flex; justify-content: center; align-items: center; margin-right: 10rem;">
              <p style="font-size: 1.4rem;">{{about}}</p>
          </div>
      </div>

      <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
    components: {
        Footer
    },
    data() {
        return {
            about: "Notesity, üniversitelerin kendi içinde yaşanan ders notları sıkıntılarını çözmek ve hatta üniversiteler arası ortak bir ‘copy center’ oluşturmak amacıyla hizmete geçmiş bir pazaryeri mobil uygulamasıdır. Elindeki ders notlarını detayları ve bilgileriyle sisteme yükleyen öğrenciler, ders notlarının satışından yüksek oranda kar sağlayacaktır ve öğrenciler farklı üniversitelerden farklı öğretim görevlilerini tanıyacaktır."
        }
    }
}
</script>
