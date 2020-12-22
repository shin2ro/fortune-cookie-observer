(() => {
    const targetNode = document.querySelector('div#commentsText');
    const config = { childList: true };
    const callback = (mutationList, observer) => {
        const node = mutationList[0].addedNodes[0];
        if (node.nodeName === 'SPAN' && node.className === 'fortune') {
            PlaySound('snd/fortune.mp3');
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
})();

