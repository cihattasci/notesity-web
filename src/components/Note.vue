<template>
    <div style="margin-left: 1rem; margin-right: 1rem;" id="app">
        <b-card
            :title="info.course"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <b-card-text>
                {{info.detail.length > 60 ? info.detail.substring(0,60) + "..." : info.detail}}
            </b-card-text>

            <b-button href="#" @click="goToDetail" variant="primary">{{$t('review_note')}}</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    props: ['info'],
    methods: {
        goToDetail() {
            this.$router.push({name: 'note-detail', params: {info: this.$props.info}, query: {note: this.$props.info.id}});
        }
    }
}
</script>
