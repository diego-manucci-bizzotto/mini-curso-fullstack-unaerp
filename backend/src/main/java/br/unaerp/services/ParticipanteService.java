package br.unaerp.services;

import br.unaerp.dtos.participantes.CriarParticipanteDTO;
import br.unaerp.dtos.participantes.ParticipanteDTO;
import br.unaerp.exceptions.RecursoNaoEncontradoException;
import br.unaerp.models.Participante;
import br.unaerp.repository.ParticipanteRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ParticipanteService {
    private final ParticipanteRepository participanteRepository;

    public ParticipanteService(ParticipanteRepository participanteRepository) {
        this.participanteRepository = participanteRepository;
    }

    public Participante findById(Long id){
        return participanteRepository.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException(String.format("Entidade com id %s não encontrado.", id)));
    }
    public List<ParticipanteDTO> listarTodos() {
        return participanteRepository.findAll().stream().map(ParticipanteDTO::new).collect(Collectors.toList());
    }

    public ParticipanteDTO listarPorId(Long id){
        return new ParticipanteDTO(findById(id));
    }

    @Transactional
    public Participante criar(CriarParticipanteDTO participanteDTO) {
        return participanteRepository.save(new Participante(participanteDTO));
    }

    @Transactional
    public void editar(Long id, CriarParticipanteDTO participanteDTO) {
        Participante participante = findById(id);
        editar(participante, participanteDTO);
        participanteRepository.save(participante);
    }

    public void editar (Participante participante, CriarParticipanteDTO participanteDTO){
        participante.setNome(participanteDTO.nome());
        participante.setUrlImagem(participanteDTO.urlImagem());
    }

    @Transactional
    public void deletar(Long id){
        participanteRepository.delete(findById(id));
    }
}
