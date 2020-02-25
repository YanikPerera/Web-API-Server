document.getElementById('clickBtn').addEventListener("click",function e() {
getDogPic();
});

function getDogPic() {
    $.ajax({
        method: "GET",
        url: "https://dog.ceo/api/breeds/image/random",
        dataType: "JSON"
    }).done(function (data) {
        console.log(data);

        $("#img").attr("src", data.message);
    }).fail(function (jqXHR, textStatus) {
        console.log(jqXHR);
        console.log(textStatus);
    });
}