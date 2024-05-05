const NavbarScroll = () => window.addEventListener('scroll', function(){
    const mainHead = document.querySelector( '.header' )

    if(this.scrollY > 200){
        mainHead.classList.add( 'slidedown' )
    } else {
        mainHead.classList.remove( 'slidedown' )
    }
})

export default NavbarScroll;