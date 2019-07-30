import downloadFile from '../../utils/downloadFile';

const TYPE = 'png';

export default class DownloadController {
    constructor() {
    }

    download() {
        const svgXml = document.querySelector('.svg-wrap').innerHTML;

        const image = new Image();
        image.src = 'data:image/svg+xml;base64,' + window.btoa(encodeURIComponent(svgXml)); //给图片对象写入base64编码的svg流
        console.log('image', image);

        const canvas = document.createElement('canvas');  //准备空画布
        canvas.width = document.querySelector('.svg-wrap svg').width;
        canvas.height = document.querySelector('.svg-wrap svg').height;
        console.log('canvas', canvas);

        const context = canvas.getContext('2d');  //取得画布的2d绘图上下文
        context.drawImage(image, 0, 0);
        console.log('context', context);

        downloadFile('test2.png',  canvas.toDataURL(), true);
        console.log(canvas.toDataURL());
    }
}
