window.addEventListener('scroll', e=> {
document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScroollTrigger, ScroollSmoother)
ScroollSmoother.create({
wrapper: '.wrapper',
content: '.content'
})