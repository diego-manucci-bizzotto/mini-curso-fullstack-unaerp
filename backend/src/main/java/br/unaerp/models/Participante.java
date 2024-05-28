package br.unaerp.models;

import br.unaerp.dtos.participantes.CriarParticipanteDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode (of = "id")
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "PARTICIPANTE")
public class Participante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IDPARTICIPANTE")
    private Long id;

    @Column(name = "NOME")
    private String nome;

    @Column(name = "URLIMAGEM")
    private String urlImagem;

    public Participante(CriarParticipanteDTO participanteDTO){
        this.nome = participanteDTO.nome();
        this.urlImagem = participanteDTO.urlImagem();
    }
}
