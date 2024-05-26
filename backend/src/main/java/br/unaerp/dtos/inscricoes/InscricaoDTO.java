package br.unaerp.dtos.inscricoes;

import br.unaerp.dtos.participantes.ParticipanteDTO;
import br.unaerp.models.Inscricao;

public record InscricaoDTO(Long idInscricao, ParticipanteDTO participante) {
    public InscricaoDTO(Inscricao inscricao){
        this(
          inscricao.getId(),
          new ParticipanteDTO(inscricao.getParticipante())
        );
    }
}
