import downloadFile from '../../utils/downloadFile';

const TYPE = 'png';

export default class DownloadController {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.draw();
    }

    draw() {
        if (this.canvas.getContext){
            const ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制
            ctx.moveTo(110,75);
            ctx.arc(75,75,35,0,Math.PI,false);   // 口(顺时针)
            ctx.moveTo(65,65);
            ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
            ctx.moveTo(95,65);
            ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
            ctx.stroke();
        }
    }

    download() {
        this.canvas.toBlob(blob => {
            downloadFile('test.jpg', window.URL.createObjectURL(blob));
        });
    }

    download1() {
        const imageData = this.canvas.toDataURL();
        downloadFile('test2.png',  imageData);
    }

    download2() {
        const imageData = this.canvas.toDataURL().replace('image/png','image/octet-stream');
        downloadFile('test2.png',  imageData);
    }
}
