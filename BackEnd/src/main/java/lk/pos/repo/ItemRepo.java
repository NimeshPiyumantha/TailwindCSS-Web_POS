package lk.pos.repo;


import lk.pos.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
public interface ItemRepo extends JpaRepository<Item, String> {

}
