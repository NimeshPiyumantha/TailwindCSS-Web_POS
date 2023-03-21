package lk.pos.service.impl;

import lk.pos.dto.CustomerDTO;
import lk.pos.entity.Customer;
import lk.pos.repo.CustomerRepo;
import lk.pos.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getId())) {
            throw new RuntimeException("Customer Already Exist. Please enter another id..!");
        }
        repo.save(mapper.map(dto, Customer.class));
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (!repo.existsById(dto.getId())) {
            throw new RuntimeException("Customer Not Exist. Please enter Valid id..!");
        }
        repo.save(mapper.map(dto, Customer.class));
    }

}
