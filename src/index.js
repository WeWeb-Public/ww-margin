import wwObject from './wwObjectMargin.vue'

const name = "ww-margin";
const wwEnableMetrics = false;

const addComponent = function () {
    if (window.vm) {

        wwLib.wwObject.register({
            content: {
                type: name,
                data: {
                    size: "medium" // xbig, big, medium, small, xsmall
                }
            },
            enableMetrics: wwEnableMetrics,
            /* wwManager:start */
            cmsOptions: {
            }
            /* wwManager:end */
        });

        window.vm.addComponent(name, wwObject);

        return true;
    }
    return false;
}

if (!addComponent()) {
    const iniInterval = setInterval(function () {
        if (addComponent()) {
            clearInterval(iniInterval);
        }
    }, 10);
}