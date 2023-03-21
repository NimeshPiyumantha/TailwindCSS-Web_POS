package lk.pos.repo;


import lk.pos.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
public interface CustomerRepo extends JpaRepository<Customer, String> {

}
