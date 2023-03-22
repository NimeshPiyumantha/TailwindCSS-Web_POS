package lk.pos.service.impl;

import lk.pos.dto.ItemDTO;
import lk.pos.entity.Item;
import lk.pos.repo.ItemRepo;
import lk.pos.service.ItemService;
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
public class ItemServiceImpl implements ItemService {
    @Autowired
    private ItemRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveItem(ItemDTO dto) {
        if (repo.existsById(dto.getCode())) {
            throw new RuntimeException("Item Already Exist. Please enter another id..!");
        }
        repo.save(mapper.map(dto, Item.class));
    }

    @Override
    public void updateItem(ItemDTO dto) {
        if (!repo.existsById(dto.getCode())) {
            throw new RuntimeException("Item Not Exist. Please enter Valid id..!");
        }
        repo.save(mapper.map(dto, Item.class));
    }

    @Override
    public void deleteItem(ItemDTO dto) {
        if (!repo.existsById(dto.getCode())) {
            throw new RuntimeException("Wrong ID..Please enter valid id..!");
        }
        repo.delete(mapper.map(dto, Item.class));
    }
}
