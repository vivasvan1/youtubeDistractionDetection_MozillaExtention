function get_youtube(url) {

    var a = "http://www.youtube.com/oembed?url=" + url + "&format=json";
    alert(a);
    $.getJSON(a, function (data) {
        alert(data);
    })
    alert("khatam!");

}

function datadownloader(mu_url){

    var b = "https://www.googleapis.com/youtube/v3/videos?id=" + my_url.split("v=")[1].split("&")[0] + "&key=AIzaSyDY8Q9kEFGqefYC6T8AA8T1v9uLsEZ05mw&part=snippet,contentDetails,statistics,status"

    function downloadObjectAsJson(exportObj, exportName) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    var jqxhr = $.getJSON(b, function (data) {
            // console.log("success");
            // console.log("asdf");
            // console.log(data.items[0].snippet.title);
            // my_list.push(data.items[0].snippet.title);
            var person = prompt("Please enter your name:", "Harry Potter");
            downloadObjectAsJson(data, person);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {});
}

function getURL() {

    var my_url = window.location.href;
    // get_youtube(my_url);
    // alert(my_url.split("v=")[1]);
    // console.log(window.document.getElementsByClassName("content content-line-height-override style-scope ytd-metadata-row-renderer"))

    // var a = "http://www.youtube.com/oembed?url=" + my_url + "&format=json";
    // var dynamicUrl = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    // console.log($.getJSON);
    
    datadownloader(my_url);

    function handleUpdated(tabId, changeInfo, tabInfo) {
        if (changeInfo.url) {
            console.log("Tab: " + tabId +
                " URL changed to " + changeInfo.url);
        }
    }

    browser.tabs.onUpdated.addListener(handleUpdated);
    // }
    // console.log(my_list);
    // var jqxhr = $.getJSON(b, function (data) {
    //         console.log("success");
    //         console.log(data);
    //     })
    //     .done(function () {
    //         console.log("second success");
    //     })
    //     .fail(function () {
    //         console.log("error");
    //     })
    //     .always(function () {
    //         console.log("complete");
    //     });
    // https://www.googleapis.com/youtube/v3/guideCategories?key=[YOUR_API_KEY]
    // console.log(jqxhr);
    // alert(my_url);

}
getURL()