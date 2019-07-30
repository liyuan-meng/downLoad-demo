import setPageStyle from '../../utils/setPageStyle';

export default class Controller {
    constructor() {
        this.content = [
            {title: '高山娃娃菜', number: '× 1', price: '3.0'},
            {title: '鲜豆皮', number: '× 1', price: '3.0'},
            {title: '千页豆腐', number: '× 1', price: '3.0'},
            {title: '东北木耳', number: '× 1', price: '3.0'},
            {title: '鱼豆腐', number: '× 1', price: '3.0'},
            {title: '金针菇', number: '× 1', price: '3.0'}
        ];
    }

    $onInit() {
        const pageStyle = '@page { margin: 0mm; size: 80mm 160mm; }';
        this.destroy = setPageStyle(pageStyle);
    }

    $onDestroy() {
        this.destroy();
    }
}
