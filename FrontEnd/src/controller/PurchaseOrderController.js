/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/

let baseUrlPlaceOrder = "http://localhost:8080/BackEnd_war/";

$("#btnPurchase").attr('disabled', true);
$("#btnAddToCart").attr('disabled', true);

/**
 * Invoice Details
 * */

/**
 * Invoice Details
 * Order ID
 * */
function generateOrderID() {
    $("#orderId").val("ODI-001");
    $.ajax({
        url: baseUrlPlaceOrder + "orders/OrderIdGenerate",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let orderId = resp.value;
            let tempId = parseInt(orderId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#orderId").val("ODI-00" + tempId);
            } else if (tempId <= 99) {
                $("#orderId").val("ODI-0" + tempId);
            } else {
                $("#orderId").val("ODI-" + tempId);
            }
        },
        error: function (ob, statusText, error) {

        }
    });
}
