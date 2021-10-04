package com.retoTecnicoSoftCaribbean.CRUD_ArbolBinario.repository;

import com.retoTecnicoSoftCaribbean.CRUD_ArbolBinario.entity.Clientes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface ClienteRepository extends JpaRepository<Clientes, Integer> {

    void deleteByNmcliente(int nmcliente);

    Optional<Clientes> findByNmcliente(int id);
}
