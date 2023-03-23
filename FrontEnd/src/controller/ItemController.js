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
