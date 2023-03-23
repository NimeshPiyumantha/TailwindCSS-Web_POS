/**
 * @project_Name : TailwindCSS-Web_POS
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 * @date : 3/22/2023
 * @time : 11:50 PM
 **/

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});

$(document).ready(function () {
    $("#HomeSection").css('display', 'block');
    $("#CustomerSection").css('display', 'none');
    $("#ItemSection").css('display', 'none');
    $("#OrderSection").css('display', 'none');
    $("#OrderDetails").css('display', 'none');
});

$("#homeBtn,.homeBtn").click(function () {
    $("#HomeSection").css('display', 'block');
    $("#CustomerSection").css('display', 'none');
    $("#ItemSection").css('display', 'none');
    $("#OrderSection").css('display', 'none');
    $("#OrderDetails").css('display', 'none');
});


$("#customerBtn,.customerBtn").click(function () {
    $("#HomeSection").css('display', 'none');
    $("#CustomerSection").css('display', 'block');
    $("#ItemSection").css('display', 'none');
    $("#OrderSection").css('display', 'none');
    $("#OrderDetails").css('display', 'none');
});

$("#itemBtn,.itemBtn").click(function () {
    $("#HomeSection").css('display', 'none');
    $("#CustomerSection").css('display', 'none');
    $("#ItemSection").css('display', 'block');
    $("#OrderSection").css('display', 'none');
    $("#OrderDetails").css('display', 'none');
});

let baseUrlDashboard = "http://localhost:8080/BackEnd_war/";
$("#txtCustomerCount").val("00");
$.ajax({
    url: baseUrl + "customer/CustomerCount",
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (resp) {
        let num = resp.count;
        $("#txtCustomerCount").text(num);

    },
    error: function (ob, statusText, error) {

    }
});