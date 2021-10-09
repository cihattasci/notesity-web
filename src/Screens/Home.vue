<template>
  <div id="app">
    <h2 style="text-align: center;" >{{$t('last_uploads')}}</h2>
    <div style="flex-direction: row; display: flex; overflow-x: auto; overflow::-webkit-scrollbar: display: none;">
      <div v-for="item in info" :key="item.id">
        <Note :info="item"/>
      </div>
    </div>
    <hr/>
    <h2 style="text-align: center;" >{{$t('highlights')}}</h2>
    <div style="flex-direction: row; display: flex; overflow-x: auto; overflow::-webkit-scrollbar: display: none;">
      <div v-for="item in info" :key="item.id">
        <Note :info="item"/>
      </div>
    </div>
    <hr/>
    <h2 style="text-align: center;" >{{$t('most_rated')}}</h2>
    <div style="flex-direction: row; display: flex; overflow-x: auto; overflow::-webkit-scrollbar: display: none;">
      <div v-for="item in info" :key="item.id">
        <Note :info="item"/>
      </div>
    </div>
    <hr/>
    <h2 style="text-align: center;" >{{$t('top_rated')}}</h2>
    <div style="flex-direction: row; display: flex; overflow-x: auto; overflow::-webkit-scrollbar: display: none;">
      <div v-for="item in info" :key="item.id">
        <Note :info="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Note from '../components/Note.vue';
import axios from 'axios';
export default {
  data() {
    return {
      info: []
    }
  },
  components: {
    Note
  },
  created() {
    let self = this;
    var config = {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
    };
    axios.get('http://164.90.175.92:8080/notes/last-added-notes', config)
        .then(function(response) {
          self.info = response.data
        })
        .catch(function(error) {
          console.log('error', error);
        })
  },
}
</script>
