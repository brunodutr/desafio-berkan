package br.com.berkan.bank.services;

import br.com.berkan.bank.domain.entities.Conta;
import br.com.berkan.bank.repositories.ContaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContaService {

    @Autowired
    private ContaRepository contaRepository;

    public List<Conta> findAll() {
        return contaRepository.findAll();
    }

    public List<Conta> findContaByTipoConta(String tipoConta) {
        return contaRepository.findContaByTipoConta(tipoConta);
    }

    public Conta findByCodigo(Long codigo) {
        return contaRepository.findById(codigo).orElse(null);
    }

    public Conta create(Conta conta) {
        return contaRepository.save(conta);
    }

    public Conta update(Long codigo, Conta conta) {
        return contaRepository.findById(codigo).map(c -> {
            c.merge(conta);
            return contaRepository.save(c);
        }).orElse(null);
    }

    public Long delete(Long codigo) {
        return contaRepository.findById(codigo).map(c -> {
            contaRepository.deleteById(codigo);
            return codigo;
        }).orElse(null);
    }
}
