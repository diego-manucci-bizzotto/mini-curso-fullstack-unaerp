package br.unaerp.controllers;

import br.unaerp.dtos.inscricoes.CriarInscricaoDTO;
import br.unaerp.models.Atividade;
import br.unaerp.models.Inscricao;
import br.unaerp.models.Participante;
import br.unaerp.services.AtividadeService;
import br.unaerp.services.InscricaoService;
import br.unaerp.services.ParticipanteService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("inscricoes")
public class InscricaoController {

    private final InscricaoService inscricaoService;
    private final AtividadeService atividadeService;
    private final ParticipanteService participanteService;

    public InscricaoController(InscricaoService inscricaoService, AtividadeService atividadeService, ParticipanteService participanteService) {
        this.inscricaoService = inscricaoService;
        this.atividadeService = atividadeService;
        this.participanteService = participanteService;
    }

    @PostMapping
    public ResponseEntity<Long> criar (@RequestBody @Valid CriarInscricaoDTO criarInscricaoDTO){
        Atividade atividade = atividadeService.findById(criarInscricaoDTO.idAtividade());
        Participante participante = participanteService.criar(criarInscricaoDTO.participante());
        Inscricao inscricao = inscricaoService.criar(atividade, participante);

        return ResponseEntity.status(HttpStatus.CREATED).body(inscricao.getId());
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> desvincular(@PathVariable Long id){
        inscricaoService.desvincular(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
