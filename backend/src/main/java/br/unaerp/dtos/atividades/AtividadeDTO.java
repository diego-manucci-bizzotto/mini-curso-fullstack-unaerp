package br.unaerp.dtos.atividades;

import br.unaerp.dtos.inscricoes.InscricaoDTO;
import br.unaerp.models.Atividade;
import br.unaerp.models.Inscricao;

import java.util.List;
import java.util.stream.Collectors;

public record AtividadeDTO(Long id, String titulo, String descricao, String responsavel, Integer maxInscrito, List<InscricaoDTO> inscricoes) {

    public AtividadeDTO(Atividade atividade){
        this(
        atividade.getId(),
        atividade.getTitulo(),
        atividade.getDescricao(),
        atividade.getResponsavel(),
        atividade.getMaximoInscrito(),
        convertInscricaoParaDTO(atividade.getInscricoes())
        );
    }

    private static List<InscricaoDTO> convertInscricaoParaDTO(List<Inscricao> inscricoes) {
        return inscricoes.stream()
                .map(InscricaoDTO::new)
                .collect(Collectors.toList());
    }
}
