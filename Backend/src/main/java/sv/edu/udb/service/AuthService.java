package sv.edu.udb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sv.edu.udb.dto.LoginRequest;
import sv.edu.udb.dto.LoginRequest;
import sv.edu.udb.model.UsuarioLogin;
import sv.edu.udb.repository.UsuarioLoginRepository;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UsuarioLoginRepository usuarioLoginRepository;

    public LoginResponse login(LoginRequest loginRequest) {
        Optional<UsuarioLogin> usuario = usuarioLoginRepository.findByNombreUsuario(loginRequest.getUsername());

        if (usuario.isEmpty()) {
            return new LoginResponse(false, "Usuario no encontrado");
        }

        if (!usuario.get().getContrasena().equals(loginRequest.getPassword())) {
            return new LoginResponse(false, "Contraseña incorrecta");
        }

        return new LoginResponse(true, "Inicio de sesión exitoso");
    }
}
