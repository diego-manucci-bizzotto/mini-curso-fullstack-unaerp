package br.unaerp.dtos.atividades;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CriarAtividadeDTO(@NotBlank (message = "titulo é obrigatório") String titulo,
                                @NotBlank (message = "descrição é obrigatório") String descricao,
                                @NotBlank (message = "descrição é obrigatório") String responsavel,
                                @NotNull (message = "descrição é obrigatório") Integer maximoInscrito) {
}
