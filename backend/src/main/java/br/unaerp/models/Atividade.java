package br.unaerp.models;

import br.unaerp.dtos.atividades.CriarAtividadeDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data 
@EqualsAndHashCode(of = "id")
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ATIVIDADE")
public class Atividade {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAtividade")
    private Long id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "responsavel")
    private String responsavel;

    @Column(name = "qtdInscrito")
    private Integer maximoInscrito;

//    @ManyToMany
//    @JoinTable(
//            name="ATIVIDADE_PARTICIPANTE",
//            joinColumns = @JoinColumn(name="idAtividade"),
//            inverseJoinColumns = @JoinColumn(name="idParticipante")
//    )
//    List<Participante> participantes;

    @OneToMany(mappedBy = "atividade")
    List<Inscricao> inscricoes;

    public Atividade (CriarAtividadeDTO atividadeDTO){
        this.titulo = atividadeDTO.titulo();
        this.descricao = atividadeDTO.descricao();
        this.responsavel = atividadeDTO.responsavel();
        this.maximoInscrito = atividadeDTO.maximoInscrito();
    }

//    public Integer getQuantidadeParticipante(){
//        return this.getParticipantes().size();
//    }
}
