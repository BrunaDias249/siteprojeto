document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded');
    window.fbAsyncInit = function() {
        FB.init({
            xfbml: true,
            version: 'v13.0'
        });
        console.log('Facebook SDK loaded');
    };
});
