let closeCallBackBtn = document.getElementsByClassName('close-img-call-back'),
    callBackBtn = document.getElementsByClassName('call-back-btn'),
    callBackWindow = document.querySelector('.call-back-window');





callBackBtn[0].addEventListener('click', function () {
    callBackWindow.style.display = 'block';
})

closeCallBackBtn[0].addEventListener('click', function () {
    callBackWindow.style.display = 'none';
})


let banner = function () {

    let advertising = document.querySelector('.advertising'),
        closeAdvertising = document.querySelector('.close-advertising');

    advertising.style.display = 'block';

    closeAdvertising.addEventListener('click', function () {
        advertising.style.display = 'none';
    });
}

setTimeout(banner, 5000);