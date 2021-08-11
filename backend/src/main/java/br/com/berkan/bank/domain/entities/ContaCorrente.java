package br.com.berkan.bank.domain.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.math.BigDecimal;


@Getter
@Setter
@Entity
@DiscriminatorValue("CORRENTE")
public class ContaCorrente extends Conta {

    @JsonProperty("limite_emprestimo")
    private BigDecimal limiteEmprestimo;

    @Override
    public String getTipoConta() {
        return "CORRENTE";
    }

    @Override
    public void merge(Conta otherConta) {
        super.merge(otherConta);

        this.limiteEmprestimo = ((ContaCorrente) otherConta).limiteEmprestimo;
    }
}
