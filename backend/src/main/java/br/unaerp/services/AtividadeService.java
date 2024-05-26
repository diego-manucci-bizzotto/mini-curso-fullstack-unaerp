package br.unaerp.services;

import br.unaerp.dtos.atividades.AtividadeDTO;
import br.unaerp.dtos.atividades.CriarAtividadeDTO;
import br.unaerp.exceptions.MaximoInscritoException;
import br.unaerp.exceptions.RecursoNaoEncontradoException;
import br.unaerp.models.Atividade;
import br.unaerp.repository.AtividadeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class AtividadeService {

    private final AtividadeRepository atividadeRepository;

    public AtividadeService(AtividadeRepository atividadeRepository) {
        this.atividadeRepository = atividadeRepository;
    }

    public Atividade findById(Long id) {
        return atividadeRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException(String.format("Atividade com id [%s] não encontrado.", id)));
    }

    public List<AtividadeDTO> listarTodos() {
        return atividadeRepository.findAll().stream().map(AtividadeDTO::new).collect(Collectors.toList());
    }

    public AtividadeDTO listarPorId(Long id) {
        return new AtividadeDTO(findById(id));
    }

    @Transactional
    public Long criar(CriarAtividadeDTO atividade) {
        Atividade novaAtividade = atividadeRepository.save(new Atividade(atividade));
        return novaAtividade.getId();
    }

    @Transactional
    public void deletar(Long id) {
        atividadeRepository.delete(findById(id));
    }

    @Transactional
    public void editar(Long id, CriarAtividadeDTO atividadeDTO) {
        Atividade atividade = findById(id);
        editar(atividade, atividadeDTO);
        atividadeRepository.save(atividade);
    }

    public void editar(Atividade atividade, CriarAtividadeDTO atividadeDTO) {
        validarEdicao(atividade.getInscricoes().size(), atividadeDTO.maximoInscrito());

        atividade.setTitulo(atividadeDTO.titulo());
        atividade.setDescricao(atividadeDTO.descricao());
        atividade.setResponsavel(atividadeDTO.responsavel());
        atividade.setMaximoInscrito(atividadeDTO.maximoInscrito());
    }

    private void validarEdicao(Integer quantidadeParticipante, Integer novoMaximoInscrito) {
        if (quantidadeParticipante > novoMaximoInscrito) {
            throw new MaximoInscritoException("Não é possível diminuir o número máximo de inscritos, pois a atividade já possui participantes inscritos.");
        }
    }

}
