package br.unaerp.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@EqualsAndHashCode (of = "id")
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ATIVIDADE_PARTICIPANTE")
public class Inscricao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAtividadeParticipante")
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "IdAtividade")
    private Atividade atividade;

    @ManyToOne
    @JoinColumn(name = "idParticipante")
    private Participante participante;

    @Column(name= "dtInscricao")
    private LocalDate dataInscricao;

    public Inscricao(Atividade atividade, Participante participante){
        this.atividade = atividade;
        this.participante = participante;
        this.dataInscricao = LocalDate.now();
    }
}
