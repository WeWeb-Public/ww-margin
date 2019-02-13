import wwObject from './wwObjectMargin.vue'

const name = "__NAME__";
const version = '__VERSION__';

const addComponent = function () {
    if (window.vm) {

        wwLib.wwObject.register({
            content: {
                type: name,
                data: {
                    size: "medium" // xbig, big, medium, small, xsmall
                }
            },
            upsales: {
                wwAnalytics: {
                    click: false
                }
            },
            /* wwManager:start */
            cmsOptions: {
            }
            /* wwManager:end */
        });

        window.vm.addComponent({
            name: name,
            version: version,
            content: wwObject
        });

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