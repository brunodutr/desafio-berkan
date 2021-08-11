package br.com.berkan.bank.domain.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

import static javax.persistence.DiscriminatorType.STRING;
import static javax.persistence.GenerationType.IDENTITY;
import static javax.persistence.InheritanceType.SINGLE_TABLE;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.EXISTING_PROPERTY, property = "tipo_conta")
@JsonSubTypes({
        @JsonSubTypes.Type(value = ContaCorrente.class, name = "CORRENTE"),
        @JsonSubTypes.Type(value = ContaPoupanca.class, name = "POUPANCA")
})
@Getter
@Setter
@Entity(name = "conta")
@Inheritance(strategy = SINGLE_TABLE)
@DiscriminatorColumn(name = "tipo_conta", discriminatorType = STRING)
public abstract class Conta {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long codigo;

    @Column(name = "tipo_conta", updatable = false, insertable = false)
    @JsonProperty("tipo_conta")
    private String tipoConta;

    @Column(nullable = false)
    private String titular;

    @Column(nullable = false)
    private BigDecimal saldo;

    public void merge(Conta otherConta){
        this.saldo = otherConta.saldo;
        this.titular = otherConta.titular;
    };
}
