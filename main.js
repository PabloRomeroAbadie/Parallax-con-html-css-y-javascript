window.onload = function () {
    window.addEventListener("scroll", (e) => {
        console.log(window.scrollY);
    })

    lax.init();
    lax.addDriver("scrollY",function () {
        return window.scrollY;
    });

    lax.addElements(".logo", {
        scrollY: {
            scale:[
                [0, 80],
                [1,3]
            ],
            opacity:[
                [0, 70],
                [1, 0]
            ],
            translateY:[
                [0, 80],
                [0, 200]
            ]
        }
    })

    lax.addElements(".ultron", {
        scrollY: {
         
            opacity:[
                [0, 60],
                [0, 1]
            ],
            translateY:[
                [0, 400],
                [0, 80]
            ]
        }
    })
    lax.addElements(".loki", {
        scrollY: {
         
            opacity:[
                [20, 100],
                [0, 1]
            ],
            translateY:[
                [0, 400],
                [0, -80]
            ]
        }
    })
    lax.addElements(".thanos", {
        scrollY: {
         
            opacity:[
                [60, 140],
                [0, 1]
            ],
            translateY:[
                [0, 400],
                [0, 80]
            ]
        }
    })

    lax.addElements(".scroll-tip", {
        scrollY: {
         
            opacity:[
                [0, 600],
                [1, 0]
            ],
            translateY:[
                [0, 800],
                [-100, 0]
            ],
            "letter-spacing": [
                [0, 600],
                [0,150],{
                    cssUnit: "px",
                }
            ] 
        }
    })


    lax.addElements(".ironman-title", {
        scrollY: {
            filter:[
                [400,500,600,700,800,900,1000],
                [0, 50, 0, 50, 0, 50, 0],{
                    cssFn: function(value){
                        return `drop-shadow(0 0 ${value}px yellow)`
                    }
                }
            ],
            translateY: [
                [850, 1350],
                [200, 1000]
            ]
        },
    })

    lax.addElements(".ironman-01", {
        scrollY: { 
            translateY: [
                [1400, 1700],
                [238, -838]
            ]
        },
    });

    lax.addElements(".ironman-02", {
        scrollY: { 
            scale: [
                [1700, 2200], 
                [0, 2]
            ],
            translateX:[
            [1750, 1950,2450],
            [0,300,0]
            ],
            translateY:[
            [1750, 1950,2450],
            [-200,0,-400]
            ]
        },
    });

}