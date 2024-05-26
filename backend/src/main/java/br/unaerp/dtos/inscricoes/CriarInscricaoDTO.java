package br.unaerp.dtos.inscricoes;

import br.unaerp.dtos.participantes.CriarParticipanteDTO;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

public record CriarInscricaoDTO(@NotNull Long idAtividade, @Valid CriarParticipanteDTO participante) {
}
