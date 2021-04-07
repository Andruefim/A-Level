function addListener(type, handler) {
    const keyNames = type.split('+');
    const [firstKey, secondKey] = keyNames;
    document.addEventListener('keydown', function (event) {
        event.preventDefault();
        if (keyNames.length === 1 && event.key === firstKey) {
            handler(event);
        } else if (firstKey === 'Control' && event.key === secondKey && event.ctrlKey) {
            handler(event);
        }
    });
}
addListener('p', () => console.log('hello, world'));
addListener('Control+P', () => console.log('hello, world'));

