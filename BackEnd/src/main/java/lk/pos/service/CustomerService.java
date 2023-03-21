package lk.pos.service;

import lk.pos.dto.CustomerDTO;
import org.springframework.web.bind.annotation.ModelAttribute;

/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
public interface CustomerService {
    void saveCustomer(@ModelAttribute CustomerDTO dto);

}
