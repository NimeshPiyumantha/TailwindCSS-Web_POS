package lk.pos.repo;


import lk.pos.entity.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
public interface OrderDetailsRepo extends JpaRepository<OrderDetails, String> {
}
