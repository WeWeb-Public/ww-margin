<template>
    <div class="ww-margin" v-bind:style="{ height: height + 'px' }"></div>
</template>
 

<script>
export default {
    name: "__COMPONENT_NAME__",
    props: {
        wwObjectCtrl: Object,
        wwAttrs: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
        };
    },
    computed: {
        wwObject() {
            return this.wwObjectCtrl.get();
        },
        height() {
            switch (this.wwObject.content.data.size) {
                case "xsmall":
                    return 5;
                    break;
                case "small":
                    return 10;
                    break;
                case "medium":
                    return 20;
                    break;
                case "big":
                    return 40;
                    break;
                case "xbig":
                    return 80;
                    break;
                default:
                    return 20;
            }
        }
    },
    watch: {
    },
    methods: {},
    mounted() {
        // wwLib.wwElementsStyle.applyAllStyles({
        // 	wwObject: this.wwObject,
        // 	lastWwObject: null,
        // 	element: this.$el,
        // 	noClass: false,
        // 	noAnim: this.wwAttrs.wwNoAnim,
        // });

        this.$emit('ww-loaded', this);
    }
};
</script>

<style scoped>
.ww-margin {
    width: 100%;
}

.editing .ww-margin {
    border: 2px dashed grey;
    background-color: #86868645;
}
</style>
