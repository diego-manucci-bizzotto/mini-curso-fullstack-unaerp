package br.unaerp.dtos.participantes;

import jakarta.validation.constraints.NotBlank;

public record CriarParticipanteDTO(@NotBlank(message = "nome é obrigatório") String nome,
                                   @NotBlank(message = "urlImagem é obrigatório") String urlImagem) {
}
