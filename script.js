const { spring, tween, easing, styler, value, pointer, listen } = popmotion;

//state
let isArrowMorphing = false;
let maxContHeight = 350;
let isDrawerOpening = false;
let isDrawerOpen = false;
let imagesWithIndexes = [];
let isDragging = false;
let draggingState = {
    element: null,
    tr: null
};
let isHoveringDropzone = false;
let hoveredDropzone = null;
let blockDrag = false;
let imgWidth = 0;
//config
const conf = {
    imagesPerRow: 15,
    xMargin: 5,
    yMargin: 5,
    removeElementAfterDrag: true,
}
document.addEventListener("DOMContentLoaded", () => {
    calculateWidth();
    window.addEventListener("resize", () => {
        calculateWidth();
        distributeImages();
        calculateOffsets();
    });
    //elements
    const arrowCont = document.querySelector("#arrow_path");
    const arrow = document.querySelector("#arrow_angle");
    const picCont = document.querySelector(".inner_wrapper");
    const allImages = [...document.querySelectorAll(".pic")];
    const dropzones = [...document.querySelectorAll(".dropzone_cont")];
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
    allImages.forEach((div, idx) => {
        imagesWithIndexes.push({
            index: idx,
            element: div,
            sElement: styler(div),
            originalX: 0,
            originalY: 0,
        });
    });
    distributeImages();
    calculateOffsets();
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
    //make images draggable
    imagesWithIndexes.forEach(div => {
        let img = div.element;
        listen(img, "mousedown touchstart").start(e => {
            if (!blockDrag) {
                e.preventDefault();
                isDragging = true;
                enableOverflow();
                draggingState = {
                    element: img,
                    tr: value({
                        x: div.sElement.get('x'),
                        y: div.sElement.get('y'),
                    }, div.sElement.set),
                };
                pointer(draggingState.tr.get()).start(draggingState.tr);
            }
        });
        listen(img, "mouseup touchend").start(e => {
            e.preventDefault();
            isDragging = false;
            draggingState.tr.stop();
            blockDrag = true;
            if (isHoveringDropzone) {
                if (conf.removeElementAfterDrag) {
                    removeOne(div.index);
                    calculateOffsets();
                    let removed = img.parentNode.removeChild(img);
                    hoveredDropzone.querySelector("img").src = removed.dataset.img;
                    reset();
                } else {
                    dragBack(div);
                }
            } else {
                dragBack(div);
            }
        });
    });
    //bind events to dropzone
    dropzones.forEach(drp => {
        //enter in the box dragging
        document.addEventListener('mousemove', evt => {
            if (isDragging) {
                //get dropzone position
                const pos = drp.getBoundingClientRect();
                const {pageX: mouseX, pageY: mouseY} = evt;
                if (isInside(pos.x, pos.y, mouseX, mouseY, pos.width, pos.height)) {
                    showDropVals(drp);
                }
            }
        });
        //exit from the box dragging
        document.addEventListener("mousemove", evt => {
            if (isDragging && isHoveringDropzone) {
                //get dropzone position
                const pos = drp.getBoundingClientRect();
                const {pageX: mouseX, pageY: mouseY} = evt;
                if (!isInside(pos.x, pos.y, mouseX, mouseY, pos.width, pos.height)) {
                    hideDropVals();
                }
            }
        });
        document.addEventListener("mouseup", evt => {
            if (isHoveringDropzone) {
                const pos = drp.getBoundingClientRect();
                const {pageX: mouseX, pageY: mouseY} = evt;
                if (isInside(pos.x, pos.y, mouseX, mouseY, pos.width, pos.height)) {
                    hoveredDropzone.querySelector("img").src = draggingState.element.dataset.img;
                    hideDropVals();
                }
            }
        });
    });
});
function calculateOffsets() {
    let rownum = Math.ceil(imagesWithIndexes.length / conf.imagesPerRow);
    document.querySelector(".pic_cont").style.height = `${(rownum * imgWidth) + (rownum * conf.yMargin * 2)}px`;
    imagesWithIndexes.forEach((el, i) => {
        let row = Math.floor(i / conf.imagesPerRow);
        let leftMultiplier = i % conf.imagesPerRow;
        const x = (leftMultiplier * imgWidth) + (conf.xMargin * (leftMultiplier + 1));
        const y = (row * imgWidth) + (conf.yMargin * (row + 1));
        el.originalX = x;
        el.originalY = y;
        spring({
            from: [el.sElement.get('x'), el.sElement.get('y')],
            to: [x, y],
        }).start(v => el.sElement.set({ x: v[0], y: v[1] }));
    });
}
function removeOne(idx) {
    imagesWithIndexes = imagesWithIndexes
        .filter(el => el.index !== idx)
}
function enableOverflow() {
    document.querySelector(".ov").style.overflowY = "visible";
    document.querySelector(".inner_wrapper").style.overflow = "visible";
}
function disableOverflow() {
    document.querySelector(".ov").style.overflowY = "scroll";
    document.querySelector(".inner_wrapper").style.overflow = "hidden";
}
function isInside(x, y, mouseX, mouseY, w, h) {
    return mouseX >= x && mouseY >= y && mouseX <= (x + w) && mouseY <= (y + h);
}
function showDropVals(drp) {
    isHoveringDropzone = true;
    hoveredDropzone = drp;
    const rect = hoveredDropzone.querySelector(".anim_border");
    const text = hoveredDropzone.querySelector(".dropzone_text");
    const sRect = styler(rect);
    tween({
        from: parseInt(sRect.get('strokeDashoffset')),
        to: 0,
        duration: 2000,
        ease: easing.ease,
    })
    .while(_ => isHoveringDropzone)
    .start(v => sRect.set({ strokeDashoffset: v }));
    tween({
        from: parseInt(text.style.opacity) || 0,
        to: 1,
        duration: 200,
        ease: easing.easeIn
    })
    .while(_ => isHoveringDropzone)
    .start(v => text.style.opacity = `${v}`);
}
function hideDropVals() {
    isHoveringDropzone = false;
    const rect = hoveredDropzone.querySelector(".anim_border");
    const text = hoveredDropzone.querySelector(".dropzone_text");
    const sRect = styler(rect);
    tween({
        from: parseInt(sRect.get('strokeDashoffset')),
        to: 1000,
        duration: 500,
        ease: easing.ease,
    })
    .while(_ => !isHoveringDropzone)
    .start(v => sRect.set({ strokeDashoffset: v }));
    tween({
        from: parseInt(text.style.opacity) || 1,
        to: 0,
        duration: 200,
        ease: easing.easeIn,
    })
    .while(_ => !isHoveringDropzone)
    .start(v => text.style.opacity = `${v}`);
    hoveredDropzone = null;
}
function dragBack(div) {
    spring({
        from: [draggingState.tr.get().x, draggingState.tr.get().y],
        to: [div.originalX, div.originalY],
    })
    .start({
        update: v => {
            blockDrag = true;
            div.sElement.set({ x: v[0], y: v[1] });
        },
        complete: reset,
    });
}
function reset() {
    disableOverflow();
    isDragging = false;
    hoveredDropzone = null;
    isHoveringDropzone = false;
    draggingState = {
        element: null,
        tr: null,
    };
    blockDrag = false;
}
function calculateWidth() {
    const w = window.innerWidth || document.documentElement.clientWidth;
    imgWidth = (w / conf.imagesPerRow) - (conf.xMargin*2);
}
function distributeImages() {
    imagesWithIndexes.forEach(el => {
        el.element.style.width = `${imgWidth}px`;
        el.element.style.height = `${imgWidth}px`;
        el.element.style.backgroundImage = `url("${el.element.dataset.img}")`;
    });
}