package lk.pos.service;

import lk.pos.dto.ItemDTO;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;

/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
public interface ItemService {
    void saveItem(@ModelAttribute ItemDTO dto);
    void updateItem(@RequestBody ItemDTO dto);
    void deleteItem(@RequestBody ItemDTO dto);
    ItemDTO searchItemCode(String code);
    ArrayList<ItemDTO> loadAllItem();
}
