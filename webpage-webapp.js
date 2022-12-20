class App {
    static close() {
        window.top.postMessage('closeWebpage', '*');
    }
}
