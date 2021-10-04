package com.retoTecnicoSoftCaribbean.CRUD_ArbolBinario.service;

import com.retoTecnicoSoftCaribbean.CRUD_ArbolBinario.entity.Clientes;
import com.retoTecnicoSoftCaribbean.CRUD_ArbolBinario.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ClienteService{

    @Autowired
    ClienteRepository clienteRepository;

    public List<Clientes> list(){
        return clienteRepository.findAll();
    }

    public Optional<Clientes> getOne(int id){
        return clienteRepository.findByNmcliente(id);
    }

    public void save(Clientes cliente){
        clienteRepository.save(cliente);
    }

    public void delete(int id){
        clienteRepository.deleteByNmcliente(id);
    }

}
