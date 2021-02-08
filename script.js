const { spring, tween, easing, styler, value } = popmotion;

//state
let isArrowMorphing = false;
let maxContHeight = 350;
let isDrawerOpening = false;
let isDrawerOpen = false;
//config
const conf = {
    imagesPerRow: 15,
    xMargin: 5,
    yMargin: 5,
}

document.addEventListener("DOMContentLoaded", () => {
    //elements
    const arrowCont = document.querySelector("#arrow_path");
    const arrow = document.querySelector("#arrow_angle");
    const picCont = document.querySelector(".inner_wrapper");
    const allImages = [...document.querySelectorAll(".pic")];
    //global data
    const w = window.innerWidth || document.documentElement.clientWidth;
    //styled elements
    const sArrowCont = styler(arrowCont);
    const sArrow = styler(arrow);
    const sPicCont = styler(picCont);
    //logic
    const arrowCurve = value([30,20]);
    const arrowTranslation = value(-4);
    const arrowRotate = value(0);

    arrowCurve.subscribe(() => {
        const [a, b] = arrowCurve.get();
        sArrowCont.set('d', `M 0 50 C ${a} ${b}, ${100-a} ${b}, 100 50`);
    });
    arrowTranslation.subscribe(() => {
        sArrow.set('y', arrowTranslation.get());
    });
    arrowRotate.subscribe(() => {
        sArrow.set('rotateX', `${arrowRotate.get()}deg`);
    });
    //event bindings
    arrowCont.addEventListener('mouseenter', () => {
        isArrowMorphing = true;
        spring({
            from: arrowCurve.get(),
            to: [40, 5]
        })
        .while(_ => isArrowMorphing)
        .start(arrowCurve);
        spring({
            from: arrowTranslation.get(),
            to: -18
        })
        .while(_ => isArrowMorphing)
        .start(arrowTranslation);
    });
    arrowCont.addEventListener('mouseleave', () => {
        isArrowMorphing = false;
        spring({
            from: arrowCurve.get(),
            to: [30,20]
        })
        .while(_ => !isArrowMorphing)
        .start(arrowCurve)
        spring({
            from: arrowTranslation.get(),
            to: -4
        })
        .while(_ => !isArrowMorphing)
        .start(arrowTranslation);
    });
    //order images
    const imgW = (w / conf.imagesPerRow) - (conf.xMargin*2) - 1.5;
    allImages.forEach(div => {
        div.style.width = `${imgW}px`;
        div.style.height = `${imgW}px`;
        div.style.marginTop = `${conf.yMargin}px`;
        div.style.marginBottom = `${conf.yMargin}px`;
        div.style.marginLeft = `${conf.xMargin}px`;
        div.style.marginRight = `${conf.xMargin}px`;
        div.style.backgroundImage = `url("${div.dataset.img}")`;
    });
    arrowCont.addEventListener('click', () => {
        if (!isDrawerOpen) {
            isDrawerOpening = true;
            isDrawerOpen = true;
            spring({
                from: parseInt(sPicCont.get('height')),
                to: maxContHeight
            })
            .while(_ => isDrawerOpening)
            .start(v => sPicCont.set('height', `${v}px`));
            tween({
                from: arrowRotate.get(),
                to: 180,
                duration: 300,
                ease: easing.backOut
            })
            .while(_ => isDrawerOpen)
            .start(arrowRotate);
        } else {
            isDrawerOpen = false;
            isDrawerOpening = false;
            tween({
                from: parseInt(sPicCont.get('height')),
                to: 0,
                duration: 500,
                ease: easing.ease
            })
            .while(_ => !isDrawerOpening)
            .start(v => sPicCont.set('height', `${v}px`));
            tween({
                from: arrowRotate.get(),
                to: 0,
                duration: 300,
                ease: easing.backOut
            })
            .while(_ => !isDrawerOpen)
            .start(arrowRotate);
        }
    });
});
