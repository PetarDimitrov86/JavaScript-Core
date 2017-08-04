function startApp() {
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_rJwuExGwW";
    const kinveyAppSecret = "4b2f5b6386c34fbb89e1232fceecef5c";
    const kinveyAppAuthHeaders = { 'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret) };

    sessionStorage.clear();
    showHomeView();
    showHideMenuLinks();

    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }
    });

    $("#formLogin").submit(loginUser);
    $('#formRegister').submit(registerUser);
    $('#formCreateAd').submit(createAd);
    $('#formEditAd').submit(editAd);
    $("form").submit(function(e) { e.preventDefault() });

    $('#linkCreateAd').click(showCreateAdView);
    $('#linkHome').click(showHomeView);
    $('#linkListAds').click(listAds);
    $('#linkLogin').click(showLoginView);
    $('#linkLogout').click(logoutUser);
    $('#linkRegister').click(showRegisterView);

    function loginUser(){
        let username = $('#formLogin').find(`input[name=username]`).val();
        let password = $('#formLogin').find(`input[name=passwd]`).val();

        $.post({
            url:kinveyBaseUrl + `user/${kinveyAppKey}/login`,
            headers: kinveyAppAuthHeaders,
            data: { username, password },
            success: successLoginUser,
            error: handleAjaxError
        });

        function successLoginUser(userInfo) {
            saveUserInfoInSession(userInfo);
            showHideMenuLinks();
            listAds()
        }
    }

    function registerUser(){
        let username = $('#formRegister').find(`input[name=username]`).val();
        let password = $('#formRegister').find(`input[name=passwd]`).val();

        $.post({
            url: kinveyBaseUrl + `user/${kinveyAppKey}/`,
            headers: kinveyAppAuthHeaders,
            data: { username, password },
            success: successRegisterUser,
            error: handleAjaxError
        });

        function successRegisterUser(userInfo){
            saveUserInfoInSession(userInfo);
            showHideMenuLinks();
            showInfo('Registered User');
            listAds();
        }
    }

    function createAd(){
        let title = $('#formCreateAd').find(`input[name=title]`).val();
        let description = $('#formCreateAd').find(`textarea[name=description]`).val();
        let dateInfo = $('#formCreateAd').find(`input[name=datePublished]`).val().split('-');
        let publishDate = `${dateInfo[1]}/${dateInfo[2]}/${dateInfo[0]}`;
        let price = $('#formCreateAd').find(`input[name=price]`).val();
        let publisher = sessionStorage.getItem('username');

        $.post({
            headers: getKinveyUserAuthHeaders(),
            data: JSON.stringify({ title, description, publishDate, price, publisher }),
            contentType: 'application/json',
            url: kinveyBaseUrl + `appdata/${kinveyAppKey}/ads`,
            success: successCreateAd,
            error: handleAjaxError
        });

        function successCreateAd(){
            listAds();
        }
    }

    function editAd(){

    }

    function showCreateAdView(){
        showView('viewCreateAd');
    }

    function showHomeView(){
        showView('viewHome');
    }

    function listAds(){
        showView('viewAds');
        $.get({
            url: kinveyBaseUrl + `appdata/${kinveyAppKey}/ads`,
            headers: getKinveyUserAuthHeaders(),
            success: successListAds,
            error: handleAjaxError
        });

        function successListAds(data) {
            let tableData = $('#ads').find('table').find('tbody');
            tableData.empty();
            for (let ad of data) {
                tableData.append($('<tr>')
                    .append($('<td>').text(ad.title))
                    .append($('<td>').text(ad.publisher))
                    .append($('<td>').text(ad.description))
                    .append($('<td>').text(ad.price))
                    .append($('<td>').text(ad.publishDate))
                    .append($('<td>')))
            }
        }
    }

    function showLoginView(){
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView(){
        showView('viewRegister');
        $('#formRegister').trigger('reset');
    }

    function logoutUser(){
        sessionStorage.clear();
        showHideMenuLinks();
        $('#loggedInUser').text('');
    }

    function showView(viewName) {
        $('main>section').hide();
        $(`#${viewName}`).show();
    }


    function showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken')) {
            // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
            $('#loggedInUser').show();
        } else {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
            $('#loggedInUser').hide();
        }
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showInfo(message) {
        $('#infoBox').text(message).show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg).show();
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    function saveUserInfoInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);
        $('#loggedInUser').text("Welcome, " + userInfo.username + "!");
    }
}