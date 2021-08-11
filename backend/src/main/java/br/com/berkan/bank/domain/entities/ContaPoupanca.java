package br.com.berkan.bank.domain.entities;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("POUPANCA")
public class ContaPoupanca extends Conta {

    @Override
    public String getTipoConta() {
        return "POUPANCA";
    }

}
