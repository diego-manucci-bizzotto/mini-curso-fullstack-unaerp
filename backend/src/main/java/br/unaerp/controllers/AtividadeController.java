package br.unaerp.controllers;

import br.unaerp.dtos.atividades.AtividadeDTO;
import br.unaerp.dtos.atividades.CriarAtividadeDTO;
import br.unaerp.services.AtividadeService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@Controller
@RequestMapping("atividades")
public class AtividadeController {

    private final AtividadeService atividadeService;

    public AtividadeController(AtividadeService atividadeService) {
        this.atividadeService = atividadeService;
    }

    @GetMapping
    public ResponseEntity<List<AtividadeDTO>> listarTodos() {
        return ResponseEntity.ok(atividadeService.listarTodos());
    }

    @PostMapping
    public ResponseEntity<Long> criar (@RequestBody @Valid CriarAtividadeDTO atividadeDTO) {
        Long id = atividadeService.criar(atividadeDTO);
        log.info("Nova entidade com id [{}] criado com sucesso.", id);
        return ResponseEntity.status(HttpStatus.CREATED).body(id);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deletar (@PathVariable Long id){
        atividadeService.deletar(id);
        log.info("Entidade com id [{}] deletado com sucesso.", id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PutMapping("{id}")
    public ResponseEntity<Void> editar (@PathVariable Long id, @RequestBody @Valid CriarAtividadeDTO atividadeDTO){
        atividadeService.editar(id, atividadeDTO);
        log.info("Entidade com id [{}] editado com sucesso", id);
        return ResponseEntity.ok().build();
    }
}
