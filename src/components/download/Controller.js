import resolveDate from './resolveExportData';
import downloadFile from '../../utils/downloadFile';
import JSZip from 'jszip';

export default class DownloadController {
    constructor() {
        this.headersMapping = {
            name: '姓名',
            age: '年龄',
            mobile: '电话'
        };

        this.data = [
            { name: '张三', age: 21, mobile: '13122223839' },
            { name: '李四', age: 13, mobile: '13198739339' },
            { name: '王五', age: 23, mobile: '13198340239' },
            { name: '李雷', age: 42, mobile: '13198783839' },
            { name: '张梅梅', age: 5, mobile: '13198783839' },
            { name: '小明', age: 22, mobile: '13139083839' },
            { name: '小红', age: 13, mobile: '13198783839' },
            { name: '小绿', age: 11, mobile: '13198783839' }
        ];
    }

    exportByBlob() {
        const data = resolveDate(this.data, this.headersMapping);
        const url = window.URL.createObjectURL(new window.Blob([`\ufeff${data}`]));
        downloadFile('test.csv', url);
    }

    exportByDataUrls() {
        const data = resolveDate(this.data, this.headersMapping);
        downloadFile('test.csv', `data:'attachment/csv',\ufeff${encodeURIComponent(data)}`);
    }

    exportZip() {
        const jszip = new JSZip();
        const data = resolveDate(this.data, this.headersMapping);

        const currentDate = new Date();
        const dateWithOffset = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60 * 1000);

        jszip.file('test.csv', data, { date: dateWithOffset });
        jszip.generateAsync({ type: 'blob' }).then(data => {
            const url = window.URL.createObjectURL(new window.Blob([data]));
            downloadFile('test.zip', url);
        });
    }
}
