/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/

let baseUrlOrderDetails = "http://localhost:8080/BackEnd_war/";
loadAllOrders();


function loadAllOrders() {
    $("#tblOrder").empty();
    $.ajax({
        url: baseUrlOrderDetails + "orders/LoadOrders", method: "GET", dataType: "json", success: function (res) {
            console.log(res);

            for (let i of res.data) {
                let oid = i.oid;
                let date = i.date;
                let cusID = i.cusID;

                let row = "<tr><td>" + oid + "</td><td>" + date + "</td><td>" + cusID + "</td></tr>";
                $("#tblOrder").append(row);
            }
            console.log(res.message);
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            console.log(message);
        }

    });
}

