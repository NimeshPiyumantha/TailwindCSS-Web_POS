package lk.pos.service;

import lk.pos.dto.CustomDTO;
import lk.pos.dto.CustomerDTO;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;

/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
public interface CustomerService {
    void saveCustomer(@ModelAttribute CustomerDTO dto);
    void updateCustomer(@RequestBody CustomerDTO dto);
    void deleteCustomer(@RequestBody CustomerDTO dto);
    CustomerDTO searchCusId(String id);
    ArrayList<CustomerDTO> loadAllCustomer();
    @ResponseBody
    CustomDTO customerIdGenerate();
    @ResponseBody
    CustomDTO getSumCustomer();

}
