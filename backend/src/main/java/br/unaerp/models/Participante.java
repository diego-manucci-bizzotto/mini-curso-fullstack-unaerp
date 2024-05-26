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
    @Column(name = "idParticipante")
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "urlImagem") 
    private String urlImagem;

    public Participante(CriarParticipanteDTO participanteDTO){
        this.nome = participanteDTO.nome();
        this.urlImagem = participanteDTO.urlImagem();
    }
}
