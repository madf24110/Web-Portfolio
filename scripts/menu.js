document.getElementById("open").addEventListener("click", open);
document.getElementById("close").addEventListener("click", close);
function open() {
    document.getElementById('content').style.display = 'block';
    document.getElementById('open').style.display = 'none';
    document.getElementById('close').style.display = 'block';
}
function close() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('open').style.display = 'block';
    document.getElementById('close').style.display = 'none';
}
