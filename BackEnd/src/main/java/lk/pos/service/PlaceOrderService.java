package lk.pos.service;


import lk.pos.dto.CustomDTO;
import lk.pos.dto.OrderDetailsDTO;
import lk.pos.dto.OrdersDTO;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;

/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
public interface PlaceOrderService {
    void placeOrder(@RequestBody OrdersDTO dto);
    ArrayList<OrdersDTO> LoadOrders();
    ArrayList<OrderDetailsDTO> LoadOrderDetails();
    @ResponseBody
    CustomDTO OrderIdGenerate();
    @ResponseBody
    CustomDTO getSumOrders();
}
