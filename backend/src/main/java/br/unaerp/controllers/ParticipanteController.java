package br.unaerp.controllers;

import br.unaerp.dtos.participantes.CriarParticipanteDTO;
import br.unaerp.dtos.participantes.ParticipanteDTO;
import br.unaerp.models.Participante;
import br.unaerp.services.ParticipanteService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("participantes")
public class ParticipanteController {

    private final ParticipanteService participanteService;

    public ParticipanteController(ParticipanteService participanteService) {
        this.participanteService = participanteService;
    }

    @GetMapping
    public ResponseEntity<List<ParticipanteDTO>> listarTodos(){
        return ResponseEntity.ok(participanteService.listarTodos());
    }

    @GetMapping("{id}")
    public ResponseEntity<ParticipanteDTO> listarPorId(@PathVariable Long id){
        return ResponseEntity.ok(participanteService.listarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Long> criar(@RequestBody @Valid CriarParticipanteDTO participanteDTO){
        Participante participante = participanteService.criar(participanteDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(participante.getId());
    }

    @PutMapping("{id}")
    public ResponseEntity<Void> editar(@PathVariable Long id, @RequestBody @Valid CriarParticipanteDTO participanteDTO){
        participanteService.editar(id, participanteDTO);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        participanteService.deletar(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
