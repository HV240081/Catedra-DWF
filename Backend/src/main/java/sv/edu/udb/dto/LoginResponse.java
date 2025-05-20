package sv.edu.udb.dto;

public class LoginResponse {
    private boolean success;
    private String message;

    // Constructor vacío requerido por frameworks
    public LoginResponse() {
    }

    // Constructor con parámetros para respuestas personalizadas
    public LoginResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    // Getters y setters
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
