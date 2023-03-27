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

/**
 * Invoice Details
 * Customer Select Combo
 * */
$("#cmbCustomerId").empty();
$.ajax({
    url: baseUrlPlaceOrder + "customer/loadAllCustomer",
    method: "GET",
    dataType: "json",
    success: function (res) {
        console.log(res);
        setDates();

        for (let i of res.data) {
            let id = i.id;

            $("#cmbCustomerId").append(`<option>${id}</option>`);
        }
        generateOrderID();
        console.log(res.message);
    },
    error: function (error) {
        let message = JSON.parse(error.responseText).message;
        console.log(message);
    }

});

/** Customer cmb Search */
$("#cmbCustomerId").click(function () {
    var search = $("#cmbCustomerId").val();
    $.ajax({
        url: baseUrlPlaceOrder + "customer/searchCusId/?id="+ search,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            console.log(res);
            $("#customerName").val(res.name);
            $("#customerAddress").val(res.address);
            $("#customerSalary").val(res.salary);
        },
        error: function (error) {
            let message = JSON.parse(error.responseText).message;
            console.log(message);
        }
    })

});

/**
 * Items Details
 * Item Select Combo
 * */
$("#cmbItemCode").empty();
$.ajax({
    url: baseUrlPlaceOrder + "item/loadAllItem",
    method: "GET",
    dataType: "json",
    success: function (res) {
        console.log(res);
        for (let i of res.data) {
            let code = i.code;

            $("#cmbItemCode").append(`<option>${code}</option>`);
        }
        console.log(res.message);
    },
    error: function (error) {
        let message = JSON.parse(error.responseText).message;
        console.log(message);
    }
});

$("#cmbItemCode").click(function () {
    var search = $("#cmbItemCode").val();
    $.ajax({
        url: baseUrlPlaceOrder + "item/searchItemCode/?code="+ search,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            console.log(res);
            $("#itemName").val(res.description);
            $("#itemPrice").val(res.unitPrice);
            $("#qtyOnHand").val(res.qty);
        },
        error: function (error) {
            let message = JSON.parse(error.responseText).message;
            console.log(message);
        }
    })
});

/**
 * Items Details
 * */

let itemCode;
let itemName;
let itemPrice;
let itemQty;
let itemOrderQty;

/**
 * Order Details
 * */
let total = 0;
let discount = 0;
let subTotal = 0;

