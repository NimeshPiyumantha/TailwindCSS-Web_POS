package lk.pos.service;


import lk.pos.dto.OrdersDTO;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
public interface PlaceOrderService {
    void placeOrder(@RequestBody OrdersDTO dto);

}
