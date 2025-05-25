package sv.edu.udb.model;

import jakarta.persistence.*;

@Entity // Marca esta clase como una entidad JPA
@Table(name = "usuario_registro") // Especifica el nombre de la tabla en la DB
public class UsuarioRegistro {

    @Id // Marca 'id' como la clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Generaci?n autom?tica de ID
    private int id;

    @Column(name = "nombre_usuario", unique = true, nullable = false) // Mapea a la columna 'nombre_usuario', es ?nico y no nulo
    private String nombreUsuario;

    @Column(name = "email", unique = true, nullable = false) // Mapea a la columna 'email', es ?nico y no nulo
    private String email;

    @Column(name = "contrasena", nullable = false) // Mapea a la columna 'contrasena', no nulo
    private String contrasena;

    // Getters y Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
}