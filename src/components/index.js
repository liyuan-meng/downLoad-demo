import print from './print';
import printA4 from './printA4';
import download from './download';
import downloadImage from './downloadCanvas';
import downloadSvg from './downloadSvg';
import downloadAjax from './downloadAjax';

export default angular
    .module('lyComponents', [print, printA4, download, downloadImage, downloadSvg, downloadAjax])
    .name;
