import wwObject from './wwObjectSrc.vue'

const name = "ww-margin";
const wwEnableMetrics = false;

const addComponent = function () {
    if (window.vm) {
        window.vm.addComponent(name, wwObject);

        wwLib.wwObject.registerContentType(
            name,
            {
                type: wwObjectName,
                data: {
                    size: "medium" // xbig, big, medium, small, xsmall
                }
            },
            wwEnableMetrics
        );

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