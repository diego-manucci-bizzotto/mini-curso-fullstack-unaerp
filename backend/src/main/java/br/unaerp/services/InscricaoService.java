package br.unaerp.services;

import br.unaerp.exceptions.MaximoInscritoException;
import br.unaerp.exceptions.RecursoNaoEncontradoException;
import br.unaerp.models.Atividade;
import br.unaerp.models.Inscricao;
import br.unaerp.models.Participante;
import br.unaerp.repository.InscricaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class InscricaoService {

    private final InscricaoRepository inscricaoRepository;

    public InscricaoService(InscricaoRepository inscricaoRepository) {
        this.inscricaoRepository = inscricaoRepository;
    }

    public Inscricao findById(Long id){
        return inscricaoRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException(String.format("Inscrição com id [%s] não encontrado.", id)));
    }

    @Transactional
    public Inscricao criar(Atividade atividade, Participante participante) {
        verificarDisponibilidade(atividade);
        return inscricaoRepository.save(new Inscricao(atividade, participante));
    }

    private void verificarDisponibilidade(Atividade atividade) {
        if(atividade.getInscricoes().size() + 1 > atividade.getMaximoInscrito()){
            throw new MaximoInscritoException("Atividade atingiu o máximo de inscrito.");
        }
    }

    @Transactional
    public void desvincular(Long id) {
        inscricaoRepository.delete(findById(id));
    }
}
