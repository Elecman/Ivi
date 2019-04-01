var animateDiamond = (function () {
    var wrapper = document.querySelector('.container'),
        diamond = document.querySelector('.diamond__inner'),
        timer = document.querySelector('.diamond__timer'),
        startCount = null;

    function mouseHover() {
        diamond.addEventListener('mouseover', (e) => {
            wrapper.classList.add('diamond__active');
        });
    }

    function mouseOut() {
        diamond.addEventListener('mouseout', (e) => {
            wrapper.classList.remove('diamond__active');
        });
    }

    function addCount() {
        var count = 1;

        if (startCount) {
            clearInterval(startCount);
        }

        startCount = setInterval(function () {
            if (count >= 4) {
                clearInterval(startCount);
                timer.innerHTML = "Go!"
            } else {
                timer.innerHTML = count++;
            }
        }, 1000);
    }

    function mouseClick() {
        diamond.addEventListener('click', function () {
            addCount();
        });
    }

    function windowResize() {
        window.addEventListener('resize', function () {
            if (window.innerWidth === 1024 ||
                window.innerWidth === 768 ||
                window.innerWidth === 320) {

                diamond.click();
            }
        })
    }

    return {
        MouseHover: mouseHover,
        MouseOut: mouseOut,
        MouseClick: mouseClick,
        Resize: windowResize
    };
})();

animateDiamond.MouseOut();
animateDiamond.MouseHover();
animateDiamond.MouseClick();
animateDiamond.Resize();