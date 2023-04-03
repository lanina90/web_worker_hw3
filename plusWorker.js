onmessage = function(e) {
    let result = parseInt(e.data[0] + e.data[1]);
    console.log(result);
    postMessage(result);
}
