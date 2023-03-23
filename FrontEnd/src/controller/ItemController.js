/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/

let baseUrlItem = "http://localhost:8080/BackEnd_war/";
loadAllItems();
/**
 * Item Save
 * */

$("#btnAddItem").attr('disabled', true);
$("#btnUpdateItem").attr('disabled', true);
$("#btnDeleteItem").attr('disabled', true);
/**
 * Item Save
 * Item ID
 * */
generateItemID();
function generateItemID() {
    $("#txtItemID").val("I00-001");
    $.ajax({
        url: baseUrlItem + "item/ItemIdGenerate",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let code = resp.value;
            let tempId = parseInt(code.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#txtItemID").val("I00-00" + tempId);
            } else if (tempId <= 99) {
                $("#txtItemID").val("I00-0" + tempId);
            } else {
                $("#txtItemID").val("I00-" + tempId);
            }
        },
        error: function (ob, statusText, error) {

        }
    });
}

/**
 * Button Add New Item
 * */
$("#btnAddItem").click(function () {
    let formData = $("#itemForm").serialize();
    $.ajax({
        url: baseUrlItem + "item",
        method: "post",
        data: formData,
        dataType: "json",
        success: function (res) {
            saveUpdateAlert("item", res.message);
            loadAllItems();
        },
        error: function (error) {
            unSuccessUpdateAlert("item", JSON.parse(error.responseText).message);
        }
    });
});

/**
 * clear input fields Values Method
 * */
function setTextFieldValues(code, description, qty, price) {
    $("#txtItemID").val(code);
    $("#txtItemName").val(description);
    $("#txtItemQty").val(qty);
    $("#txtItemPrice").val(price);
    $("#txtItemName").focus();
    checkValidity(ItemsValidations);
    $("#btnAddItem").attr('disabled', true);
    $("#btnUpdateItem").attr('disabled', true);
    $("#btnDeleteItem").attr('disabled', true);

}

/**
 * load all Item Method
 * */
function loadAllItems() {
    $("#ItemTable").empty();
    $.ajax({
        url: baseUrlItem + "item/loadAllItem",
        method: "GET",
        dataType: "json",
        success: function (res) {
            console.log(res);
            for (let i of res.data) {
                let code = i.code;
                let description = i.description;
                let qty = i.qty;
                let unitPrice = i.unitPrice;

                let row = "<tr><td>" + code + "</td><td>" + description + "</td><td>" + qty + "</td><td>" + unitPrice + "</td></tr>";
                $("#ItemTable").append(row);
            }
            blindClickEvents();
            generateItemID();
            setTextFieldValues("", "", "", "");
            console.log(res.message);
        },
        error: function (error) {
            let message = JSON.parse(error.responseText).message;
            console.log(message);
        }
    });
}

/**
 * Table Listener Click and Load textFields
 * */
function blindClickEvents() {
    $("#ItemTable>tr").on("click", function () {
        let code = $(this).children().eq(0).text();
        let description = $(this).children().eq(1).text();
        let qty = $(this).children().eq(2).text();
        let unitPrice = $(this).children().eq(3).text();
        console.log(code, description, qty, unitPrice);

        $("#txtItemID").val(code);
        $("#txtItemName").val(description);
        $("#txtItemQty").val(qty);
        $("#txtItemPrice").val(unitPrice);
    });
    $("#btnAddItem").attr('disabled', true);
}

