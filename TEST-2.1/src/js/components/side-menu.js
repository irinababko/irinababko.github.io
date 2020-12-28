import $ from 'jquery';

const sideMenu = () => {
    $('.open').on('click', function () {
        $('.sidenav').addClass('sidenav__open');
        $('.main').addClass('main__open');
    });

    $('.sidenav__close').on('click', function () {
        $('.sidenav').removeClass('sidenav__open');
        $('.main').removeClass('main__open');
    });
}

export default sideMenu()