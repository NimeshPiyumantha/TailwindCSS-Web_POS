/**
 * @project_Name : TailwindCSS-Web_POS
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 * @date : 3/22/2023
 * @time : 11:51 PM
 **/

let baseUrlCustomer = "http://localhost:8080/BackEnd_war/";
$("#btnSaveCustomer").attr('disabled', true);
$("#btnUpdateCustomer").attr('disabled', true);
$("#btnDeleteCustomer").attr('disabled', true);
loadAllCustomer();

/**
 * Customer Save
 * Customer ID
 * */
function generateCustomerID() {
    $("#txtCusId").val("C00-001");
    $.ajax({
        url: baseUrlCustomer + "customer/CustomerIdGenerate",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let id = resp.value;
            console.log("id" +id);
            let tempId = parseInt(id.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#txtCusId").val("C00-00" + tempId);
            } else if (tempId <= 99) {
                $("#txtCusId").val("C00-0" + tempId);
            } else {
                $("#txtCusId").val("C00-" + tempId);
            }
        },
        error: function (ob, statusText, error) {

        }
    });
}


/**
 * Customer Save
 * */
$("#btnSaveCustomer").click(function () {
    let formData = $("#customerForm").serialize();
    console.log(formData);
    $.ajax({
        url: baseUrlCustomer + "customer", method: "post", data: formData, dataType: "json", success: function (res) {
            saveUpdateAlert("Customer", res.message);
            loadAllCustomer();
        }, error: function (error) {
            unSuccessUpdateAlert("Customer", JSON.parse(error.responseText).message);
        }
    });
});

/**
 * clear input fields Values Method
 * */
function setTextFieldValues(id, name, address, salary) {
    $("#txtCusId").val(id);
    $("#txtCusName").val(name);
    $("#txtCusAddress").val(address);
    $("#txtCustomerSalary").val(salary);
    $("#txtCusName").focus();
    checkValidity(customerValidations);
    $("#btnSaveCustomer").attr('disabled', true);
    $("#btnUpdateCustomer").attr('disabled', true);
    $("#btnDeleteCustomer").attr('disabled', true);
}

/**
 * load all customers Method
 * */
function loadAllCustomer() {
    $("#customerTable").empty();
    $.ajax({
        url: baseUrl + "customer/loadAllCustomer",
        method: "GET", dataType: "json", success: function (res) {
            console.log(res);

            for (let i of res.data) {
                let id = i.id;
                let name = i.name;
                let address = i.address;
                let salary = i.salary;

                let row = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + address + "</td><td>" + salary + "</td></tr>";
                $("#customerTable").append(row);
            }
            blindClickEvents();
            generateCustomerID();
            setTextFieldValues("", "", "", "");
            console.log(res.message);
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            console.log(message);
        }

    });
}
