package lk.pos.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
@RestController
@CrossOrigin
@RequestMapping("/orders")
public class PlaceOrderController {

    @Autowired
    private PlaceOrderService service;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public ResponseUtil placeOrder(@RequestBody OrdersDTO dto) {
        service.placeOrder(dto);
        return new ResponseUtil("Ok", "Successfully Purchased.!", null);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @GetMapping(path = "/LoadOrders")
    public ResponseUtil LoadOrders() {
        return new ResponseUtil("OK", "Successfully Loaded. :", service.LoadOrders());
    }


    @ResponseStatus(HttpStatus.CREATED)
    @GetMapping(path = "/LoadOrderDetails")
    public ResponseUtil LoadOrderDetails() {
        return new ResponseUtil("OK", "Successfully Loaded. :", service.LoadOrderDetails());
    }

}