package sv.edu.udb.repository;

import sv.edu.udb.model.CategoriaIngreso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoriaIngresoRepository extends JpaRepository<CategoriaIngreso, Long> {
    Optional<CategoriaIngreso> findByNombreCategoria(String nombreCategoria);
}