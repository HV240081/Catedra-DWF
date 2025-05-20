package sv.edu.udb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sv.edu.udb.model.UsuarioLogin;

import java.util.Optional;

public interface UsuarioLoginRepository extends JpaRepository<UsuarioLogin, Integer> {
    Optional<UsuarioLogin> findByNombreUsuario(String nombreUsuario);
}
