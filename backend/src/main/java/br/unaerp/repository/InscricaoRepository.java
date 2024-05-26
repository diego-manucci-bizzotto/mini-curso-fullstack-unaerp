package br.unaerp.repository;

import br.unaerp.models.Inscricao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface InscricaoRepository extends JpaRepository<Inscricao, Long> {
}
