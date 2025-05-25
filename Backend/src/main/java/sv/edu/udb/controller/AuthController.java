package sv.edu.udb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sv.edu.udb.dto.LoginRequest;
import sv.edu.udb.dto.LoginResponse;
import sv.edu.udb.dto.RegisterRequest; // <-- A?ADE ESTA L?NEA
import sv.edu.udb.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }

    @PostMapping("/register")
    public LoginResponse register(@RequestBody RegisterRequest request) { // <-- CAMBIO AQU?
        return authService.register(request);
    }
}