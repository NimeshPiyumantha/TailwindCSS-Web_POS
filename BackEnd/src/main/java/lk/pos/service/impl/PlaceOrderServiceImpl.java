package lk.pos.service.impl;


import lk.pos.dto.CustomDTO;
import lk.pos.dto.OrderDetailsDTO;
import lk.pos.dto.OrdersDTO;
import lk.pos.entity.Item;
import lk.pos.entity.OrderDetails;
import lk.pos.entity.Orders;
import lk.pos.repo.ItemRepo;
import lk.pos.repo.OrderDetailsRepo;
import lk.pos.repo.PlaceOrderRepo;
import lk.pos.service.PlaceOrderService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

/**
 * @author : Nimesh Piyumantha
 * @since : 0.1.0
 **/
@Service
@Transactional
public class PlaceOrderServiceImpl implements PlaceOrderService {
    @Autowired
    private PlaceOrderRepo repo;
    @Autowired
    private OrderDetailsRepo orRepo;
    @Autowired
    private ItemRepo itemRepo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void placeOrder(OrdersDTO dto) {
        Orders ord = mapper.map(dto, Orders.class);
        if (repo.existsById(ord.getOid())) {
            throw new RuntimeException("Order" + ord.getOid() + " Already added.!");
        }
        repo.save(ord);

        //Update Item Qty
        for (OrderDetails od : ord.getOrderDetails()) {
            Item item = itemRepo.findById(od.getItemCode()).get();
            item.setQty(item.getQty() - od.getQty());
            itemRepo.save(item);
        }
    }

    @Override
    public ArrayList<OrdersDTO> LoadOrders() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<OrdersDTO>>() {
        }.getType());
    }

    @Override
    public ArrayList<OrderDetailsDTO> LoadOrderDetails() {
        return mapper.map(orRepo.findAll(), new TypeToken<ArrayList<OrderDetailsDTO>>() {
        }.getType());
    }

    @Override
    public CustomDTO OrderIdGenerate() {
        return new CustomDTO(repo.getLastIndex());
    }


}
