import CollapseFooterColumnsPlugin from 'src/plugin/collapse/collapse-footer-columns.plugin';
import ViewportDetection from 'src/helper/viewport-detection.helper';



export default class CollapseFooterColumnsChange extends CollapseFooterColumnsPlugin {
    init() {
        console.log('fuuu');
    }
    _isInAllowedViewports() {
        return (ViewportDetection.isXS() || ViewportDetection.isSM() || ViewportDetection.isMD() || ViewportDetection.isLG());
    }
}