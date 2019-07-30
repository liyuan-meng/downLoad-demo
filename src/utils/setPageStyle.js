export default function (style) {
    const el = document.createElement('style');
    el.type = 'text/css';
    el.appendChild(document.createTextNode(style));
    document.head.appendChild(el);
    return function () {
        document.head.removeChild(el);
    }
}
