import CollapseFooterColumnsChange from './collapse-footer-columns-change/collapse-footer-columns-change.plugin';


const PluginManager = window.PluginManager;
PluginManager.override('CollapseFooterColumns', CollapseFooterColumnsChange, '[data-collapse-footer]');

// Necessary for the webpack hot module reloading server
if (module.hot) {
    module.hot.accept();
}
