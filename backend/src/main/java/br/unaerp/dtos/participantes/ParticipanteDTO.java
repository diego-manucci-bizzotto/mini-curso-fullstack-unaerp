package br.unaerp.dtos.participantes;

import br.unaerp.models.Participante;

public record ParticipanteDTO (Long id, String nome, String urlImagem){
    public ParticipanteDTO(Participante participante){
        this(
                participante.getId(),
                participante.getNome(),
                participante.getUrlImagem()
        );
    }
}
