package br.unaerp.repository;

import br.unaerp.models.Participante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ParticipanteRepository extends JpaRepository<Participante, Long> {
}
