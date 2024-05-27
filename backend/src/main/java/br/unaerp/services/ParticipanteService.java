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

    @Transactional
    public Participante criar(CriarParticipanteDTO participanteDTO) {
        return participanteRepository.save(new Participante(participanteDTO));
    }
}
