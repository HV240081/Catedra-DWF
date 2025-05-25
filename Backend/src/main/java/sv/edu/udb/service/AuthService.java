package sv.edu.udb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sv.edu.udb.dto.LoginRequest;
import sv.edu.udb.dto.LoginResponse;
import sv.edu.udb.dto.RegisterRequest; // <-- A?ADE ESTA L?NEA
import sv.edu.udb.model.UsuarioLogin;
import sv.edu.udb.model.UsuarioRegistro; // <-- A?ADE ESTA L?NEA
import sv.edu.udb.repository.UsuarioLoginRepository;
import sv.edu.udb.repository.UsuarioRegistroRepository; // <-- A?ADE ESTA L?NEA

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UsuarioLoginRepository usuarioRepo; // Repositorio para el login

    @Autowired
    private UsuarioRegistroRepository usuarioRegistroRepo; // <-- A?ADE ESTA L?NEA: Repositorio para el registro

    @Autowired
    private PasswordEncoder passwordEncoder;

    public LoginResponse login(LoginRequest request) {
        // En tu l?gica actual, el login busca en 'usuario_login'
        Optional<UsuarioLogin> usuario = usuarioRepo.findByNombreUsuario(request.getUsername());

        // Si prefieres que el login tambi?n use la tabla 'usuario_registro',
        // puedes modificar esta l?gica. Por ahora, asumo que 'usuario_login'
        // sigue siendo para el login directo.
        if (usuario.isPresent() && passwordEncoder.matches(request.getPassword(), usuario.get().getContrasena())) {
            return new LoginResponse(true, "Inicio de sesi?n exitoso");
        }

        return new LoginResponse(false, "Usuario o contrase?a incorrectos");
    }

    // M?todo register modificado para usar RegisterRequest y UsuarioRegistro
    public LoginResponse register(RegisterRequest request) { // <-- CAMBIO DE TIPO DE REQUEST
        // Verifica si el nombre de usuario ya existe en usuario_registro
        if (usuarioRegistroRepo.existsByNombreUsuario(request.getUsername())) {
            return new LoginResponse(false, "El nombre de usuario ya est? en uso");
        }

        // Verifica si el email ya existe en usuario_registro
        if (usuarioRegistroRepo.existsByEmail(request.getEmail())) {
            return new LoginResponse(false, "El correo electr?nico ya est? registrado");
        }

        UsuarioRegistro nuevoRegistro = new UsuarioRegistro(); // <-- CREA UNA INSTANCIA DE UsuarioRegistro
        nuevoRegistro.setNombreUsuario(request.getUsername());
        nuevoRegistro.setEmail(request.getEmail()); // <-- NUEVO CAMPO
        // Como est?s usando NoOpPasswordEncoder, esto guardar? la contrase?a en texto plano.
        // Si en el futuro quieres cifrar, solo tendr?as que volver a BCryptPasswordEncoder
        // en SecurityConfig y este c?digo funcionar?a sin cambios.
        nuevoRegistro.setContrasena(passwordEncoder.encode(request.getPassword()));
        usuarioRegistroRepo.save(nuevoRegistro);

        return new LoginResponse(true, "Usuario registrado exitosamente");
    }
}