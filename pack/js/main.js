/***************************************************/
/******************  Коментарии  *******************/
/***************************************************/

/* Инициализация gallery-slider-1 в html */
/* Инициализация gallery-slider-2-1 в html */
/* Инициализация gallery-slider-2-2 в html */
/* Инициализация gallery-slider-3 в html */
/* Инициализация gallery-slider-4 в html */
/* Инициализация gallery-slider-5 в html */
/* Скорость автопрокрутки */
/* Скорость анимации */
/* Вкл/выкл точек (булетов) */
/* Вкл/выкл автопрокрутки */

/***************************************************/
/******************  Коментарии  *******************/
/***************************************************/

/* Включение главной функции jQuery */
$(document).ready(function(){
/* Инициализация gallery-slider-1 в html */
    $('.gallery-slider').slick({ 

        /* Настройки слайдера */
        arrows:true, /* Вкл/выкл стрелок вперед, назад */
        dots: true, /* Вкл/выкл точек (булетов) */
        adaptiveHeight: false, /* Вкл/выкл адаптивной высоты */
        autoplay: true, /* Вкл/выкл автопрокрутки */
        autoplaySpeed: 2500, /* Скорость автопрокрутки */  
        waitForAnimate: false, /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */
        appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
        easing: 'ease', /* Тип анимации */
        speed: 1000, /* Скорость анимации */
    });

    /* Запуск слайдера по клику на кнопку Play */
    $('.gallery-slider-play').click(function(event) {
        $('.gallery-slider').slick('slickPlay');
    });

     /* Остановка слайдера по клику на кнопку Stop */
    $('.gallery-slider-stop').click(function(event) {
        $('.gallery-slider').slick('slickPause');
    });
    /* Инициализация gallery-slider-1 в html-END */



/* Инициализация gallery-slider-2 в html */
    /* Инициализация gallery-slider-2-1 в html */
    $('.gallery-slider-2-1').slick({ 

        /* Настройки слайдера */
        arrows:false, /* Вкл/выкл стрелок вперед, назад */
        dots: false, /* Вкл/выкл точек (булетов) */
        adaptiveHeight: false, /* Вкл/выкл адаптивной высоты */
        autoplay: false, /* Вкл/выкл автопрокрутки */
        autoplaySpeed: 2500, /* Скорость автопрокрутки */  
        waitForAnimate: false, /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */
        appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
        easing: 'ease', /* Тип анимации */
        speed: 1000, /* Скорость анимации */
        slidesToShow: 1, /* колличество слайдов для показа */
        slidesToScroll: 1, /* колличество слайдов для скролла */
        asNavFor: '.gallery-slider-2-2', /* связка слайдеров */
    });
    /* Инициализация gallery-slider-2-1 в html-END */

 

    /* Инициализация gallery-slider-2-2 в html */
    $('.gallery-slider-2-2').slick({ 

        /* Настройки слайдера */
        arrows:false, /* Вкл/выкл стрелок вперед, назад */
        dots: false, /* Вкл/выкл точек (булетов) */
        adaptiveHeight: false, /* Вкл/выкл адаптивной высоты */
        autoplay: false, /* Вкл/выкл автопрокрутки */
        autoplaySpeed: 2500, /* Скорость автопрокрутки */  
        waitForAnimate: false, /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */
        appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
        easing: 'ease', /* Тип анимации */
        speed: 1000, /* Скорость анимации */
        slidesToShow: 5, /* колличество слайдов для показа */
        slidesToScroll: 1, /* колличество слайдов для скролла */
        asNavFor: '.gallery-slider-2-1', /* связка слайдеров */
        focusOnSelect: true, /* переключаться на выбранный слайд */
        variableWidth: false,
        centerMode: true, /* текущий слайд всегда по центру */
    });
/* Инициализация gallery-slider-2 в html-END */

/* Инициализация gallery-slider-3 в html */
    $('.gallery-slider-3').slick({ 

        /* Настройки слайдера */
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false, /* Вкл/выкл стрелок вперед, назад */
        dots: true, /* Вкл/выкл точек (булетов) */
        adaptiveHeight: false, /* Вкл/выкл адаптивной высоты */
        autoplay: false, /* Вкл/выкл автопрокрутки */
        autoplaySpeed: 2500, /* Скорость автопрокрутки */  
        waitForAnimate: false, /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */
        appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
        easing: 'ease', /* Тип анимации */
        speed: 1700, /* Скорость анимации */
        fade: false, /* Плавное растворение картинок */
    });
/* Инициализация gallery-slider-3 в html-END */

/* Инициализация gallery-slider-4 в html */
    $('.gallery-slider-4').slick({ 

        /* Настройки слайдера */
        arrows:false, /* Вкл/выкл стрелок вперед, назад */
        dots: false, /* Вкл/выкл точек (булетов) */
        adaptiveHeight: false, /* Вкл/выкл адаптивной высоты */
        autoplay: false, /* Вкл/выкл автопрокрутки */
        autoplaySpeed: 1500, /* Скорость автопрокрутки */  
        waitForAnimate: false, /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */
        // appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
        easing: 'ease', /* Тип анимации */
        speed: 1700, /* Скорость анимации */
        fade: true, /* Плавное растворение картинок */
    });
/* Инициализация gallery-slider-4 в html-END */

/* Инициализация gallery-slider-5-1 в html */
    $('.gallery-slider-5-1').slick({ 

        /* Настройки слайдера */
        arrows:false, /* Вкл/выкл стрелок вперед, назад */
        dots: false, /* Вкл/выкл точек (булетов) */
        adaptiveHeight: false, /* Вкл/выкл адаптивной высоты */
        autoplay: false, /* Вкл/выкл автопрокрутки */
        autoplaySpeed: 2500, /* Скорость автопрокрутки */  
        waitForAnimate: false, /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */
        // appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
        easing: 'ease', /* Тип анимации */
        speed: 1700, /* Скорость анимации */
        fade: true, /* Плавное растворение картинок */
    });

    /* Запуск и остановка слайдера по наведению мыши */    

    $(function(){
        var timeout;
        function nextSlide(){
        $('.gallery-slider-5-1').slick('slickNext');
        timeout = setTimeout(function(){
            nextSlide();
        },3000);
        }
        function stopAutoplay(timeout){
            window.clearTimeout(timeout);
        }
        $('.gallery-slider-5-1').on('mouseenter', function(){
            nextSlide();
        });

        $('.gallery-slider-5-1').mouseleave(function(event) {
            $('.gallery-slider-5-1').slick('slickPause');
            $('.gallery-slider-5-1').slick('goTo', 0);
            stopAutoplay(timeout);
        });
    });

/* Инициализация gallery-slider-5-1 в html-END */

/* Инициализация gallery-slider-5-2 в html */
    $('.gallery-slider-5-2').slick({ 

        /* Настройки слайдера */
        arrows:false, /* Вкл/выкл стрелок вперед, назад */
        dots: false, /* Вкл/выкл точек (булетов) */
        adaptiveHeight: false, /* Вкл/выкл адаптивной высоты */
        autoplay: false, /* Вкл/выкл автопрокрутки */
        autoplaySpeed: 1500, /* Скорость автопрокрутки */  
        waitForAnimate: false, /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */
        // appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
        easing: 'ease', /* Тип анимации */
        speed: 1700, /* Скорость анимации */
        fade: true, /* Плавное растворение картинок */
    });

    /* Запуск и остановка слайдера по наведению мыши */    

    $(function(){
        var timeout;
        function nextSlide(){
        $('.gallery-slider-5-2').slick('slickNext');
        timeout = setTimeout(function(){
            nextSlide();
        },3000);
        }
        function stopAutoplay(timeout){
            window.clearTimeout(timeout);
        }
        $('.gallery-slider-5-2').on('mouseenter', function(){
            nextSlide();
        });

        $('.gallery-slider-5-2').mouseleave(function(event) {
            $('.gallery-slider-5-2').slick('slickPause');
            $('.gallery-slider-5-2').slick('goTo', 0);
            stopAutoplay(timeout);
        });
    });

/* Инициализация gallery-slider-5-2 в html-END */

/* Инициализация gallery-slider-5-3 в html */
    $('.gallery-slider-5-3').slick({ 

        /* Настройки слайдера */
        arrows:false, /* Вкл/выкл стрелок вперед, назад */
        dots: false, /* Вкл/выкл точек (булетов) */
        adaptiveHeight: false, /* Вкл/выкл адаптивной высоты */
        autoplay: false, /* Вкл/выкл автопрокрутки */
        autoplaySpeed: 1500, /* Скорость автопрокрутки */  
        waitForAnimate: false, /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */
        // appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
        easing: 'ease', /* Тип анимации */
        speed: 1700, /* Скорость анимации */
        fade: true, /* Плавное растворение картинок */
    });

    /* Запуск и остановка слайдера по наведению мыши */    

    $(function(){
        var timeout;
        function nextSlide(){
        $('.gallery-slider-5-3').slick('slickNext');
        timeout = setTimeout(function(){
            nextSlide();
        },3000);
        }
        function stopAutoplay(timeout){
            window.clearTimeout(timeout);
        }
        $('.gallery-slider-5-3').on('mouseenter', function(){
            nextSlide();
        });

        $('.gallery-slider-5-3').mouseleave(function(event) {
            $('.gallery-slider-5-3').slick('slickPause');
            $('.gallery-slider-5-3').slick('goTo', 0);
            stopAutoplay(timeout);
        });
    });

/* Инициализация gallery-slider-5-3 в html-END */

/* Инициализация gallery-slider-5-4 в html */
    $('.gallery-slider-5-4').slick({ 

        /* Настройки слайдера */
        arrows:false, /* Вкл/выкл стрелок вперед, назад */
        dots: false, /* Вкл/выкл точек (булетов) */
        adaptiveHeight: false, /* Вкл/выкл адаптивной высоты */
        autoplay: false, /* Вкл/выкл автопрокрутки */
        autoplaySpeed: 1500, /* Скорость автопрокрутки */  
        waitForAnimate: false, /* Для пролистывания след. слайда, не нужно ждать завершение анимации предыдущегоэ */
        // appendArrows: $('.button-wrapper'), /* смена расположения стрелок */
        easing: 'ease', /* Тип анимации */
        speed: 1700, /* Скорость анимации */
        fade: true, /* Плавное растворение картинок */
    });

    /* Запуск и остановка слайдера по наведению мыши */    

    $(function(){
        var timeout;
        function nextSlide(){
        $('.gallery-slider-5-4').slick('slickNext');
        timeout = setTimeout(function(){
            nextSlide();
        },3000);
        }
        function stopAutoplay(timeout){
            window.clearTimeout(timeout);
        }
        $('.gallery-slider-5-4').on('mouseenter', function(){
            nextSlide();
        });

        $('.gallery-slider-5-4').mouseleave(function(event) {
            $('.gallery-slider-5-4').slick('slickPause');
            $('.gallery-slider-5-4').slick('goTo', 0);
            stopAutoplay(timeout);
        });
    });

/* Инициализация gallery-slider-5-4 в html-END */
});



(function (cjs, an) {
    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [];
    (lib.AnMovieClip = function(){
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function(positionOrLabel){
            cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
        }
        this.play = function(){
            cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function(positionOrLabel){
            cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
        }
        this.stop = function(){
            cjs.MovieClip.prototype.stop.call(this);
        }
    }).prototype = p = new cjs.MovieClip();
    // symbols:
    (lib.Анимация2 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
        // Слой_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#CC0033").ss(10,1,1).p("EAAAgkwMAAABJh");
        this.shape.setTransform(0,0.025);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        this._renderFirstFrame();
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5,-240.2,10,480.5);
    (lib.Анимация1 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
        // Слой_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#CC0033").ss(10,1,1).p("EAAAgkwMAAABJh");
        this.shape.setTransform(0,0.025);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        this._renderFirstFrame();
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5,-240.2,10,480.5);
    // stage content:
    (lib._0105_2 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
        // Слой_1
        this.instance = new lib.Анимация1("synched",0);
        this.instance.setTransform(49.9,313.7);
        this.instance_1 = new lib.Анимация2("synched",0);
        this.instance_1.setTransform(815.6,313.7);
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},89).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:815.6},89).wait(1));
        this._renderFirstFrame();
    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(524.9,393.5,295.70000000000005,160.5);
    // library properties:
    lib.properties = {
        id: 'E4541EC715754D759FDB926318DB5A13',
        width: 960,
        height: 640,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [],
        preloads: []
    };
    // bootstrap callback support:
    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();
    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
    p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if(!an.bootstrapListeners) {
        an.bootstrapListeners=[];
    }
    an.bootstrapCallback=function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if(an.bootcompsLoaded.length > 0) {
            for(var i=0; i<an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };
    an.compositions = an.compositions || {};
    an.compositions['E4541EC715754D759FDB926318DB5A13'] = {
        getStage: function() { return exportRoot.stage; },
        getLibrary: function() { return lib; },
        getSpriteSheet: function() { return ss; },
        getImages: function() { return img; }
    };
    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for(var j=0; j<an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }
    an.getComposition = function(id) {
        return an.compositions[id];
    }
    an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
        var lastW, lastH, lastS=1;		
        window.addEventListener('resize', resizeCanvas);		
        resizeCanvas();		
        function resizeCanvas() {			
            var w = lib.properties.width, h = lib.properties.height;			
            var iw = window.innerWidth, ih=window.innerHeight;			
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
            if(isResp) {                
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                    sRatio = lastS;                
                }				
                else if(!isScale) {					
                    if(iw<w || ih<h)						
                        sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==1) {					
                    sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==2) {					
                    sRatio = Math.max(xRatio, yRatio);				
                }			
            }
            domContainers[0].width = w * pRatio * sRatio;			
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function(container) {				
                container.style.width = w * sRatio + 'px';				
                container.style.height = h * sRatio + 'px';			
            });
            stage.scaleX = pRatio*sRatio;			
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;            
            stage.tickOnUpdate = false;            
            stage.update();            
            stage.tickOnUpdate = true;		
        }
    }
    an.handleSoundStreamOnTick = function(event) {
        if(!event.paused){
            var stageChild = stage.getChildAt(0);
            if(!stageChild.paused || stageChild.ignorePause){
                stageChild.syncStreamSounds();
            }
        }
    }
    })(createjs = createjs||{}, AdobeAn = AdobeAn||{});
    var createjs, AdobeAn;
    </script>
    <script>
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        var comp=AdobeAn.getComposition("E4541EC715754D759FDB926318DB5A13");
        var lib=comp.getLibrary();
        handleComplete({},comp);
    }
    function handleComplete(evt,comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib=comp.getLibrary();
        var ss=comp.getSpriteSheet();
        exportRoot = new lib._0105_2();
        stage = new lib.Stage(canvas);	
        //Registers the "tick" event listener.
        fnStartAnimation = function() {
            stage.addChild(exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener("tick", stage);
        }	    
        //Code to support hidpi screens and responsive scaling.
        AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }