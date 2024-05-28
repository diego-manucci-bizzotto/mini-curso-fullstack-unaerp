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
    @Column(name = "IDATIVIDADE")
    private Long id;

    @Column(name = "TITULO")
    private String titulo;

    @Column(name = "DESCRICAO")
    private String descricao;

    @Column(name = "RESPONSAVEL")
    private String responsavel;

    @Column(name = "QTDINSCRITO")
    private Integer maximoInscrito;

    @OneToMany(mappedBy = "atividade", cascade = CascadeType.REMOVE)
    List<Inscricao> inscricoes;

    public Atividade (CriarAtividadeDTO atividadeDTO){
        this.titulo = atividadeDTO.titulo();
        this.descricao = atividadeDTO.descricao();
        this.responsavel = atividadeDTO.responsavel();
        this.maximoInscrito = atividadeDTO.maximoInscrito();
    }
}
