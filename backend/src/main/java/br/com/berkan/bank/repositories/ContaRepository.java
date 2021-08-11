package br.com.berkan.bank.repositories;

import br.com.berkan.bank.domain.entities.Conta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContaRepository extends JpaRepository<Conta, Long> {

    @Query("SELECT c FROM conta c WHERE c.tipoConta = ?1")
    List<Conta> findContaByTipoConta(String tipoConta);
}
