window.onload = () => {
    let c = document.getElementById("cnv")
    let w = c.width = window.innerWidth;
    let h = c.height = window.innerHeight;
    let ctx = c.getContext("2d");
    let color = 0,particles = [], touches = []
    const randomNumber = (max,min) => Math.floor(Math.random() * (max-min)+min)
    class Particle {
      constructor(x, y , clr) {
        this.x = x;
        this.y = y;
        this.xv = randomNumber(5,-5)
        this.yv = randomNumber(5,-5)
        this.shadowx = randomNumber(32,-32)
        this.shadowy = randomNumber(32,-32)
        this.color = "hsl(" +clr+ ",100%,50%)"
        this.radius = 40
        this.angle = 0
        this.av = .1
      }
      draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.shadowColor = this.color
        ctx.shadowBlur = 40
        ctx.shadowOffsetX = this.shadowx 
        ctx.shadowOffsetY = this.shadowy 
        ctx.arc(this.x, this.y, this.radius,0,2*Math.PI);
        ctx.fill()
      }
      update(){
        this.x += (Math.sin(this.angle)*7)/2;
        this.y += (Math.cos(this.angle)*7)/2;
        this.angle += this.av
        this.shadowx += this.xv/1.2
        this.shadowy += this.yv/1.2
        this.radius -= .5
        if(this.radius < 0) this.radius = 0
      }
    }
    const m = { xp: 0,yp: 0 }
    c.ontouchmove = e => {
        function _0x3b7b(){const _0x25cc57=['4303456LbTezm','2299300dqgtVN','length','11733ersmaG','60929VuGdcX','splice','339656xVoWvv','clientY','1590GxHIRi','158MOrSYK','12WAmjaf','12411tjPlIA','666085RVkExT'];_0x3b7b=function(){return _0x25cc57;};return _0x3b7b();}const _0x5de693=_0x57f5;(function(_0xcb05f8,_0x2c299a){const _0x322474=_0x57f5,_0x4699b0=_0xcb05f8();while(!![]){try{const _0x5c5bce=-parseInt(_0x322474(0xcb))/0x1+-parseInt(_0x322474(0xd0))/0x2*(-parseInt(_0x322474(0xca))/0x3)+parseInt(_0x322474(0xcd))/0x4+-parseInt(_0x322474(0xc8))/0x5+parseInt(_0x322474(0xd1))/0x6*(parseInt(_0x322474(0xd3))/0x7)+parseInt(_0x322474(0xd4))/0x8+parseInt(_0x322474(0xd2))/0x9*(-parseInt(_0x322474(0xcf))/0xa);if(_0x5c5bce===_0x2c299a)break;else _0x4699b0['push'](_0x4699b0['shift']());}catch(_0x28d009){_0x4699b0['push'](_0x4699b0['shift']());}}}(_0x3b7b,0x5d47b));let touch=e['changedTouches'];function _0x57f5(_0x50c9cb,_0x3796eb){const _0x3b7ba5=_0x3b7b();return _0x57f5=function(_0x57f5e0,_0x2ff7c3){_0x57f5e0=_0x57f5e0-0xc8;let _0x961f7f=_0x3b7ba5[_0x57f5e0];return _0x961f7f;},_0x57f5(_0x50c9cb,_0x3796eb);}for(let i=0x0;i<touch['length'];i++){touches['push'](touch[i]),m['xp']=touch[i]['clientX'],m['yp']=touch[i][_0x5de693(0xce)];if(touches[_0x5de693(0xc9)]>0xa)touches[_0x5de693(0xcc)](i,0x1);createparticles();}
    }
    const createparticles = () =>{
        color+=3
        particles.push(new Particle(m.xp,m.yp,color))
    }
    c.ontouchstart = e => {
        const _0x32f8bb=_0x33b9;function _0x33b9(_0x3d6dc2,_0x525af2){const _0x34f664=_0x34f6();return _0x33b9=function(_0x33b90a,_0x28fe13){_0x33b90a=_0x33b90a-0x1a9;let _0x469800=_0x34f664[_0x33b90a];return _0x469800;},_0x33b9(_0x3d6dc2,_0x525af2);}function _0x34f6(){const _0x31e8d5=['3OGmkPm','6xmEUYd','99960UwibuN','changedTouches','2135553CjKIch','1377555BWmSej','251154dHRVnf','1144904evMIlh','2322xczKDA','37780fFMCvw','265918xyuyWV'];_0x34f6=function(){return _0x31e8d5;};return _0x34f6();}(function(_0x5f5a62,_0x2d39eb){const _0xd4e2af=_0x33b9,_0x29cabe=_0x5f5a62();while(!![]){try{const _0x1f7037=-parseInt(_0xd4e2af(0x1ae))/0x1+parseInt(_0xd4e2af(0x1b2))/0x2*(parseInt(_0xd4e2af(0x1b3))/0x3)+parseInt(_0xd4e2af(0x1aa))/0x4+-parseInt(_0xd4e2af(0x1ad))/0x5*(parseInt(_0xd4e2af(0x1a9))/0x6)+-parseInt(_0xd4e2af(0x1ac))/0x7+-parseInt(_0xd4e2af(0x1af))/0x8+parseInt(_0xd4e2af(0x1b0))/0x9*(parseInt(_0xd4e2af(0x1b1))/0xa);if(_0x1f7037===_0x2d39eb)break;else _0x29cabe['push'](_0x29cabe['shift']());}catch(_0x41a92b){_0x29cabe['push'](_0x29cabe['shift']());}}}(_0x34f6,0x26878));let touch=e[_0x32f8bb(0x1ab)];for(let i=0x0;i<touch['length'];i++){touches['push'](touch[i]),m['xp']=touch[i]['clientX'],m['yp']=touch[i]['clientY'],createparticles();}
    }
    const animate = () =>{
        requestAnimationFrame(animate)
        ctx.globalAlpha = .8
        ctx.fillStyle = "black";             
        ctx.fillRect(0, 0, w, h)
        ctx.globalAlpha = 1
        for (let i = 0; i < particles.length; ++i) {
            particles[i].draw()
            particles[i].update()
            if(particles.length > 100) particles.splice(i,1)
        }
    }
    animate()
    }