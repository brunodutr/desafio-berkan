package br.com.berkan.bank.controllers;

import br.com.berkan.bank.domain.entities.Conta;
import br.com.berkan.bank.services.ContaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping({"/api/conta"})
public class ContaController {

    @Autowired
    private ContaService contaService;

    @GetMapping
    public List<Conta> findAll(@RequestParam Optional<String> tipoConta) {

        if (tipoConta.isPresent()) {
            return contaService.findContaByTipoConta(tipoConta.get());
        } else {
            return contaService.findAll();
        }

    }

    @GetMapping(path = {"/{codigo}"})
    public ResponseEntity<Conta> findByCodigo(@PathVariable Long codigo) {

        Conta conta = contaService.findByCodigo(codigo);

        if (conta != null) {
            return ResponseEntity.ok().body(conta);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping
    public Conta create(@RequestBody Conta conta) {
        return contaService.create(conta);
    }

    @PutMapping(value = "/{codigo}")
    public ResponseEntity update(@PathVariable Long codigo, @RequestBody Conta conta) {

        Conta c = contaService.update(codigo, conta);

        if (c != null) {
            return ResponseEntity.ok().body(c);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @DeleteMapping(path = {"/{codigo}"})
    public ResponseEntity<?> delete(@PathVariable Long codigo) {

        Long id = contaService.delete(codigo);

        if (id != null) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }

    }
}
