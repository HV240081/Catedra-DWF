package sv.edu.udb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sv.edu.udb.model.UsuarioRegistro;

import java.util.Optional;

public interface UsuarioRegistroRepository extends JpaRepository<UsuarioRegistro, Integer> {
    Optional<UsuarioRegistro> findByNombreUsuario(String nombreUsuario);
    Optional<UsuarioRegistro> findByEmail(String email);
    boolean existsByNombreUsuario(String nombreUsuario);
    boolean existsByEmail(String email);
}